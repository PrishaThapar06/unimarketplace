import React from 'react';
import './style.css';
import NotFoundImg from '../../assets/images/page-404.png';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <section className='notFound flex items-center justify-center min-h-screen'>
            <div className="container mx-auto text-center">
                <div className='box'>
                    <img src={NotFoundImg} className="mx-auto" />
                    <br /><br />
                    <h1 className="text-4xl font-bold">Page Not Found</h1>
                    <p className="mt-4 text-lg">The link you clicked may be broken or the page may have been removed.
                        Visit the Homepage or Contact us about the problem.</p>
                    <br />
                    <div className='flex justify-center'>
                        <Button className='btn-g btn-lg'><Link to={'/'}>Back to Home Page</Link></Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NotFound;
