import React, { useEffect, useState } from "react";
import axiosWithAuth from "./axiosWithAuth";
import ProfileCard from "./ProfileCard";

function Profile(props) {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    axiosWithAuth()
      .get(`https://lbs-african-marketplace.herokuapp.com/users/:id`)
      .then(response => {
        setProfile(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  },[profile]);

  return (
    <section>
      <h1>Your Profile</h1>
      <ProfileCard profile={profile}/>
    </section>
  );
}

export default Profile;