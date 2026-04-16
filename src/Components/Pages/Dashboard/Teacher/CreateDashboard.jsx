import { useEffect, useState } from "react";
import {
  FaInfoCircle,
  FaLayerGroup,
  FaImage,
  FaCheckCircle,
  FaChevronDown,
} from "react-icons/fa";
import supabase from "../../../../util/supabase";

export default function CreateDashboard() {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");
  const [step, setStep] = useState(1); // 1: Info, 2: Curriculum, 3: Preview
  const [courseData, setCourseData] = useState({
    title: "",
    description: "",
    price: "",
    level: "Beginner",
    category: "",
    image: null,
  });

  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await supabase.from("categories").select("*");
      setCategories(data);
    };
    fetchCategories();
  }, []);

  const handleBtnFirstCreate = (e) => {
    e.preventDefault();
    const { title, description, price, level, category } = courseData;
    if (
      !title.trim() ||
      !description.trim() ||
      !price.trime() ||
      !level.trim() ||
      !category.trim()
    )
      return setError("pleas Enter All The Field !");

    const { data, error } = supabase.from("courses").insert();
  };

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
                rows="4"
                className="w-full p-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-blue-600"
                placeholder="What will students learn?"
              ></textarea>
            </div>

            <button
              onClick={nextStep}
              className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all mt-4"
            >
              Continue to Curriculum
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">
            Course Content
          </h3>
          <p className="text-slate-500 mb-8">
            Add sections and lessons to your course.
          </p>

          <div className="space-y-4 mb-8">
            <div className="p-6 border-2 border-dashed border-slate-200 rounded-3xl text-center">
              <p className="text-slate-400 mb-4 font-medium">
                No sections added yet.
              </p>
              <button className="bg-slate-900 text-white px-6 py-2 rounded-xl font-bold text-sm">
                + Add Section
              </button>
            </div>
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
              className="flex-2 py-4 bg-blue-600 text-white rounded-2xl font-bold"
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
