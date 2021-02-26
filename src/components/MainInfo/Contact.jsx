import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__mail">
        <p className="contact__mail-text" id="email">
          benxmr@gmail.com
        </p>
        <button className="contact__mail-copy" id="copy-btn">
          {/* <svg><use xlink:href="#copy"></use></svg> */}
        </button>
      </div>
      <a className="contact__phone" href="tel:+79081771334">
        +7(908)1771334
      </a>
    </div>
  );
};

export default Contact;
