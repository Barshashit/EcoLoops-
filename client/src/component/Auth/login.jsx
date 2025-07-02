// Login.jsx
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Login.css";
import axios from "axios";

const Login = ({ setUserName }) => {
  const [form, setForm] = useState({ phone: "", password: "" });
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.phone) {
      setForm((prev) => ({ ...prev, phone: location.state.phone }));
    }
  }, [location]);

  const handleLogin = async () => {
 try {
    const res = await axios.post(
      `http://localhost:5000/api/auth/login?_=${Date.now()}`, // ⬅️ unique URL
      form,
      {
        headers: {
          "Cache-Control": "no-cache", // ⬅️ force fresh response
        },
      }
    );
      const { token, name } = res.data;

      localStorage.setItem("token", token);
      setUserName(name);
      alert("Login successful!");
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.msg || "Login failed");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h2>Login to Your Account</h2>
        <table className="login-table">
          <tbody>
            <tr>
              <td><label>Phone</label></td>
              <td>
                <input
                  type="text"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </td>
            </tr>
            <tr>
              <td><label>Password</label></td>
              <td>
                <input
                  type="password"
                  value={form.password}
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;




