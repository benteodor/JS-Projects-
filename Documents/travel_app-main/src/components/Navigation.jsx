import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="#">About</NavLink>
        </li>
        <li>
          <NavLink to="/countries">Search</NavLink>
        </li>
        <li>
          <NavLink to="/planner">Planner</NavLink>
        </li>
        <li>
          <NavLink to="/weather">Weather</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
