import React from "react";
import { createRoot } from "react-dom/client";

const BasedButton = (props) => {
  return <button className="based-button">so based</button>;
};
console.log(<BasedButton />);

const virtualDOMRoot = createRoot(document.getElementById("root"));
virtualDOMRoot.render(<BasedButton />);
