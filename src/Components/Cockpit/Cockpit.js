import React, { useEffect } from "react";
import classes from "./Cockpit.css";

const Cockpit = props => {
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect');
    }
  }, []);

  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect");
    return () => {
      console.log('[Cockpit.js] 2nd cleanup work in useEffect');
    }
  });
  const assignedClasses = [];
  let btnClass = "";
  if (props.showPersons) {
    btnClass = classes.red;
  }
  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }
  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button className={btnClass} onClick={props.clicked}>
        Switch name
      </button>
    </div>
  );
};

export default React.memo(Cockpit);
