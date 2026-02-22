import { NavLink, useNavigate } from "react-router";

export default function SignIn() {
  const navigate = useNavigate();

  const handleBtnNavigate = () => {
    navigate(-1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign In Clicked");
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
        {/* Retour */}
        <button
          type="button"
          onClick={handleBtnNavigate}
          className="mb-4 mt-1 text-sm hover:underline"
          style={{ color: "var(--primary)" }}
        >
          ← Retour
        </button>
        <h1 className="text-3xl font-bold text-center mb-2">Welcome Back!</h1>

        <p className="text-center mb-6" style={{ color: "var(--text-light)" }}>
          Sign in to continue learning
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-2 text-sm">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg border outline-none"
              style={{
                background: "transparent",
                borderColor: "var(--text-light)",
                color: "var(--text)",
              }}
            />
          </div>

          <div>
            <label className="block mb-2 text-sm">Password</label>
            <input
              type="password"
              placeholder="•••••••"
              className="w-full px-4 py-3 rounded-lg border outline-none"
              style={{
                background: "transparent",
                borderColor: "var(--text-light)",
                color: "var(--text)",
              }}
            />
          </div>

          <div className="flex justify-end">
            <a
              href="#"
              className="text-sm hover:underline"
              style={{ color: "var(--accent)" }}
            >
              Forget Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg font-semibold transition"
            style={{
              background: "var(--primary)",
              color: "#fff",
            }}
            onMouseOver={(e) =>
              (e.target.style.background = "var(--primary-dark)")
            }
            onMouseOut={(e) => (e.target.style.background = "var(--primary)")}
          >
            Sign In
          </button>

          <p
            className="text-center text-sm mt-4"
            style={{ color: "var(--text-light)" }}
          >
            Don't have an account?{" "}
            <NavLink
              to="/SignUp"
              className="font-medium hover:underline"
              style={{ color: "var(--primary)" }}
            >
              Sign Up
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
}
