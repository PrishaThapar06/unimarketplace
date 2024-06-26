import React from 'react';
import './footer.css';
import Icon1 from '../../assets/images/icon-1.svg';
import Icon2 from '../../assets/images/icon-2.svg'
import Icon3 from '../../assets/images/icon-3.svg'
import Icon4 from '../../assets/images/icon-4.svg'
import Icon5 from '../../assets/images/icon-5.svg'
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import GridViewIcon from "@mui/icons-material/GridView";
import { Link } from 'react-router-dom';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import paymentImage from '../../assets/images/payment-method.png';

import appStore from '../../assets/images/app-store.jpg';
import googlePlay from '../../assets/images/google-play.jpg';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Newsletter from '../../components/newsletter/index';
import NewsletterImg from '../../assets/images/newletter.jpg';
import { Height } from '@mui/icons-material';

const Footer = () => {
    return (
        <>

            <section className='newsLetterSection'>
                <div className='container-fluid'>
                    <div className='box d-flex align-items-center'>
                        <div className='info'>
                            <h2>Stay home & get your daily <br />needs from our shop</h2>
                            <p>Start You'r Daily Shopping with UniMarketPlace</p>
                            <br /><br className='res-hide' />
                            <Newsletter />
                        </div>

                        <div className='hidden md:block' style={{paddingLeft:250}} >
                            <img src={NewsletterImg} width={600} height={600}/>
                        </div>


                    </div>
                </div>
            </section>

            <div className='footerWrapper'>
                <div className='footerBoxes'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col'>
                                <div className='box d-flex align-items-center w-100'>
                                    <span><img src={Icon1} /></span>
                                    <div className='info'>
                                        <h4>Best prices & offers</h4>
                                        <p>Orders £50 or more</p>
                                    </div>
                                </div>
                            </div>

                            <div className='col'>
                                <div className='box d-flex align-items-center w-100'>
                                    <span><img src={Icon2} /></span>
                                    <div className='info'>
                                        <h4>Free delivery</h4>
                                        <p>Orders £50 or more</p>
                                    </div>
                                </div>
                            </div>

                            <div className='col'>
                                <div className='box d-flex align-items-center w-100'>
                                    <span><img src={Icon3} /></span>
                                    <div className='info'>
                                        <h4>Great daily deal</h4>
                                        <p>Orders £50 or more</p>
                                    </div>
                                </div>
                            </div>


                            <div className='col'>
                                <div className='box d-flex align-items-center w-100'>
                                    <span><img src={Icon4} /></span>
                                    <div className='info'>
                                        <h4>Wide assortment</h4>
                                        <p>Orders £50 or more</p>
                                    </div>
                                </div>
                            </div>


                            <div className='col'>
                                <div className='box d-flex align-items-center w-100'>
                                    <span><img src={Icon5} /></span>
                                    <div className='info'>
                                        <h4>Easy returns</h4>
                                        <p>Orders £50 or more</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                <footer>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-md-3 part1'>
                            <Link to={"/"}>
  <Button
    className="text-white catTab res-hide"
    style={{
      background: "linear-gradient(to right, #16a34a, #76e1f0)",
      borderRadius: "0.375rem", // Tailwind's rounded-md equivalent
      padding: "1rem 2rem", // Adjusting padding to make it more balanced
      fontSize: "1.25rem", // Increase text size
    }}
  >
    <span style={{ fontSize: "1.25rem" }}>UNI MARKET PLACE</span>
  </Button>
</Link>
                                <br /><br />
                                <p>Awesome website to help students</p>
                                <br />

                                <p><LocationOnOutlinedIcon /> <strong>Address</strong>: 5171 United Kingdom</p>
                                <p><HeadphonesOutlinedIcon /> <strong>Call Us:</strong> (+91) - 7558406860 </p>
                                <p><EmailOutlinedIcon /> <strong>Email:</strong> jainsiddhant214@gmail.com</p>
                                {/* <p><WatchLaterOutlinedIcon /> <strong>Hours:</strong> 08:00 - 20:00, Mon - Fri</p> */}

                            </div>


                            <div className='col-md-6 part2'>
                                <div className='row'>
                                    <div className='col'>
                                        <h3>Company</h3>
                                        <ul class="footer-list mb-sm-5 mb-md-0">
                                            <li><Link to="#">About Us</Link></li>
                                            <li><Link to="#">Delivery Information</Link></li>
                                            <li><Link to="#">Privacy Policy</Link></li>
                                            <li><Link to="#">Terms &amp; Conditions</Link></li>
                                            <li><Link to="#">Contact Us</Link></li>
                                            {/* <li><Link to="#">Support Center</Link></li>
                                            <li><Link to="#">Careers</Link></li> */}
                                        </ul>
                                    </div>

                                    <div className='col'>
                                        <h3>Company</h3>
                                        <ul class="footer-list mb-sm-5 mb-md-0">
                                            <li><Link to="#">Account</Link></li>
                                            <li><Link to="#">Delivery Information</Link></li>
                                            <li><Link to="#">Privacy Policy</Link></li>
                                            <li><Link to="#">Terms &amp; Conditions</Link></li>
                                            <li><Link to="#">Contact Us</Link></li>
                                            {/* <li><Link to="#">Support Center</Link></li>
                                            <li><Link to="#">Careers</Link></li> */}
                                        </ul>
                                    </div>


                                    <div className='col'>
                                        <h3>Corporate</h3>
                                        <ul class="footer-list mb-sm-5 mb-md-0">
                                            <li><Link to="#">About Us</Link></li>
                                            <li><Link to="#">Delivery Information</Link></li>
                                            <li><Link to="#">Privacy Policy</Link></li>
                                            <li><Link to="#">Terms &amp; Conditions</Link></li>
                                            <li><Link to="#">Contact Us</Link></li>
                                            {/* <li><Link to="#">Support Center</Link></li>
                                            <li><Link to="#">Careers</Link></li> */}
                                        </ul>
                                    </div>


                                    <div className='col'>
                                        <h3>Popular</h3>
                                        <ul class="footer-list mb-sm-5 mb-md-0">
                                            <li><Link to="#">About Us</Link></li>
                                            <li><Link to="#">Delivery Information</Link></li>
                                            <li><Link to="#">Privacy Policy</Link></li>
                                            <li><Link to="#">Terms &amp; Conditions</Link></li>
                                            <li><Link to="#">Contact Us</Link></li>
                                            {/* <li><Link to="#">Support Center</Link></li>
                                            <li><Link to="#">Careers</Link></li> */}
                                        </ul>
                                    </div>
                                </div>
                            </div>


                            <div className='col-md-3 part3'>
                                <h3>Install App</h3>
                                <br className='res-hide'/>
                                <p>From App Store or Google Play</p>

                                <div className='d-flex'>
                                    <Link to={''}><img src={appStore} width={150} /></Link>
                                    <Link to={''}><img src={googlePlay} className='mx-2' width={150} /></Link>
                                </div>

                                <br />

                                <p>Secured Payment Gateways</p>
                                <img src={paymentImage} />
                            </div>

                        </div>


                        <hr />



                        <div className='row lastStrip'>
                            <div className='col-md-3 part_1'>
                                <p>© 2024, UniMarketPlace - React Ecommerce Website
                                    All rights reserved</p>
                            </div>

                            <div className='col-md-6 d-flex part_2'>
                                <div className='m-auto d-flex align-items-center phWrap'>
                                    <div className='phNo d-flex align-items-center mx-5'>
                                        <span><HeadphonesOutlinedIcon /></span>
                                        <div className='info ml-3'>
                                            <h3 className='text-g mb-0'>9898 - 123</h3>
                                            <p className='mb-0'>HelpLine Contact</p>
                                        </div>
                                    </div>

                                    {/* <div className='phNo d-flex align-items-center  mx-5'>
                                        <span><HeadphonesOutlinedIcon /></span>
                                        <div className='info ml-3'>
                                            <h3 className='text-g mb-0'>1900 - 888</h3>
                                            <p className='mb-0'>24/7 Support Center</p>
                                        </div>
                                    </div> */}
                                </div>
                            </div>


                            <div className='col-md-3 part3  part_3'>
                                <div className='d-flex align-items-center'>
                                    <h5>Follow Us</h5>
                                    <ul className='list list-inline'>
                                        {/* <li className='list-inline-item'>
                                            <Link to={''}><FacebookOutlinedIcon /></Link>
                                        </li> */}
                                        <li className='list-inline-item'>
                                            <Link to={'https://www.linkedin.com/company/findmyuni/'}><LinkedInIcon /></Link>
                                        </li>
                                        <li className='list-inline-item'>
                                            <Link to={'https://www.instagram.com/findmyuni.co/'}><InstagramIcon /></Link>
                                        </li>
                                        {/* <li className='list-inline-item'>
                                            <Link to={''}><YouTubeIcon /></Link>
                                        </li> */}

                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </footer>


            </div>
        </>
    )
}

export default Footer;