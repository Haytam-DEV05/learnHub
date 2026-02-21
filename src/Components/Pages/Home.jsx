import Courses from "./Courses/Courses";

export default function Home() {
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
    </>
  );
}
