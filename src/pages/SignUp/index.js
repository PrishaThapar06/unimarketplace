import React, { useState ,useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './style.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { Button } from '@mui/material';
import GoogleImg from '../../assets/images/google.png';

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../../firebase';

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { MyContext } from '../../App';
import axios from 'axios';

const auth = getAuth(app);

const SignUp = () => {
    const context = useContext(MyContext);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword1, setShowPassword1] = useState(false);
    const [showLoader, setShowLoader] = useState(false);

    const [formFields, setFormFields] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        conformPassword: ''
    });

    const signUp = async () => {
        if (formFields.email !== "" && formFields.password !== "" && formFields.conformPassword !== "") {
            if (formFields.password !== formFields.conformPassword) {
                alert("Passwords do not match");
                return;
            }

            setShowLoader(true);

            try {
                // Register with backend
                const response = await axios.post('http://localhost:8080/api/register', {
                    firstName: formFields.firstName,
                    lastName: formFields.lastName,
                    email: formFields.email,
                    password: formFields.password
                });

                console.log('Backend response:', response.data);
                
                setShowLoader(false);
                setFormFields({
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    conformPassword: ''
                });

                // Redirect to home page
                localStorage.setItem('isLogin', true); 
                context.signUp();

                navigate('/');
            } catch (error) {
                console.error(error);
                alert(error.message);
                setShowLoader(false);
            }
        } else {
            alert("Please fill all the details");
        }
    };

    const signUpWithGoogle = async () => {
        const provider = new GoogleAuthProvider();

        setShowLoader(true);

        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            // Register with backend
            const response = await axios.post('http://localhost:8080/api/register', {
                firstName: user.displayName.split(' ')[0],
                lastName: user.displayName.split(' ')[1],
                email: user.email,
                password: user.uid // Or any other unique identifier
            });

            console.log('Backend response:', response.data);
            
            setShowLoader(false);

            // Redirect to home page
            navigate('/');
        } catch (error) {
            console.error(error);
            alert(error.message);
            setShowLoader(false);
        }
    };

    const onChangeField = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setFormFields(() => ({
            ...formFields,
            [name]: value,
        }));
    };

    return (
        <>
            <section className='signIn mb-5'>
                <div className="breadcrumbWrapper res-hide">
                    <div className="container-fluid">
                        <ul className="breadcrumb breadcrumb2 mb-0">
                            <li><Link to="/">Home</Link></li>
                            <li>SignUp</li>
                        </ul>
                    </div>
                </div>

                <div className='loginWrapper'>
                    <div className='card shadow'>
                        <Backdrop
                            sx={{ color: '#000', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                            open={showLoader}
                            className="formLoader"
                        >
                            <CircularProgress color="inherit" />
                        </Backdrop>

                        <h3>SignUp</h3>
                        <form className='mt-4'>
                            <div className='form-group mb-4 w-100'>
                                <TextField id="firstName" type="text" name='firstName' label="First Name" className='w-100' onChange={onChangeField} value={formFields.firstName} autoComplete='off'/>
                            </div>
                            <div className='form-group mb-4 w-100'>
                                <TextField id="lastName" type="text" name='lastName' label="Last Name" className='w-100' onChange={onChangeField} value={formFields.lastName} autoComplete='off'/>
                            </div>
                            <div className='form-group mb-4 w-100'>
                                <TextField id="email" type="email" name='email' label="Email" className='w-100' onChange={onChangeField} value={formFields.email} autoComplete='off'/>
                            </div>
                            <div className='form-group mb-4 w-100'>
                                <div className='position-relative'>
                                    <TextField id="password" type={showPassword === false ? 'password' : 'text'} name='password' label="Password" className='w-100' onChange={onChangeField} value={formFields.password} autoComplete='off' />
                                    <Button className='icon' onClick={() => setShowPassword(!showPassword)}>
                                        {
                                            showPassword === false ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />
                                        }
                                    </Button>
                                </div>
                            </div>
                            <div className='form-group mb-4 w-100'>
                                <div className='position-relative'>
                                    <TextField id="conformPassword" type={showPassword1 === false ? 'password' : 'text'} name='conformPassword' label="Confirm Password" className='w-100' onChange={onChangeField} value={formFields.conformPassword} autoComplete='off' />
                                    <Button className='icon' onClick={() => setShowPassword1(!showPassword1)}>
                                        {
                                            showPassword1 === false ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />
                                        }
                                    </Button>
                                </div>
                            </div>

                            <div className='form-group mt-5 mb-4 w-100'>
                                <Button className='btn btn-g btn-lg w-100' onClick={signUp}>Sign Up</Button>
                            </div>
                            <p className='text-center'>OR</p>
                            <div className='form-group mt-2 mb-4 w-100'>
                                <Button className='btn btn-g btn-lg w-100' onClick={signUpWithGoogle}>
                                    <img src={GoogleImg} alt="Google" style={{ marginRight: '10px',height:30 }} />
                                    Sign Up with Google
                                </Button>
                            </div>

                            <p className='text-center'>Already have an account? 
                                <b> <Link to="/signIn">Sign In</Link></b>
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SignUp;
