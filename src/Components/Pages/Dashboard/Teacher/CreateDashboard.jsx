import { useEffect, useState } from "react";
import {
  FaInfoCircle,
  FaLayerGroup,
  FaImage,
  FaCheckCircle,
  FaChevronDown,
  FaTrash,
  FaExclamationCircle,
} from "react-icons/fa";
import supabase from "../../../../util/supabase";
import { useUser } from "../../../../Context/UserAuthetication";
import { v4 as uuidv4 } from "uuid";

export default function CreateDashboard() {
  const { user } = useUser();

  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");
  const [step, setStep] = useState(1); // 1: Info, 2: Curriculum, 3: Preview
  const [courseData, setCourseData] = useState({
    title: "",
    description: "",
    price: "",
    level: "Beginner",
    category_id: "",
    teacher_id: "",
    image: null,
  });
  const [sections, setSections] = useState([
    {
      id: uuidv4(),
      title: "Introduction",
      lessons: [{ id: uuidv4(), title: "Welcome", video_url: "" }],
    },
  ]);

  const addSection = () => {
    setSections([
      ...sections,
      {
        id: uuidv4(),
        title: "",
        lessons: [{ title: "", video_url: "" }],
      },
    ]);
  };

  const removeSection = (idSection) => {
    setSections(sections.filter((ele) => ele.id != idSection));
  };

  const addLesson = (sectionIndex) => {
    const newSection = [...sections];
    newSection[sectionIndex].lessons.push({
      id: uuidv4(),
      title: "",
      video_url: "",
    });
    setSections(newSection);
  };

  const removeLesson = (sectionIndex, lessonIndex) => {
    setSections(
      sections.map((section) => {
        if (section.id === sectionIndex) {
          return {
            ...section,
            lessons: section.lessons.filter((les) => les.id !== lessonIndex),
          };
        } else {
          return section;
        }
      }),
    );
  };

  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await supabase.from("categories").select("*");
      setCategories(data);
    };
    fetchCategories();
  }, []);

  const handleBtnFirstCreate = (e) => {
    e.preventDefault();
    const { title, description, price, category_id } = courseData;
    if (
      !title.trim() ||
      !description.trim() ||
      !price.trim() ||
      !category_id.trim()
    ) {
      return setError("pleas Enter All The Field !");
    }
    console.log({ ...courseData, teacher_id: user.id });
    nextStep();
    // const { data, error } = supabase.from("courses").insert(courseData);
  };

  useEffect(() => {
    if (error) {
      const idTimer = setTimeout(() => {
        setError("");
      }, 3000);
      return () => clearTimeout(idTimer);
    }
  }, [error]);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="max-w-4xl mx-auto">
      {/* Stepper Header */}
      <div className="flex items-center justify-between mb-12 bg-white p-6 rounded-4xl shadow-sm border border-slate-50">
        <StepIcon
          active={step >= 1}
          icon={<FaInfoCircle />}
          label="Course Info"
        />
        <div
          className={`flex-1 h-1 mx-4 rounded-full ${step >= 2 ? "bg-blue-600" : "bg-slate-100"}`}
        ></div>
        <StepIcon
          active={step >= 2}
          icon={<FaLayerGroup />}
          label="Curriculum"
        />
        <div
          className={`flex-1 h-1 mx-4 rounded-full ${step >= 3 ? "bg-blue-600" : "bg-slate-100"}`}
        ></div>
        <StepIcon active={step >= 3} icon={<FaCheckCircle />} label="Publish" />
      </div>
      {error && (
        <div className="flex items-center gap-3 bg-red-50 border border-red-100 text-red-700 py-4 px-6 rounded-2xl my-4 animate-in fade-in slide-in-from-top-2 duration-300">
          <FaExclamationCircle className="text-red-500" />
          <p className="font-bold text-sm">{error}</p>
        </div>
      )}

      {/* STEP 1: Basic Information */}
      {step === 1 && (
        <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 animate-in fade-in duration-500">
          <h3 className="text-2xl font-bold text-slate-800 mb-8">
            Basic Information
          </h3>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-slate-500 mb-2 uppercase tracking-wider">
                Course Title
              </label>
              <input
                type="text"
                placeholder="e.g. Master React in 30 Days"
                className="w-full p-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-blue-600 text-lg font-medium"
                value={courseData.title}
                onChange={(e) =>
                  setCourseData({ ...courseData, title: e.target.value })
                }
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-500 mb-2 uppercase tracking-wider">
                  Price ($)
                </label>
                <input
                  onChange={(e) =>
                    setCourseData({ ...courseData, price: e.target.value })
                  }
                  value={courseData.value}
                  type="number"
                  placeholder="49.99"
                  className="w-full p-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div className="relative group">
                <label className="block text-xs font-black text-slate-400 mb-2 uppercase tracking-[2px] ml-1">
                  Category
                </label>

                <div className="relative">
                  <select
                    onChange={(e) =>
                      setCourseData({
                        ...courseData,
                        category_id: e.target.value,
                      })
                    }
                    className="w-full appearance-none bg-slate-50 border-2 border-slate-100 text-slate-700 text-sm font-bold rounded-2xl p-4 pr-12 outline-none transition-all duration-300 focus:bg-white focus:ring-4 focus:ring-blue-100 cursor-pointer hover:border-slate-300"
                  >
                    <option value="" className="text-slate-400">
                      -- Select Category --
                    </option>
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id} className="py-2">
                        {cat.name}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 group-focus-within:text-blue-600 transition-colors">
                    <FaChevronDown size={14} />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-500 mb-2 uppercase tracking-wider">
                Description
              </label>
              <textarea
                onChange={(e) =>
                  setCourseData({ ...courseData, description: e.target.value })
                }
                value={courseData.description}
                rows="4"
                className="w-full p-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-blue-600"
                placeholder="What will students learn?"
              ></textarea>
            </div>

            <button
              onClick={handleBtnFirstCreate}
              className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all mt-4"
            >
              Continue to Curriculum
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 animate-in slide-in-from-right duration-500">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-800">
                Course Content
              </h3>
              <p className="text-slate-500">
                Organize your course into sections and lessons.
              </p>
            </div>
            <button
              onClick={addSection}
              className="bg-slate-900 text-white px-6 py-3 rounded-2xl font-bold text-sm hover:bg-slate-800 transition-all"
            >
              + Add New Section
            </button>
          </div>

          <div className="space-y-6 mb-8">
            {sections.length === 0 ? (
              <div className="p-12 border-2 border-dashed border-slate-200 rounded-4xl text-center">
                <p className="text-slate-400 font-medium">
                  Your curriculum is empty. Start by adding a section.
                </p>
              </div>
            ) : (
              sections.map((section, sIdx) => (
                <div
                  key={section.id || sIdx}
                  className="group relative p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 transition-all hover:bg-slate-100/50"
                >
                  {/* Delete Section Button - Kat-ban ghir fach t-hoveri 3la l-section */}
                  <button
                    onClick={() => removeSection(section.id)}
                    className="absolute top-6 right-6 p-3 bg-white text-red-500 rounded-xl shadow-sm border border-slate-200 opacity-0 group-hover:opacity-100 hover:bg-red-50 hover:text-red-600 transition-all"
                    title="Delete Section"
                  >
                    <FaTrash size={14} />
                  </button>

                  <div className="flex items-center gap-3 mb-6">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900 text-white text-xs font-bold">
                      {sIdx + 1}
                    </span>
                    <input
                      type="text"
                      placeholder="Section Title..."
                      className="flex-1 bg-transparent border-none text-xl font-bold text-slate-800 focus:ring-0 p-0"
                      value={section.title}
                      onChange={(e) => {
                        const newSecs = [...sections];
                        newSecs[sIdx].title = e.target.value;
                        setSections(newSecs);
                      }}
                    />
                  </div>

                  {/* Lessons Container */}
                  <div className="space-y-3 ml-11">
                    {section.lessons.map((lesson, lIdx) => (
                      <div
                        key={lesson.id || lIdx}
                        className="flex gap-3 items-center group/lesson"
                      >
                        <div className="flex-[4] flex gap-4 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm focus-within:ring-2 focus-within:ring-blue-100 transition-all">
                          <input
                            placeholder="Lesson Title"
                            className="flex-1 text-sm font-semibold outline-none text-slate-700"
                            value={lesson.title}
                            onChange={(e) => {
                              const newSecs = [...sections];
                              newSecs[sIdx].lessons[lIdx].title =
                                e.target.value;
                              setSections(newSecs);
                            }}
                          />
                          <div className="w-[1px] h-5 bg-slate-100"></div>
                          <input
                            placeholder="Video URL"
                            className="flex-1 text-sm text-blue-600 outline-none"
                            value={lesson.video_url}
                            onChange={(e) => {
                              const newSecs = [...sections];
                              newSecs[sIdx].lessons[lIdx].video_url =
                                e.target.value;
                              setSections(newSecs);
                            }}
                          />
                        </div>

                        {/* Delete Lesson Button */}
                        <button
                          onClick={() => removeLesson(section.id, lesson.id)}
                          className="p-3 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                        >
                          <FaTrash size={14} />
                        </button>
                      </div>
                    ))}

                    <button
                      onClick={() => addLesson(sIdx)}
                      className="mt-4 px-4 py-2 border-2 border-dashed border-slate-200 rounded-xl text-slate-400 text-xs font-bold hover:border-blue-400 hover:text-blue-500 transition-all"
                    >
                      + ADD LESSON
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="flex gap-4">
            <button
              onClick={prevStep}
              className="flex-1 py-4 bg-slate-100 text-slate-600 rounded-2xl font-bold"
            >
              Back
            </button>
            <button
              onClick={nextStep}
              className="flex-[2] py-4 bg-blue-600 text-white rounded-2xl font-bold shadow-lg shadow-blue-100"
            >
              Preview & Publish
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function StepIcon({ active, icon, label }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${active ? "bg-blue-600 text-white shadow-md" : "bg-slate-100 text-slate-400"}`}
      >
        {icon}
      </div>
      <span
        className={`font-bold text-sm ${active ? "text-slate-800" : "text-slate-400"}`}
      >
        {label}
      </span>
    </div>
  );
}
