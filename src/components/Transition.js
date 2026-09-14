import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './Transition.css';

const Transition = ({ children }) => {
  return (
    <CSSTransition
      in={true}
      appear={true}
      timeout={500}
      classNames="fade"
    >
      <div>
        {React.Children.only(children)}
      </div>
    </CSSTransition>
  );
};

export default Transition;
