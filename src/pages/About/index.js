import manaswini from "../../assets/images/manaswini.jpg.JPG";
import siddhant from "../../assets/images/sidhanth-Photoroom.png-Photoroom.png";
import prisha from "../../assets/images/prisha.png";
import monika from "../../assets/images/monika-Photoroom.png-Photoroom.png";
import manoj from "../../assets/images/manoj.jpeg";
import khushi from "../../assets/images/khushi-Photoroom.png-Photoroom.png";
import kartikey from '../../assets/images/Kartikey.png'


import Cards from "./Cards.js";

const About = () => {
  return (
    <>
      <div className="py-16 bg-white">
        <div className="px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-16 -mt-20">
              <h2
                data-aos="fade-right"
                className="mb-3 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl mt-5"
              >
                Why{" "}
                <span className=" bg-gradient-to-r from-green-600 to-blue-500 bg-clip-text text-transparent">
                  UniMarketPlace?
                </span>
              </h2>
              <p className="mb-3 text-2xl font-normal text-gray-500 lg:text-2xl sm:px-16 lg:px-48 text-justify min-w-full">
              UniMarketPlace is a dedicated platform for students traveling to and from the UK for their studies, offering a seamless and user-friendly experience. Here, students can list, buy, and connect for various items, ranging from textbooks and electronics to furniture and personal essentials. The platform emphasizes simplicity and anonymity, ensuring that all interactions and transactions are secure and straightforward. Whether you're looking to sell items you no longer need or find affordable essentials for your new journey, UniMarketPlace provides everything you need within the site, fostering a supportive and convenient student community.
              </p>

              <Cards />
            </div>
          </div>
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-6 -mt-10 w-full">
        <div className="text-center pb-6">
          <h2 className="text-2xl font-bold text-indigo-600">
            We have the best equipment
          </h2>
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
            Meet Our Dynamic Team
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="w-full bg-white rounded-lg p-2 flex flex-col justify-center items-center">
            <div className="mb-8">
              <img
                className="object-center object-cover rounded-full h-36 w-36"
                src={siddhant}
                alt="photo"
              />
            </div>
            <div className="text-center">
              <p className="text-2xl text-gray-700 font-bold mb-2">
                Mr. Siddhant Jain
              </p>
              <p className="text-xl text-gray-400 font-normal">Founder</p>
            </div>
          </div>
          <div className="w-full bg-white rounded-lg p-2 flex flex-col justify-center items-center">
            <div className="mb-8">
              <img
                className="object-center  object-cover rounded-full h-36 w-36"
                src={kartikey}
                alt="photo"
              />
            </div>
            <div className="text-center">
              <p className="text-2xl text-gray-700 font-bold mb-2">
                Mr. Kartikey Bharadwaj
              </p>
              <p className="text-xl text-gray-400 font-normal">
                Advisor & Developer
              </p>
            </div>
          </div>
          <div className="w-full bg-white rounded-lg p-2 flex flex-col justify-center items-center">
            <div className="mb-8">
              <img
                className="object-center object-cover rounded-full h-36 w-36"
                src={prisha}
                alt="photo"
              />
            </div>
            <div className="text-center">
              <p className="text-2xl text-gray-700 font-bold mb-2">
                Miss. Prisha Thapar
              </p>
              <p className="text-xl text-gray-400 font-normal">
                Frontend developer
              </p>
            </div>
          </div>
          <div className="w-full bg-white rounded-lg p-2 flex flex-col justify-center items-center">
            <div className="mb-8">
              <img
                className="object-center object-cover rounded-full h-36 w-36"
                src={manaswini}
                alt="photo"
              />
            </div>
            <div className="text-center">
              <p className="text-2xl text-gray-700 font-bold mb-2">
                Miss. Manaswini Voolapalli
              </p>
              <p className="text-xl text-gray-400 font-normal">
                Developer
              </p>
            </div>
          </div>
          <div className="w-full bg-white rounded-lg p-2 flex flex-col justify-center items-center">
            <div className="mb-8">
              <img
                className="object-center object-cover rounded-full h-36 w-36"
                src={manoj}
                alt="photo"
              />
            </div>
            <div className="text-center">
              <p className="text-2xl text-gray-700 font-bold mb-2">
                Mr. Manoj Jain
              </p>
              <p className="text-xl text-gray-400 font-normal">Advisor</p>
            </div>
          </div>
          <div className="w-full bg-white rounded-lg p-2 flex flex-col justify-center items-center">
            <div className="mb-8">
              <img
                className="object-center object-cover rounded-full h-36 w-36"
                src={monika}
                alt="photo"
              />
            </div>
            <div className="text-center">
              <p className="text-2xl text-gray-700 font-bold mb-2">
                Mrs. Monika Jain
              </p>
              <p className="text-xl text-gray-400 font-normal">Advisor</p>
            </div>
          </div>
          <div className="w-full bg-white rounded-lg p-2 flex flex-col justify-center items-center">
            <div className="mb-8">
              <img
                className="object-center object-cover rounded-full h-36 w-36"
                src={khushi}
                alt="photo"
              />
            </div>
            <div className="text-center">
              <p className="text-2xl text-gray-700 font-bold mb-2">
                Miss. Khushi Jain
              </p>
              <p className="text-xl text-gray-400 font-normal">Advisor</p>
            </div>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </>
  );
};

export default About;
