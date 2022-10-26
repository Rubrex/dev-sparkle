import React from "react";
import { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();
  // Contexts
  const { signUp, updateUserProfile, setLoading } = useContext(AuthContext);

  // Event Handlers

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const displayName = form.username.value;
    const photoUrl = form.photourl.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password, displayName, photoUrl);
    signUp(email, password)
      .then((res) => {
        console.log(res);
        updateProfile({ displayName: displayName, photoURL: photoUrl });
        toast.success("Signup successful");
        navigate("/");
        setLoading(false);
      })
      .catch((err) => toast.error(err.code));
  };

  const updateProfile = (profile) => {
    updateUserProfile(profile)
      .then(() => {})
      .catch((err) => toast.error(err.code));
  };

  return (
    <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
      <div className="w-full max-w-xs mx-auto py-10">
        <form className="form" onSubmit={handleSubmit}>
          <h2 className="text-center text-2xl font-medium ">Signup</h2>
          <div className="form-control">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              id="username"
            />
          </div>
          <div className="form-control">
            <label htmlFor="photourl">Photo URL</label>
            <input
              type="text"
              name="photourl"
              placeholder="Photo URL"
              id="photourl"
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              id="email"
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              id="password"
              required
            />
          </div>
          <span className="text-xs my-1">
            Already have an account? <Link to="/login">Login</Link>
          </span>
          <button type="submit" className="bg-yellow-500 text-white">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
