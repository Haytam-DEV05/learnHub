// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router";
import { useUser } from "../../Context/UserAuthetication";
import { FaUser, FaLock, FaBriefcase } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function SignUp() {
  const navigate = useNavigate();
  const { signUp } = useUser();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [role, setRole] = useState("student");

  const [formInputs, setFormInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    speciality: "",
    agree: false,
  });

  // clear error automatically
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const handleBtnSubmit = async (e) => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      speciality,
      agree,
    } = formInputs;

    if (!firstName || !lastName || !email || !password)
      return setError("Please fill all required fields.");
    if (password.length < 8)
      return setError("Password must be at least 8 characters.");
    if (password !== confirmPassword)
      return setError("Passwords do not match.");
    if (!agree) return setError("You must accept the terms.");

    try {
      setLoading(true);
      const { data, error } = await signUp(email, password, {
        firstName,
        lastName,
        role,
        speciality: role === "teacher" ? speciality : null,
      });
      if (error) return setError(error.message);
      if (data?.user) {
        alert("Check your email to verify your account.");
        navigate("/SignIn");
      }
    } catch (err) {
      console.log(err);
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-24 bg-(--background) relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 -left-20 w-96 h-96 bg-(--primary) rounded-full blur-[150px] opacity-10"></div>
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-(--accent) rounded-full blur-[150px] opacity-10"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-xl z-10"
      >
        <div className="bg-(--card-bg) p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-(--text-light)/10">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-black text-(--text) tracking-tight">
              Join LearnHub
            </h1>
            <p className="text-(--text-light) mt-2 font-medium">
              Start your learning journey today
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleBtnSubmit}>
            {/* ROLE SWITCHER - Nadi UI */}
            <div className="relative flex bg-(--background) p-1.5 rounded-2xl border border-(--text-light)/10 mb-8">
              <motion.div
                className="absolute top-1.5 bottom-1.5 left-1.5 bg-(--primary) rounded-xl shadow-lg z-0"
                animate={{ x: role === "student" ? 0 : "100%" }}
                style={{ width: "calc(50% - 6px)" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
              <button
                type="button"
                onClick={() => setRole("student")}
                className={`flex-1 py-3 text-sm font-bold z-10 transition-colors ${role === "student" ? "text-white" : "text-(--text-light)"}`}
              >
                Student
              </button>
              <button
                type="button"
                onClick={() => setRole("teacher")}
                className={`flex-1 py-3 text-sm font-bold z-10 transition-colors ${role === "teacher" ? "text-white" : "text-(--text-light)"}`}
              >
                Teacher
              </button>
            </div>

            {/* NAME GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative group">
                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-(--text-light) group-focus-within:text-(--primary) transition-colors" />
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-(--background) border border-(--text-light)/10 outline-none focus:border-(--primary) text-(--text) transition-all"
                  value={formInputs.firstName}
                  onChange={(e) =>
                    setFormInputs({ ...formInputs, firstName: e.target.value })
                  }
                />
              </div>
              <div className="relative group">
                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-(--text-light) group-focus-within:text-(--primary) transition-colors" />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-(--background) border border-(--text-light)/10 outline-none focus:border-(--primary) text-(--text) transition-all"
                  value={formInputs.lastName}
                  onChange={(e) =>
                    setFormInputs({ ...formInputs, lastName: e.target.value })
                  }
                />
              </div>
            </div>

            {/* EMAIL */}
            <div className="relative group">
              <MdEmail
                className="absolute left-4 top-1/2 -translate-y-1/2 text-(--text-light) group-focus-within:text-(--primary) transition-colors"
                size={20}
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-(--background) border border-(--text-light)/10 outline-none focus:border-(--primary) text-(--text) transition-all"
                value={formInputs.email}
                onChange={(e) =>
                  setFormInputs({ ...formInputs, email: e.target.value })
                }
              />
            </div>

            {/* PASSWORDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative group">
                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-(--text-light) group-focus-within:text-(--primary) transition-colors" />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-(--background) border border-(--text-light)/10 outline-none focus:border-(--primary) text-(--text) transition-all"
                  value={formInputs.password}
                  onChange={(e) =>
                    setFormInputs({ ...formInputs, password: e.target.value })
                  }
                />
              </div>
              <input
                type="password"
                placeholder="Confirm"
                className="w-full px-4 py-3.5 rounded-xl bg-(--background) border border-(--text-light)/10 outline-none focus:border-(--primary) text-(--text) transition-all"
                value={formInputs.confirmPassword}
                onChange={(e) =>
                  setFormInputs({
                    ...formInputs,
                    confirmPassword: e.target.value,
                  })
                }
              />
            </div>

            {/* TEACHER FIELD - Animated */}
            <AnimatePresence>
              {role === "teacher" && (
                <motion.div
                  initial={{ opacity: 0, height: 0, y: -10 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -10 }}
                  className="relative group overflow-hidden"
                >
                  <FaBriefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-(--text-light) group-focus-within:text-(--primary)" />
                  <input
                    type="text"
                    placeholder="Your Speciality (e.g. React Developer)"
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-(--background) border border-(--text-light)/10 outline-none focus:border-(--primary) text-(--text)"
                    value={formInputs.speciality}
                    onChange={(e) =>
                      setFormInputs({
                        ...formInputs,
                        speciality: e.target.value,
                      })
                    }
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* ERROR MSG */}
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-500/10 border border-red-500/20 text-red-500 text-sm font-bold py-3 px-4 rounded-xl flex items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
                  {error}
                </motion.div>
              )}
            </AnimatePresence>

            {/* TERMS & BUTTON */}
            <div className="flex items-center gap-3 px-1">
              <input
                type="checkbox"
                className="w-5 h-5 accent-(--primary) cursor-pointer"
                checked={formInputs.agree}
                onChange={(e) =>
                  setFormInputs({ ...formInputs, agree: e.target.checked })
                }
              />
              <span className="text-sm text-(--text-light) font-medium">
                I agree to the{" "}
                <a
                  href="#"
                  className="text-(--primary) hover:underline font-bold"
                >
                  Terms & Conditions
                </a>
              </span>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={loading}
              className="w-full py-4 rounded-2xl font-black text-lg bg-(--primary) text-white shadow-xl shadow-(--primary)/25 hover:bg-(--primary-dark) transition-all flex items-center justify-center gap-3 cursor-pointer disabled:opacity-70"
            >
              {loading ? (
                <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                "Create Account"
              )}
            </motion.button>

            <p className="text-center text-(--text-light) font-medium">
              Already have an account?{" "}
              <NavLink
                to="/SignIn"
                className="text-(--primary) font-black hover:underline"
              >
                Sign In
              </NavLink>
            </p>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
