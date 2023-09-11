import { Single } from "../../components";
import { singleUser } from "../../constants";
import "./user.scss";

const User = () => {
  return (
    <div className="user">
      <Single {...singleUser} />
    </div>
  );
};

export default User;
