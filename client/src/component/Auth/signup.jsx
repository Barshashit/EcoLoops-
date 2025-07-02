import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./signup.css";
import axios from "axios";

const Signup = ({ setUserName }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    password: ""
  });

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.phone) {
      setForm((prev) => ({ ...prev, phone: location.state.phone }));
    }
  }, [location]);

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.phone || !form.dob || !form.password) {
      alert("All fields required");
      return;
    }

    try {
      const res = await axios.post(
        `http://localhost:5000/api/auth/signup?_=${Date.now()}`,
        form,
        {
          headers: {
            "Cache-Control": "no-cache",
          },
        }
      );

      console.log("Full Axios response:", res);
      console.log("res.status:", res.status);
      console.log("res.data:", res.data);

      // ✅ Only proceed if signup is successful
      if (res.data.token && res.data.name) {
        const { name, token } = res.data;
        localStorage.setItem("token", token);
        setUserName(name);
        alert("Signup successful!");
        navigate("/");
      } else {
        // ❌ Show backend message if signup was not successful
        alert(res.data.msg || "Signup failed");
      }
    } catch (err) {
      console.error("Signup error:", err);
      alert(err.response?.data?.msg || "Signup failed");
    }
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-box">
        <h2>Create Your Account</h2>
        <table className="signup-table">
          <tbody>
            <tr>
              <td><label>Full Name</label></td>
              <td>
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </td>
            </tr>
            <tr>
              <td><label>Email</label></td>
              <td>
                <input
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </td>
            </tr>
            <tr>
              <td><label>Phone</label></td>
              <td>
                <input
                  value={form.phone}
                  readOnly
                />
              </td>
            </tr>
            <tr>
              <td><label>DOB</label></td>
              <td>
                <input
                  type="date"
                  value={form.dob}
                  onChange={(e) => setForm({ ...form, dob: e.target.value })}
                />
              </td>
            </tr>
            <tr>
              <td><label>Password</label></td>
              <td>
                <input
                  type="password"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button onClick={handleSubmit}>Sign Up</button>
      </div>
    </div>
  );
};

export default Signup;



