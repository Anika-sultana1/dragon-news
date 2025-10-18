import React from "react";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h3 className="font-bold mb-5">Find us on</h3>
      <div>
        <div className="flex flex-col  w-full gap-2">
          <button className="btn justify-start bg-base-100 "> <FaFacebook></FaFacebook> Facebook</button>
          <button className="btn justify-start bg-base-100 join-item"> <BsTwitter></BsTwitter> Twitter</button>
          <button className="btn justify-start bg-base-100 join-item"> <BsInstagram/> Instagram</button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
