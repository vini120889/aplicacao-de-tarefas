import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink exact to="/" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/add-task" activeClassName="active">
          Adicionar Tarefa
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
