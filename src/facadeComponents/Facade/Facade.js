import React, { useEffect, useState, useRef } from "react";
import Section from "../Section/Section";
import "./Facade.styles.scss";
import { useSelector } from "react-redux";

const Facade = (props) => {
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  console.log(width, height);

  const editedFacade = useSelector((state) => state.facade);
  const { floors, entrances } = props;
  const [facadeToMap, setFacadeToMap] = useState(entrances);

  const inputRef = useRef();

  // used to set gable facade as single section, without entrances
  useEffect(() => {
    if (editedFacade.beingEdited === "gable") {
      setFacadeToMap([1]);

      return;
    }
    setFacadeToMap(entrances);
  }, [editedFacade, entrances]);

  //collect component size if scroll, zoom or scale is needed
  useEffect(() => {
    var elements = document.getElementsByClassName("facade");
    if (elements.length > 0) {
      setWidth(elements[0].offsetWidth);
      setHeight(elements[0].offsetHeight);
    }
  }, [setWidth, setHeight, inputRef, floors]);

  return (
    <div className='facade' ref={inputRef}>
      {facadeToMap.map((unit) => (
        <Section floors={floors} sectionId={unit} key={unit} />
      ))}
    </div>
  );
};

export default Facade;
