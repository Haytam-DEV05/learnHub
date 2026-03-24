// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router"; // aw react-router-dom
import { useUser } from "../../Context/UserAuthetication";
import { HiMail, HiLockClosed } from "react-icons/hi";

export default function SignIn() {
  const navigate = useNavigate();
  const { signIn } = useUser();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formInputs, setFormInputs] = useState({
    email: "",
    password: "",
  });

  // (L-Logic dyalk bla tbdil...) remove error automatically
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const redirectByRole = (user) => {
    const role = user?.user_metadata?.role;
    navigate(
      `${role === "teacher" ? "/teacher/dashboard" : "/student/dashboard"}`,
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formInputs;
    if (!email || !password) {
      return setError("Please fill all fields.");
    }
    try {
      setLoading(true);
      const { data, error } = await signIn(email, password);
      if (error) {
        return setError(error.message);
      }
      if (data?.user) {
        // Drna "light" default hit jarrabti n-animiwha o m9addax
        document.body.setAttribute("theme", "light");
        redirectByRole(data.user);
      }
    } catch (err) {
      console.log(err);
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  // ----------------------------------------------------
  // Hadchi l-ta7t houwa li t-صلح fih l-design visual
  // ----------------------------------------------------
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-(--background) relative overflow-hidden">
      {/* Background Decorative Circles (Modern Glow) */}
      <div className="absolute top-0 -left-20 w-72 h-72 bg-(--primary) rounded-full blur-[120px] opacity-10"></div>
      <div className="absolute bottom-0 -right-20 w-72 h-72 bg-(--accent) rounded-full blur-[120px] opacity-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-md z-10"
      >
        <div className="bg-(--card-bg) p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-(--text-light)/10">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-black text-(--text) tracking-tight">
              Welcome Back!
            </h1>
            <p className="text-(--text-light) mt-3 font-medium">
              Ready to continue your learning journey?
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Error Message (Modern Style) */}
              {error && (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0, height: 0 }}
                  animate={{ scale: 1, opacity: 1, height: "auto" }}
                  exit={{ scale: 0.9, opacity: 0, height: 0 }}
                  className="bg-red-500/10 border border-red-500/20 rounded-xl py-3 px-4 flex items-center gap-3 overflow-hidden"
                >
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse shrink-0"></div>
                  <span className="text-red-500 text-sm font-bold">
                    {error}
                  </span>
                </motion.div>
              )}

            {/* EMAIL */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-(--text) ml-1">
                Email Address
              </label>
              <div className="relative group">
                <HiMail
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-(--text-light) group-focus-within:text-(--primary) transition-colors"
                  size={20}
                />
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-(--background) border border-(--text-light)/10 outline-none focus:border-(--primary) focus:ring-4 focus:ring-(--primary)/5 text-(--text) transition-all font-medium placeholder:text-(--text-light)/50"
                  value={formInputs.email}
                  onChange={(e) =>
                    setFormInputs({ ...formInputs, email: e.target.value })
                  }
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-sm font-bold text-(--text)">
                  Password
                </label>
                <a
                  href="#"
                  className="text-xs font-bold text-(--primary) hover:underline underline-offset-2"
                >
                  Forgot?
                </a>
              </div>
              <div className="relative group">
                <HiLockClosed
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-(--text-light) group-focus-within:text-(--primary) transition-colors"
                  size={20}
                />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-(--background) border border-(--text-light)/10 outline-none focus:border-(--primary) focus:ring-4 focus:ring-(--primary)/5 text-(--text) transition-all font-medium placeholder:text-(--text-light)/50"
                  value={formInputs.password}
                  onChange={(e) =>
                    setFormInputs({ ...formInputs, password: e.target.value })
                  }
                />
              </div>
            </div>

            {/* BUTTON */}
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              disabled={loading}
              type="submit"
              className="w-full py-4 rounded-2xl font-black text-lg bg-(--primary) text-white shadow-xl shadow-(--primary)/25 hover:bg-(--primary-dark) transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
            >
              {loading ? (
                <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                "Sign In"
              )}
            </motion.button>

            {/* Footer Links */}
            <p className="text-center text-(--text-light) font-medium pt-4">
              Don't have an account?{" "}
              <NavLink
                to="/SignUp"
                className="text-(--primary) font-black hover:underline underline-offset-4"
              >
                Create Account
              </NavLink>
            </p>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
