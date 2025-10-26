import React from "react";
import Page from "./page";

const Pages = () => {
  return (
    <>
      <div className="flex gap-8">
        {<Page pageName="Home" />}
        {<Page pageName="About" />}
        {<Page pageName="Services" />}
        {<Page pageName="Contact US" />}
      </div>
    </>
  );
};

export default Pages;
