import React from "react";
import "./Dial.css";

const Dial = () => {
  return (
    <section className="Dial">
      <div className="digits">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>0</button>
        <button>.</button>
      </div>
      <div className="operators">
        <button>&divide;</button>
        <button>&times;</button>
        <button>-</button>
        <button>+</button>
      </div>
    </section>
  );
};

export default Dial;
