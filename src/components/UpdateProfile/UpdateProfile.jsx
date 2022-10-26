import React, { useState } from "react";
import { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { motion } from "framer-motion";
import { AllInOneContext } from "../../contexts/AllInOneProvider";

const UpdateProfile = () => {
  const navigate = useNavigate();
  // Contexts
  const { updateUserProfile, user, setLoading } = useContext(AuthContext);
  const { pageVariants } = useContext(AllInOneContext);
  // States
  let [name, setName] = useState(user?.displayName);
  const [photo, setPhoto] = useState(user?.photoURL);
  const [email, setEmail] = useState(user?.email);

  // Event Handlers

  const handleSubmit = (event) => {
    event.preventDefault();
    updateProfile({ displayName: name, photoURL: photo });
  };
  const updateProfile = (profile) => {
    updateUserProfile(profile)
      .then(() => {
        toast.success("Profile updated successfully");
        setLoading(false);
      })
      .catch((err) => toast.error(err.code));
  };

  // Username handler
  const handleUsername = (event) => {
    setName(event.target.value);
  };
  // PhotoURL handler
  const handlePhoto = (event) => {
    setPhoto(event.target.value);
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 relative"
    >
      <form className="form" onSubmit={handleSubmit}>
        {user?.photoURL ? (
          <img
            src={user?.photoURL}
            width="90px"
            className=" rounded-full mx-auto"
            alt=""
          />
        ) : (
          <img
            src="https://lh3.googleusercontent.com/a/ALm5wu2LGJfyEFfwTi2u9E8djoea3noc3UjErmBm_cY8Qw=s96-c"
            width="90px"
            className=" rounded-full mx-auto"
            alt=""
          />
        )}

        <h2 className="text-center text-md font-medium mb-5">
          Update your profile
        </h2>
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            onChange={handleUsername}
            placeholder={name ? name : "Empty"}
            value={name}
            id="username"
          />
        </div>
        <div className="form-control">
          <label htmlFor="photourl">Photo URL</label>
          <input
            type="text"
            name="photourl"
            placeholder={photo ? photo : "Empty"}
            value={photo}
            onChange={handlePhoto}
            id="photourl"
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder={user?.email ? user?.email : "Empty"}
            value={email}
            readOnly
            id="email"
            required
          />
        </div>
        <button type="submit" className="bg-green-500 text-white">
          Update Profile
        </button>
      </form>
    </motion.div>
  );
};

export default UpdateProfile;
