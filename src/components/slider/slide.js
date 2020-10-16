import React from 'react';
import css from './Slide.module.scss';

const Slide = ({ children, color }) => {
  return (
    <div className={css.container}>
      <img className={css.content} src={color} style={{width: "100%"}}/>
      <footer className={css.footer}>
        {children}
      </footer>
    </div>
  );
};

export default Slide;
