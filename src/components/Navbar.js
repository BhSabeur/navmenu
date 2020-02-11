import React from "react";

function Navbar({ linksArray }) {
  return (
    <ul className="list">
      {linksArray.map((el, key) => (
        <li className={el.subMenu ? "service" : ""} key={key}>
          {el.title}
          {el.subMenu && (
            <ul className="menu">
              {el.subMenu.map((el, i) => (
                <li key={i}>{el}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}

export default Navbar;
