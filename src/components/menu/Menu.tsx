import { Link } from "react-router-dom";
import "./menu.scss";
import { menu } from "../../constants";

const Menu = () => {
  return (
    <div className="menu">
      {menu.map((item) => (
        <div className="lists" key={item.id}>
          <span className="title">{item.title}</span>
          {item.listItems.map((listItem) => (
            <Link to="/" className="list-item" key={listItem.id}>
              <img src={listItem.icon} alt="icon" />
              <span className="list-item-title">{listItem.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
