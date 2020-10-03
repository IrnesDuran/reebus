import React, { useCallback, useState } from "react";
import "./FacadeNavbar.styles.scss";
import { useDispatch } from "react-redux";

import { beingEdited } from "../../redux/facade/facade.actions";

const FacadeNavbar = () => {
  const [activeLink, setActiveLink] = useState("front");

  const dispatch = useDispatch();

  const toggleFacade = useCallback(
    (text) => {
      setActiveLink(text);
      dispatch(beingEdited(text));
    },
    [dispatch]
  );

  return (
    <div className='facade-navbar-container'>
      <nav>
        <a
          href='#'
          className={activeLink === "front" ? "active" : ""}
          onClick={() => toggleFacade("front")}
        >
          Front Facade
        </a>
        <a
          href='#'
          className={activeLink === "rear" ? "active" : ""}
          onClick={() => toggleFacade("rear")}
        >
          Rear Facade
        </a>
        <a
          href='#'
          className={activeLink === "gable" ? "active" : ""}
          onClick={() => toggleFacade("gable")}
        >
          Gable Facade
        </a>
        <div className={`animation start-${activeLink}`}></div>
      </nav>
    </div>
  );
};

export default FacadeNavbar;
