import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();

  return <h2>User ID from URL: {id}</h2>;
}

export default User;
