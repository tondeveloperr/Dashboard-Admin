import { topDealUsers } from "../../constants";
import "./topbox.scss";

const TopBox = () => {
  return (
    <div className="topbox">
      <h1>Top Deals</h1>
      <div className="lists">
        {topDealUsers.map((user) => (
          <div className="list-item" key={user.id}>
            <div className="user">
              <img src={user.img} alt="" />
              <div className="user-info">
                <div className="username">{user.username}</div>
                <div className="email">{user.email}</div>
              </div>
            </div>
            <span className="amount">${user.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBox;
