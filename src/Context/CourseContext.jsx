import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import supabase from "../util/supabase";
import { useUser } from "./UserAuthetication"; // باش نحتاجو الـ user ID

const CourseContext = createContext();

export const UseCourse = () => useContext(CourseContext);

export const CourseProvider = ({ children }) => {
  const { user } = useUser();
  const [allCourses, setAllCourses] = useState([]);
  const [myCourses, setMyCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  //  1 HNA GHADI NJIB GA3 L COURSES =>
  const getAllCourses = async () => {
    setLoading(true);
    const { data, error } = await supabase.from("courses").select("*");
    if (!error) setAllCourses(data);
    setLoading(false);
  };

  //  2 HNA GHADI NJIB GHIR L COURSES DYAL SPECIFIQUE STUDENT
  const getStudentCourses = useCallback(async () => {
    if (!user) return;

    setLoading(true);
    // هاد الكويري كتمشي لـ enrollments وتجيب معاها داتا الكورس (Join)
    const { data, error } = await supabase
      .from("enrollments")
      .select(
        `
        *,
        courses (*) 
      `,
      )
      .eq("student_id", user.id);
    if (!error) {
      // كنخرجوا غير الكورسات من الـ enrollment data
      const coursesOnly = data.map((enrol) => enrol.courses);
      setMyCourses(coursesOnly);
    }
    setLoading(false);
  }, [user]);

  // 3. جلب تفاصيل كورس واحد (بالدروس ديالو)
  const getCourseDetails = async (courseId) => {
    const { data, error } = await supabase
      .from("courses")
      .select(
        `
        *,
        sections (
          *,
          lessons (*)
        )
      `,
      )
      .eq("id", courseId)
      .single();

    return { data, error };
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getAllCourses();
  }, []);

  // فاش يتبدل الـ User، جيب ليه الكورسات ديالو
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (user) getStudentCourses();
  }, [user, getStudentCourses]);



  

  const value = {
    allCourses,
    myCourses,
    loading,
    getAllCourses,
    getStudentCourses,
    getCourseDetails,
  };

  return (
    <CourseContext.Provider value={value}>{children}</CourseContext.Provider>
  );
};
