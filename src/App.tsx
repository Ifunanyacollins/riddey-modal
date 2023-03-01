import React from "react";
import Button from "./components/button";
import Modal from "./components/modal";

function App(props) {
  return (
    <div className="hello">
      <Modal open={true}></Modal>
    </div>
  );
}

export default App;
