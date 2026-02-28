import { FaStar } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";

export default function CoursesCard({ course }) {
  return (
    <div className="course bg-(--card-bg) rounded-4xl shadow-md">
      <div className="image w-full rounded-2xl relative">
        <span className="absolute left-2 top-2 bg-white rounded-[30px] px-4">{course.category}</span>
        <img
          src={course.image}
          alt={course.image}
          className="w-full rounded-t-2xl"
        />
      </div>
      <div className="content p-5 space-x-3.5">
        <div className="flex space-x-2">
          <span
            className={`bg-(--accent) text-white px-2 py-1 rounded-[30px] text-[13px]`}
          >
            {course.level}
          </span>
          <span className="flex items-center space-x-1">
            {course.rating}
            <b>
              <FaStar size={18} className="ms-1 text-yellow-400" />
            </b>
          </span>
        </div>
        <h2 className="text-[16px] font-bold my-2 line-clamp-1">
          {course.title}
        </h2>
        <h3 className="font-medium text-[16px]">By {course.instructor}</h3>
        <div className="flex justify-between mt-3 text-(--text)">
          <span className="flex items-center">
            <FaClock className="mx-1" />
            {course.duration}
          </span>
          <span className="flex items-center">
            <PiStudentFill className="mx-1" />
            {course.students}
          </span>
        </div>
      </div>
      <div className="bottom-card p-3 border-t border-gray-300 mx-4 flex justify-between items-center my-2">
        <span className="text-(--primary) text-[20px] font-bold">
          ${course.price}
        </span>
        <button className="bg-(--accent) px-5 py-2 cursor-pointer rounded-md ">
          Enroll Now
        </button>
      </div>
    </div>
  );
}
