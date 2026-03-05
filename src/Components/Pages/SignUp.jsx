import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from "react-router";
import { useUser } from "../../Context/UserAuthetication";

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

    if (!firstName || !lastName || !email || !password) {
      return setError("Please fill all required fields.");
    }

    if (password.length < 8) {
      return setError("Password must be at least 8 characters.");
    }

    if (password !== confirmPassword) {
      return setError("Passwords do not match.");
    }

    if (!agree) {
      return setError("You must accept the terms.");
    }

    try {
      setLoading(true);

      const { data, error } = await signUp(email, password, {
        firstName,
        lastName,
        role,
        speciality: role === "teacher" ? speciality : null,
      });

      if (error) {
        setError(error.message);
        return;
      }

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
    <div
      className="min-h-screen flex justify-center items-center px-4 py-20"
      style={{ background: "var(--background)" }}
    >
      <div
        className="w-full max-w-lg p-8 rounded-2xl shadow-xl"
        style={{ background: "var(--card-bg)", color: "var(--text)" }}
      >
        <h1 className="text-3xl font-bold text-center mb-2">Join LearnHub</h1>
        <p className="text-center mb-6 text-sm opacity-70">
          Start your learning journey today
        </p>

        <form className="space-y-5" onSubmit={handleBtnSubmit}>
          {/* ROLE */}
          <div className="bg-blue-100 py-2 px-1 rounded-lg grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setRole("student")}
              className={`p-3 rounded-2xl font-semibold ${
                role === "student" ? "bg-white text-blue-600" : "text-black"
              }`}
            >
              Student
            </button>

            <button
              type="button"
              onClick={() => setRole("teacher")}
              className={`p-3 rounded-2xl font-semibold ${
                role === "teacher" ? "bg-white text-blue-600" : "text-black"
              }`}
            >
              Teacher
            </button>
          </div>

          {/* NAME */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 opacity-50" />
              <input
                type="text"
                placeholder="First Name"
                className="w-full pl-10 py-3 rounded-lg border outline-none"
                value={formInputs.firstName}
                onChange={(e) =>
                  setFormInputs({
                    ...formInputs,
                    firstName: e.target.value,
                  })
                }
              />
            </div>

            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 opacity-50" />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full pl-10 py-3 rounded-lg border outline-none"
                value={formInputs.lastName}
                onChange={(e) =>
                  setFormInputs({
                    ...formInputs,
                    lastName: e.target.value,
                  })
                }
              />
            </div>
          </div>

          {/* EMAIL */}
          <div className="relative">
            <MdEmail className="absolute left-3 top-1/2 -translate-y-1/2 opacity-50" />
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full pl-10 py-3 rounded-lg border outline-none"
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
            <RiLockPasswordFill className="absolute left-3 top-1/2 -translate-y-1/2 opacity-50" />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-10 pr-10 py-3 rounded-lg border outline-none"
              value={formInputs.password}
              onChange={(e) =>
                setFormInputs({
                  ...formInputs,
                  password: e.target.value,
                })
              }
            />
          </div>

          {/* CONFIRM PASSWORD */}
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full py-3 px-4 rounded-lg border outline-none"
            value={formInputs.confirmPassword}
            onChange={(e) =>
              setFormInputs({
                ...formInputs,
                confirmPassword: e.target.value,
              })
            }
          />

          {/* TEACHER FIELD */}
          {role === "teacher" && (
            <input
              type="text"
              placeholder="Your Speciality"
              className="w-full py-3 px-4 rounded-lg border outline-none"
              value={formInputs.speciality}
              onChange={(e) =>
                setFormInputs({
                  ...formInputs,
                  speciality: e.target.value,
                })
              }
            />
          )}

          {/* TERMS */}
          <div className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={formInputs.agree}
              onChange={(e) =>
                setFormInputs({
                  ...formInputs,
                  agree: e.target.checked,
                })
              }
            />
            <span>I agree to the Terms & Conditions</span>
          </div>

          {/* ERROR */}
          {error && (
            <div className="bg-red-200 border border-red-500 rounded py-2 px-4">
              <span className="text-red-600 text-sm">{error}</span>
            </div>
          )}

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>
      </div>
    </div>
  );
}
