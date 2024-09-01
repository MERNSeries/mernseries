import { useParams } from "react-router-dom";

const UserProfile = () => {
  const { id } = useParams(); // route paramter :id
  console.log(useParams());
  return <div>User Profile for ID: {id}</div>;
};

export default UserProfile;
