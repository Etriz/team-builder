import React, { useState } from "react";
import Form from "./Components/Form";
import "./App.css";

function App() {
  const [members, setMembers] = useState([{ name: "Pajama Sam" }, { name: "Scuba Steve" }]);
  return (
    <div className="App">
      <div className="App-header">
        {members.map((item) => (
          <p>{item.name}</p>
        ))}
        <Form />
      </div>
    </div>
  );
}

export default App;
