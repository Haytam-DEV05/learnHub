import Courses from "./Courses/Courses";
// ================================================
import { FaUserGroup } from "react-icons/fa6";
import { FaHourglassStart } from "react-icons/fa";
import { IoSchoolOutline } from "react-icons/io5";
// ================================================
export default function Home() {
  const arrayInfo = [
    {
      id: 1,
      icon: <FaUserGroup size={45} />,
      title: "Sign Up",
      info: "Create your free account in seconds. Access your personalized dashboard immediately.",
    },
    {
      id: 2,
      icon: <IoSchoolOutline size={45} />,
      title: "Choose Course",
      info: "Browse our extensive library of expert-led courses and find the perfect match for your goals.",
    },
    {
      id: 3,
      icon: <FaHourglassStart size={45} />,
      title: "Start Learning",
      info: "Watch videos, complete assignments, and earn verified certificates to showcase your skills.",
    },
  ];
  return (
    <>
      <div className="min-h-screen flex justify-center items-center bg-(--background)">
        <div className="container text-center mx-1">
          <p className="py-1 px-8 bg-(--card-bg) shadow-md rounded-[50px] max-w-fit mx-auto">
            New courses added weekly
          </p>
          <h1 className="font-bold text-[60px] md:max-w-[70%] md:mx-auto">
            Learn Anything, <span className="text-(--primary) ">Anywhere</span>
          </h1>
          <p className="text-[16px] font-light my-5 max-w-[60%] mx-auto">
            Master new skills with expert-led courses designed for modern
            learners. Join thousands of students transforming their careers.
          </p>
          <div className="mt-3 flex max-w-fit mx-auto">
            <a
              href=""
              className="bg-red-400 block max-w-fit text-white py-3 px-7 cursor-pointer mx-1 rounded"
            >
              Explore Courses
            </a>
            <a
              href=""
              className="py-3 px-7 block max-w-fit cursor-pointer mx-1 border border-black rounded"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      <Courses />
      <div className="bg-(--background)">
        <div className="bottom-home max-w-275 mx-auto py-10">
          <div className="info">
            <div className="content text-center">
              <h3>How It Works</h3>
              <p>
                Three simple steps to start your learning journey and transform
                your career.
              </p>
            </div>
            <div className="boxes grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-10">
              {arrayInfo.map((box) => {
                return (
                  <div
                    className="box text-center p-6 shadow-md hover:shadow-2xl duration-300 transition-all"
                    key={box.id}
                  >
                    <span className="block max-w-fit mx-auto bg-(--accent) text-[#00F7FF] p-3 rounded-2xl">
                      {box.icon}
                    </span>
                    <h3 className="text-[20px] font-semibold my-2">
                      {box.title}
                    </h3>
                    <p className="text-[16px]">{box.info}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="banner bg-(--card-bg) py-5 px-10 rounded-2xl text-center">
            <h3 className="text-[55px] font-bold md:max-w-[60%] md:mx-auto">
              Ready to start your journey ?
            </h3>
            <p className="text-[20px] md:max-w-[60%] md:mx-auto">
              Join and get the latest updates on new courses and industry trends
              delivered straight to your inbox
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
