import React from "react";
//Elements
import { useParams } from "react-router-dom";
const Profile = () => {
  const { userId } = useParams();
  return <div>{userId}</div>;
};

export default Profile;
