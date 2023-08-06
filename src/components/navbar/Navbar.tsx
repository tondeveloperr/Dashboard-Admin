import {
  app,
  expand,
  kartono,
  logo,
  notif,
  search,
  settings,
} from "../../assets/icons";
import "./navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
        <span>Dahsboard</span>
      </div>
      <div className="icons">
        <img src={search} alt="" className="icon" />
        <img src={app} alt="" className="icon" />
        <img src={expand} alt="" className="icon" />
        <div className="notification">
          <img src={notif} alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img src={kartono} alt="" />
          <span>Kartono</span>
        </div>
        <img src={settings} alt="" className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
