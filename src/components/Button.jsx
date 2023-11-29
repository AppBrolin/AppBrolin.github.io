import React from "react";

const Button = ({ styles }) => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[16px] text-primary bg-orange-gradient rounded-[25px] outline-none ${styles}`}>
    <a href="https://play.google.com/store/apps/developer?id=Brolin">Google Play</a>
  </button>
);

export default Button;
