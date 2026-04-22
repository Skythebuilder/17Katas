import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [view, setView] = useState("login"); // login | signup | forgot
  const [loginRole, setLoginRole] = useState("brand");
  const [signupRole, setSignupRole] = useState("brand");
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [signupForm, setSignupForm] = useState({ name: "", email: "", password: "" });
  const [forgotEmail, setForgotEmail] = useState("");
  const [loginError, setLoginError] = useState("");
  const [signupError, setSignupError] = useState("");
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [forgotSent, setForgotSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError("");
    if (!loginForm.email || !loginForm.password) {
      setLoginError("Please fill in all fields.");
      return;
    }
    setLoading(true);
    // TODO: Replace with Supabase auth call
    // const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    setTimeout(() => {
      setLoading(false);
      if (loginRole === "admin") navigate("/admin");
      else if (loginRole === "brand") navigate("/brand/welcome");
      else navigate("/distributor/campaigns");
    }, 800);
  };

  const handleGoogleLogin = () => {
    // TODO: Replace with Supabase Google OAuth
    // await supabase.auth.signInWithOAuth({ provider: 'google' });
    console.log("Google OAuth — connect Supabase to enable");
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setSignupError("");
    setSignupSuccess(false);
    if (!signupForm.name || !signupForm.email || !signupForm.password) {
      setSignupError("Please fill in all fields.");
      return;
    }
    if (signupForm.password.length < 8) {
      setSignupError("Password must be at least 8 characters.");
      return;
    }
    setLoading(true);
    // TODO: Replace with Supabase signup
    // const { data, error } = await supabase.auth.signUp({ email, password, options: { data: { name, role } } });
    setTimeout(() => {
      setLoading(false);
      setSignupSuccess(true);
    }, 800);
  };

  const handleForgot = async (e) => {
    e.preventDefault();
    if (!forgotEmail) return;
    setLoading(true);
    // TODO: Replace with Supabase reset
    // await supabase.auth.resetPasswordForEmail(forgotEmail);
    setTimeout(() => {
      setLoading(false);
      setForgotSent(true);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-brand-black font-manrope relative overflow-hidden">

      {/* Noise overlay — inherited from index.css body::before */}

      {/* Red glow */}
      <div
        className="pointer-events-none absolute rounded-full"
        style={{
          width: "700px",
          height: "700px",
          background: "radial-gradient(circle, rgba(232,0,13,0.11) 0%, transparent 65%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 0,
        }}
      />

      {/* Nav */}
      <nav
        className="relative flex items-center justify-between px-10 py-5 border-b"
        style={{ borderColor: "rgba(255,255,255,0.05)", zIndex: 10 }}
      >
        <div
          className="font-bebas text-3xl tracking-widest cursor-pointer"
          style={{ letterSpacing: "5px" }}
          onClick={() => navigate("/")}
        >
          17<span className="text-brand-red">KATAS</span>
        </div>
        <div className="flex items-center gap-8">
          <span
            className="font-barlow uppercase tracking-widest text-sm hidden md:block"
            style={{ letterSpacing: "5px", color: "rgba(255,255,255,0.22)", fontSize: "11px" }}
          >
            Content Distribution Infrastructure
          </span>
          {view === "login" && (
            <button
              className="font-barlow uppercase tracking-widest text-sm"
              style={{ letterSpacing: "3px", color: "rgba(255,255,255,0.4)", fontSize: "11px" }}
              onClick={() => setView("signup")}
            >
              Sign up
            </button>
          )}
          {view === "signup" && (
            <button
              className="font-barlow uppercase tracking-widest text-sm"
              style={{ letterSpacing: "3px", color: "rgba(255,255,255,0.4)", fontSize: "11px" }}
              onClick={() => setView("login")}
            >
              Log in
            </button>
          )}
        </div>
      </nav>

      {/* Stats strip */}
      <div
        className="relative grid grid-cols-4"
        style={{
          background: "rgba(255,255,255,0.04)",
          zIndex: 5,
          borderBottom: "1px solid rgba(255,255,255,0.04)",
        }}
      >
        {[
          { val: "₹50+", label: "Per 1K views" },
          { val: "0 Days", label: "To get paid" },
          { val: "100%", label: "Verified" },
          { val: "120+", label: "Distributors" },
        ].map((s, i) => (
          <div
            key={i}
            className="bg-brand-black text-center py-4 px-4"
            style={{ borderRight: i < 3 ? "1px solid rgba(255,255,255,0.04)" : "none" }}
          >
            <div className="font-bebas text-2xl text-white tracking-widest">
              {s.val.includes("₹") ? (
                <>
                  <span className="text-brand-red">₹</span>
                  {s.val.replace("₹", "")}
                </>
              ) : s.val.includes("Days") ? (
                <>
                  0<span className="text-brand-red"> Days</span>
                </>
              ) : s.val.includes("%") ? (
                <>
                  100<span className="text-brand-red">%</span>
                </>
              ) : (
                <>
                  120<span className="text-brand-red">+</span>
                </>
              )}
            </div>
            <div
              className="font-barlow uppercase tracking-widest mt-1"
              style={{ fontSize: "10px", letterSpacing: "3px", color: "rgba(255,255,255,0.25)" }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* Hero + Form */}
      <div className="relative flex flex-col items-center pt-12 pb-16 px-6" style={{ zIndex: 5 }}>
        {/* Headline */}
        <div className="text-center mb-10">
          <div
            className="font-barlow uppercase tracking-widest text-brand-red mb-4"
            style={{ fontSize: "12px", letterSpacing: "6px" }}
          >
            India's first content distribution infrastructure
          </div>
          <h1
            className="font-bebas text-white leading-none"
            style={{ fontSize: "clamp(64px, 10vw, 120px)", letterSpacing: "2px" }}
          >
            CONTENT THAT <span className="text-brand-red">PAYS.</span>
          </h1>
          <div
            className="w-16 h-0.5 bg-brand-red mx-auto mt-5"
          />
        </div>

        {/* Form card */}
        <div
          className="w-full relative"
          style={{
            maxWidth: "480px",
            background: "#0a0a0a",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          {/* Red top border */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-brand-red" />
          {/* Red corner cut */}
          <div
            className="absolute bottom-0 right-0 bg-brand-red"
            style={{ width: "28px", height: "28px", clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
          />

          <div className="px-10 pt-10 pb-12">

            {/* LOGIN VIEW */}
            {view === "login" && (
              <>
                <h2
                  className="font-bebas text-white leading-none mb-2"
                  style={{ fontSize: "56px", letterSpacing: "2px" }}
                >
                  WELCOME<br />BACK.
                </h2>
                <p
                  className="mb-8"
                  style={{ fontSize: "13px", color: "rgba(255,255,255,0.3)", fontFamily: "Manrope" }}
                >
                  Log in to your 17Katas account
                </p>

                {/* Role tabs */}
                <div
                  className="flex mb-7"
                  style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  {["brand", "distributor", "admin"].map((role) => (
                    <button
                      key={role}
                      className="flex-1 py-3 font-barlow uppercase transition-all"
                      style={{
                        fontSize: "12px",
                        letterSpacing: "3px",
                        background: loginRole === role ? "#E8000D" : "transparent",
                        color: loginRole === role ? "#fff" : "rgba(255,255,255,0.3)",
                        border: "none",
                        cursor: "pointer",
                      }}
                      onClick={() => setLoginRole(role)}
                    >
                      {role.charAt(0).toUpperCase() + role.slice(1)}
                    </button>
                  ))}
                </div>

                {loginError && (
                  <div
                    className="mb-5"
                    style={{
                      background: "rgba(232,0,13,0.07)",
                      borderLeft: "2px solid #E8000D",
                      color: "#ff5560",
                      fontSize: "13px",
                      padding: "11px 14px",
                      fontFamily: "Manrope",
                    }}
                  >
                    {loginError}
                  </div>
                )}

                <form onSubmit={handleLogin}>
                  <label className="form-label">Email address</label>
                  <input
                    className="form-input mb-5"
                    type="email"
                    placeholder="you@company.com"
                    value={loginForm.email}
                    onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                  />

                  <label className="form-label">Password</label>
                  <input
                    className="form-input"
                    type="password"
                    placeholder="••••••••••"
                    value={loginForm.password}
                    onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                  />

                  <div className="flex justify-end mt-2 mb-5">
                    <button
                      type="button"
                      className="font-barlow uppercase"
                      style={{ fontSize: "10px", letterSpacing: "3px", color: "rgba(255,255,255,0.25)" }}
                      onClick={() => setView("forgot")}
                    >
                      Forgot password?
                    </button>
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full"
                    disabled={loading}
                  >
                    {loading ? "Logging in..." : "Log in"}
                  </button>
                </form>

                {/* Divider */}
                <div className="flex items-center gap-4 my-6">
                  <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.05)" }} />
                  <span
                    className="font-barlow uppercase"
                    style={{ fontSize: "10px", letterSpacing: "3px", color: "rgba(255,255,255,0.2)" }}
                  >
                    or
                  </span>
                  <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.05)" }} />
                </div>

                {/* Google login */}
                <button
                  type="button"
                  onClick={handleGoogleLogin}
                  className="w-full flex items-center justify-center gap-3 py-4 font-barlow uppercase transition-all"
                  style={{
                    border: "1px solid rgba(255,255,255,0.1)",
                    background: "transparent",
                    color: "rgba(255,255,255,0.6)",
                    fontSize: "13px",
                    letterSpacing: "3px",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = "rgba(255,255,255,0.25)";
                    e.target.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = "rgba(255,255,255,0.1)";
                    e.target.style.color = "rgba(255,255,255,0.6)";
                  }}
                >
                  {/* Google G icon */}
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
                    <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#34A853"/>
                    <path d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
                    <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
                  </svg>
                  Continue with Google
                </button>

                <p
                  className="text-center mt-6"
                  style={{ fontSize: "13px", color: "rgba(255,255,255,0.25)", fontFamily: "Manrope" }}
                >
                  120+ distributors already earning —{" "}
                  <button
                    className="text-brand-red"
                    onClick={() => setView("signup")}
                    style={{ background: "none", border: "none", cursor: "pointer" }}
                  >
                    join them
                  </button>
                </p>
              </>
            )}

            {/* SIGNUP VIEW */}
            {view === "signup" && (
              <>
                <h2
                  className="font-bebas text-white leading-none mb-2"
                  style={{ fontSize: "56px", letterSpacing: "2px" }}
                >
                  JOIN THE<br />
                  INFRA<span className="text-brand-red">.</span>
                </h2>
                <p
                  className="mb-8"
                  style={{ fontSize: "13px", color: "rgba(255,255,255,0.3)", fontFamily: "Manrope" }}
                >
                  Create your 17Katas account — it's free
                </p>

                {/* Google signup first */}
                <button
                  type="button"
                  onClick={handleGoogleLogin}
                  className="w-full flex items-center justify-center gap-3 py-4 font-barlow uppercase transition-all mb-6"
                  style={{
                    border: "1px solid rgba(255,255,255,0.1)",
                    background: "transparent",
                    color: "rgba(255,255,255,0.6)",
                    fontSize: "13px",
                    letterSpacing: "3px",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                    e.currentTarget.style.color = "rgba(255,255,255,0.6)";
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
                    <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#34A853"/>
                    <path d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
                    <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
                  </svg>
                  Sign up with Google
                </button>

                <div className="flex items-center gap-4 mb-6">
                  <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.05)" }} />
                  <span className="font-barlow uppercase" style={{ fontSize: "10px", letterSpacing: "3px", color: "rgba(255,255,255,0.2)" }}>or</span>
                  <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.05)" }} />
                </div>

                {/* Role pick */}
                <div
                  className="font-barlow uppercase mb-3"
                  style={{ fontSize: "10px", letterSpacing: "4px", color: "rgba(255,255,255,0.3)" }}
                >
                  I am a
                </div>
                <div className="flex gap-2 mb-6">
                  {["brand", "distributor"].map((role) => (
                    <button
                      key={role}
                      className="flex-1 py-3 font-barlow uppercase transition-all"
                      style={{
                        fontSize: "12px",
                        letterSpacing: "3px",
                        background: signupRole === role ? "rgba(232,0,13,0.06)" : "transparent",
                        border: signupRole === role ? "1px solid #E8000D" : "1px solid rgba(255,255,255,0.07)",
                        color: signupRole === role ? "#E8000D" : "rgba(255,255,255,0.3)",
                        cursor: "pointer",
                      }}
                      onClick={() => setSignupRole(role)}
                    >
                      {role.charAt(0).toUpperCase() + role.slice(1)}
                    </button>
                  ))}
                </div>

                {signupError && (
                  <div
                    className="mb-5"
                    style={{
                      background: "rgba(232,0,13,0.07)",
                      borderLeft: "2px solid #E8000D",
                      color: "#ff5560",
                      fontSize: "13px",
                      padding: "11px 14px",
                    }}
                  >
                    {signupError}
                  </div>
                )}
                {signupSuccess && (
                  <div
                    className="mb-5"
                    style={{
                      background: "rgba(0,210,100,0.07)",
                      borderLeft: "2px solid #00d264",
                      color: "#00d264",
                      fontSize: "13px",
                      padding: "11px 14px",
                    }}
                  >
                    Account created. Welcome to 17Katas.
                  </div>
                )}

                <form onSubmit={handleSignup}>
                  <label className="form-label">Full name</label>
                  <input
                    className="form-input mb-5"
                    type="text"
                    placeholder="Your name"
                    value={signupForm.name}
                    onChange={(e) => setSignupForm({ ...signupForm, name: e.target.value })}
                  />
                  <label className="form-label">Email address</label>
                  <input
                    className="form-input mb-5"
                    type="email"
                    placeholder="you@company.com"
                    value={signupForm.email}
                    onChange={(e) => setSignupForm({ ...signupForm, email: e.target.value })}
                  />
                  <label className="form-label">Password</label>
                  <input
                    className="form-input mb-6"
                    type="password"
                    placeholder="Min 8 characters"
                    value={signupForm.password}
                    onChange={(e) => setSignupForm({ ...signupForm, password: e.target.value })}
                  />
                  <button type="submit" className="btn-primary w-full" disabled={loading}>
                    {loading ? "Creating account..." : "Create account"}
                  </button>
                </form>

                <p className="text-center mt-6" style={{ fontSize: "13px", color: "rgba(255,255,255,0.25)" }}>
                  Already in?{" "}
                  <button
                    className="text-brand-red"
                    onClick={() => setView("login")}
                    style={{ background: "none", border: "none", cursor: "pointer" }}
                  >
                    Log in
                  </button>
                </p>
              </>
            )}

            {/* FORGOT VIEW */}
            {view === "forgot" && (
              <>
                <h2
                  className="font-bebas text-white leading-none mb-2"
                  style={{ fontSize: "56px", letterSpacing: "2px" }}
                >
                  RESET<br />
                  ACCESS<span className="text-brand-red">.</span>
                </h2>
                <p className="mb-8" style={{ fontSize: "13px", color: "rgba(255,255,255,0.3)" }}>
                  We'll send a reset link to your email
                </p>

                {forgotSent ? (
                  <div
                    style={{
                      background: "rgba(0,210,100,0.07)",
                      borderLeft: "2px solid #00d264",
                      color: "#00d264",
                      fontSize: "13px",
                      padding: "14px 16px",
                      marginBottom: "20px",
                    }}
                  >
                    Reset link sent. Check your inbox.
                  </div>
                ) : (
                  <form onSubmit={handleForgot}>
                    <label className="form-label">Email address</label>
                    <input
                      className="form-input mb-6"
                      type="email"
                      placeholder="you@company.com"
                      value={forgotEmail}
                      onChange={(e) => setForgotEmail(e.target.value)}
                    />
                    <button type="submit" className="btn-primary w-full" disabled={loading}>
                      {loading ? "Sending..." : "Send reset link"}
                    </button>
                  </form>
                )}

                <p className="text-center mt-6" style={{ fontSize: "13px", color: "rgba(255,255,255,0.25)" }}>
                  <button
                    className="text-brand-red"
                    onClick={() => setView("login")}
                    style={{ background: "none", border: "none", cursor: "pointer" }}
                  >
                    Back to login
                  </button>
                </p>
              </>
            )}

          </div>
        </div>

        {/* Bottom note */}
        <p
          className="text-center mt-6"
          style={{ fontSize: "12px", color: "rgba(255,255,255,0.15)", fontFamily: "Manrope" }}
        >
          By signing up you agree to the{" "}
          <span className="text-brand-red" style={{ cursor: "pointer" }}>17Katas Terms of Service</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
