import React, { useEffect, useState } from "react";
import axiosWithAuth from "./axiosWithAuth";
import ProfileCard from './ProfileCard';

function Profile(props) {
  const [user, setUser] = useState({});

  useEffect(() => {
    axiosWithAuth()
      .get("https://lbs-african-marketplace.herokuapp.com//users")
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [user]);

  return <ProfileCard user={user} />;
}

export default Profile;
