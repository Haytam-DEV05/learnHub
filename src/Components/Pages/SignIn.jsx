import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import supabase from "../../util/supabase";

export default function SignIn() {
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [formInputs, setFormInputs] = useState({
    email: "",
    password: "",
  });

  // Auto clear error
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  // // Check if user already logged in
  // useEffect(() => {
  //   const checkUser = async () => {
  //     const { data } = await supabase.auth.getSession();
  //     if (data?.session) {
  //       redirectByRole(data.session.user);
  //     }
  //   };
  //   checkUser();
  // }, []);

  const redirectByRole = (user) => {
    const role = user?.user_metadata?.role;

    if (role === "teacher") {
      navigate("/teacher/dashboard");
    } else {
      navigate("/student/dashboard");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = formInputs;

    if (!email.trim() || !password.trim()) {
      return setError("Please enter all fields.");
    }

    try {
      setLoading(true);

      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        return setError(error.message);
      }

      if (data?.user) {
        redirectByRole(data.user);
      }
    } catch (err) {
      console.log(err);
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  // Forgot password
  const handleResetPassword = async () => {
    if (!formInputs.email) {
      return setError("Enter your email first.");
    }

    const { error } = await supabase.auth.resetPasswordForEmail(
      formInputs.email,
      {
        redirectTo: "http://localhost:5173/update-password",
      },
    );

    if (error) {
      setError(error.message);
    } else {
      alert("Password reset email sent.");
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
            <div className="bg-red-200 py-2 px-4 rounded border border-red-500">
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
          <div className="relative">
            <label className="block mb-2 text-sm">Password</label>

            <input
              type="password"
              placeholder="•••••••"
              className="w-full px-4 py-3 pr-10 rounded-lg border outline-none"
              value={formInputs.password}
              onChange={(e) =>
                setFormInputs({
                  ...formInputs,
                  password: e.target.value,
                })
              }
            />
          </div>

          {/* FORGOT PASSWORD */}
          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleResetPassword}
              className="text-sm hover:underline"
              style={{ color: "var(--accent)" }}
            >
              Forgot Password?
            </button>
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
              className="font-medium hover:underline text-blue-600"
            >
              Sign Up
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
}
