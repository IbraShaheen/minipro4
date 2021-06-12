import { Link } from "react-router-dom";
import { NavCont, NewNav, Navtwo, Tlogo } from "../styles";

// import pics !!

const NavBar = (props) => {
  return (
    <NavCont className="navbar navbar-expand-sm bg-dark navbar-dark">
      <Tlogo> ⛰️ First Hiking ⛰️ </Tlogo>
      <ul className="navbar-nav">
        <li className="nav-item active">
          <NewNav to="/" className="nav-link">
            Home
          </NewNav>
        </li>
        <li className="nav-item">
          <Navtwo to="/trips" className="nav-link">
            Trips
          </Navtwo>
        </li>
      </ul>
    </NavCont>
  );
};

export default NavBar;
