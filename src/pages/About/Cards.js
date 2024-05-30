import React from "react";
import { motion } from "framer-motion";
import { textAnimation } from "../../components/Animation/Animation";
import resource from "../../assets/images/resource.jpg";
import guide from "../../assets/images/guide.jpg";
import network from "../../assets/images/network.jpg";
import settle from "../../assets/images/settle.jpg";
import recommend from "../../assets/images/recommend.jpg";
import reload from "../../assets/images/reload.jpg";

export default function Cards() {
  return (
    <motion.div
      variants={textAnimation}
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 lg:px-0 mx-auto mt-10">
        <motion.div
          whileHover={{ scale: 1.15 }}
          className="relative flex flex-col items-center justify-center rounded-lg overflow-hidden bg-white shadow-md text-center"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${guide})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50"></div>
          <div className="relative p-6 mt-10">
            <h2
              className="text-3xl font-semibold text-white mb-4 text-left"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
            >
              Personalized Guidance:
            </h2>
            <p
              className="text-2xl text-gray-100 text-left"
              style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}
            >
              We believe in evaluating your true potential and aspirations,
              providing tailored advice to help you choose the best course and
              university that aligns with your goals.
            </p>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.15 }}
          className="relative flex flex-col items-center justify-center rounded-lg overflow-hidden bg-white shadow-md text-center"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${resource}) `,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50"></div>
          <div className="relative p-6 mt-10">
            <h2
              className="text-3xl font-semibold text-white mb-4 text-left"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
            >
              Comprehensive Resource:
            </h2>
            <p
              className="text-2xl text-gray-100 text-left"
              style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}
            >
              Our website offers a one-stop solution, from exploring top
              universities and courses to enhancing your resume for better
              prospects, ensuring a holistic approach to your overseas education
              journey.
            </p>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.15 }}
          className="relative flex flex-col items-center justify-center rounded-lg overflow-hidden bg-white shadow-md text-center"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${network})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50"></div>
          <div className="relative p-6 mt-10">
            <h2
              className="text-3xl font-semibold text-white mb-4 text-left"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
            >
              Global Network:
            </h2>
            <p
              className="text-2xl text-gray-100 text-left"
              style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}
            >
              Connect with student ambassadors who share their experiences,
              making it easier for you to envision your life abroad and get
              firsthand insights into the student community
            </p>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.15 }}
          className="relative flex flex-col items-center justify-center rounded-lg overflow-hidden bg-white shadow-md text-center"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${settle})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50"></div>
          <div className="relative p-6 mt-10">
            <h2
              className="text-3xl font-semibold text-white mb-4 text-left"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
            >
              Settlement Support:{" "}
            </h2>
            <p
              className="text-2xl text-gray-100 text-left"
              style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}
            >
              We go beyond admission by offering information and support for
              settling down in a new country. From accommodation to local tips,
              we've got you covered.
            </p>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.15 }}
          className="relative flex flex-col items-center justify-center rounded-lg overflow-hidden bg-white shadow-md text-center"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${recommend})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50"></div>
          <div className="relative p-6 mt-10">
            <h2
              className="text-3xl font-semibold text-white mb-4 text-left"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
            >
              Unbias Recommend:
            </h2>
            <p
              className="text-2xl text-gray-100 text-left"
              style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}
            >
              Unlike others in the market, we don't have exclusive tie-ups that
              compromise your potential. We value your achievements and focus on
              finding the best fit for your academic and career aspirations.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}