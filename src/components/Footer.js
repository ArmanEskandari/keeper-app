import React from "react";

const Footer = () => {
  const d = new Date();
  const year = d.getFullYear();
  return <footer>@copyright {year}</footer>;
};

export default Footer;
