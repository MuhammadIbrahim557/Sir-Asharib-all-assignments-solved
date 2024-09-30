import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
         <h1>This is Footer page</h1><br />
      <p>&copy; Sumbtting an assignment All Rights Reserved.</p> <br />
      <p>Contact: contact@jabraheemkhan557gmail.com</p> <br />
      <Link href="/">Go to Homepage</Link>
    </div>
  );
};

export default Footer;
