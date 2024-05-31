import React, {useState, useRef} from "react";
import emailjs from '@emailjs/browser';

import siddhant from "../../assets/images/siddhant2.jpg";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contactus = () => {
  const [showPopup, setShowPopup] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_pi4ojsj', 'template_123hm08', form.current, {
        publicKey: 'LzCdtIyR6oPvnqjMx',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

    // Show the popup
    setShowPopup(true);

    // Reset the form fields
    e.target.reset();

    // Hide the popup after a few seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 5000); // Adjust the time as per your requirement
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center w-full bg-white p-10 ">
        <div className="md:flex md:flex-row md:mt-[3rem] mx-auto my-4 px-4 lg:px-20">
          <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
            <form ref={form} onSubmit={sendEmail}>
              <div className="flex">
                <h1 className="font-bold uppercase text-5xl">
                  Send us a <br /> message
                </h1>
              </div>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  name="first name"
                  placeholder="First Name*"
                  autoComplete="off"
                  required
                />
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  name="second name"
                  placeholder="Last Name*"
                  autoComplete="off"
                  required
                />
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="email"
                  name="email"
                  placeholder="Email*"
                  autoComplete="off"
                  required
                />
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="number"
                  name="number"
                  placeholder="Phone*"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="my-4">
                <textarea
                  name="message"
                  placeholder="Message*"
                  className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  defaultValue={""}
                  autoComplete="off"
                  required
                />
              </div>
              <div className="my-2 w-1/2 lg:w-1/4">
                <button
                  type="submit"
                  className="uppercase text-2xl font-bold tracking-wide bg-green-700 text-gray-100 p-4 rounded-lg w-full focus:outline-none focus:shadow-outline"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <div className="w-full lg:w-2/6 px-8 py-12 ml-auto bg-green-700 rounded-2xl">
            <div className="flex flex-col text-white">
              <div className="flex items-center gap-4">
                <img className="w-20 h-20 rounded-full" src={siddhant} alt="" />
                <div className="font-medium">
                  <div>Mr. Siddhant Jain</div>
                  <div className="text-sm text-gray-200">Founder</div>
                </div>
              </div>
              <div className="flex flex-col">
                <p className="text-gray-200 mt-3">
                  I'm Siddhant Jain, a UK-based data scientist passionate about helping students coming to the UK. Our platform, FindMyUni, is designed to be a one-stop solution for the everyday challenges international students face. At FindMyUni, we believe in evaluating your true potential and aspirations, providing tailored advice to help you choose the best course and university that aligns with your goals. I would love to hear your feedback and encourage you to reach out if you need guidance or simply wish to chat.
                </p>
              </div>

              <div className="flex my-4 w-2/3 lg:w-1/2">
                <div className="flex flex-col">
                  <h2 className="text-2xl">Connect</h2>
                  <div className="flex flex-row gap-x-2">
                    <a href="https://www.linkedin.com/in/siddhantjainn/" target="_blank">
                      <button
                        type="button"
                        className="text-green-700 bg-white hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-2xl px-4 py-3 text-center inline-flex items-center me-2"
                      >
                        <FaLinkedin className="mr-2" />
                        LinkedIn
                      </button>
                    </a>
                    <a href="mailto:jainsiddhant214@gmail.com">
                      <button
                        type="button"
                        className="text-green-700 bg-white hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-2xl px-4 py-3 text-center inline-flex items-center me-2"
                      >
                        <MdEmail className="mr-2" />
                        Email
                      </button>
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex my-4 w-2/3 lg:w-1/2">
                <div className="flex flex-col">
                  <i className="fas fa-phone-alt pt-2 pr-2"></i>
                </div>
                <i className="fas fa-phone-alt pt-2 pr-2">
                  <div className="flex flex-col"></div>
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="fixed top-2 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-lg shadow-md">
          <p className="text-green-500 font-semibold">Thank you for your feedback!</p>
        </div>
      )}
    </>
  );
};

export default Contactus;
