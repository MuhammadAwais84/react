import React from "react";
import Right_Section from "./Rght_Section/Right_Section";
import style from "./Hero_Section.module.css";
import Left_Section from "./Left_Section/Left_Section";

export const Hero_Section = () => {
  return (
    <>
    <div className={style.Hero_Section}>
      <div className={style.Hero_Section_BG}></div>
       <div className={style.Blur_Overlay}></div>
      <div className={style.Content}>
        <Left_Section />
        <Right_Section />
      </div> 
    </div>
      
    </>
  );
};
