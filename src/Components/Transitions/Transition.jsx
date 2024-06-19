/* eslint-disable react/prop-types */
import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useLocation } from "react-router-dom";
import "./Transition.css";

const Transition = ({ children }) => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} timeout={500} classNames="fade">
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
};

export default Transition;
