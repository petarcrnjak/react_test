import React, { useState } from "react";
import styles from "./Page.module.scss";

const Page = () => {
  const [goal, setGoal] = useState();
  const sayHello = () => {
    alert("Hello!");
    setGoal("weeek");
  };
  // <div className={styles.Page}>
  //   Page Component
  // </div>

  return (
    <div className="container">
      <div className={styles.Title}>
        <h1>Room</h1>
      </div>
      <div className="row justify-content-md-center">
        <div className="col col-lg-2">1 of 3</div>
        <div className="col-md-auto">Variable width content</div>
        <div className="col col-lg-2">3 of 3</div>
      </div>
      <div className="row">
        <div className="col">1 of 3</div>
        <div className="col-md-auto">Variable width content</div>
        <div className="col col-lg-2">{goal}</div>
      </div>
      <br />
      <div>
        <button type="button" className="btn btn-primary" onClick={sayHello}>
          Click me
        </button>
      </div>
      <br />
      <div>
        <img
          src="https://www.racunalo.com/wp-content/uploads/2015/05/Slu%C5%BEbeno-je-od-danas-Facebook-dozvoljava-i-animirane-GIF-ove-02.gif"
          alt="this slowpoke moves"
          width="150"
          min-width="50"
        />
      </div>
    </div>
  );
};
export default Page;
