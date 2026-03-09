import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router";
import { useUser } from "../../Context/UserAuthetication";

export default function SignIn() {
  const navigate = useNavigate();
  const { signIn } = useUser();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formInputs, setFormInputs] = useState({
    email: "",
    password: "",
  });

  // remove error automatically
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

  return (
    <div
      className="min-h-screen flex justify-center items-center px-4"
      style={{ background: "var(--background)" }}
    >
      <div
        className="w-full max-w-md p-8 rounded-2xl shadow-xl"
        style={{ background: "var(--card-bg)", color: "var(--text)" }}
      >
        <h1 className="text-3xl font-bold text-center mb-2">Welcome Back!</h1>

        <p className="text-center mb-6 opacity-70">
          Sign in to continue learning
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {error && (
            <div className="bg-red-200 border border-red-500 rounded py-2 px-4">
              <span className="text-red-600 text-sm">{error}</span>
            </div>
          )}

          {/* EMAIL */}
          <div>
            <label className="block mb-2 text-sm">Email Address</label>

            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg border outline-none"
              value={formInputs.email}
              onChange={(e) =>
                setFormInputs({
                  ...formInputs,
                  email: e.target.value,
                })
              }
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label className="block mb-2 text-sm">Password</label>

            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-lg border outline-none"
              value={formInputs.password}
              onChange={(e) =>
                setFormInputs({
                  ...formInputs,
                  password: e.target.value,
                })
              }
            />
          </div>

          {/* BUTTON */}
          <button
            disabled={loading}
            type="submit"
            className="w-full py-3 rounded-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>

          <p className="text-center text-sm mt-4 opacity-70">
            Don't have an account?{" "}
            <NavLink
              to="/SignUp"
              className="text-blue-600 font-medium hover:underline"
            >
              Sign Up
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
}
