import React, { useState, useEffect } from "react";
import Form from "./Components/Form";
import "./App.css";

function App() {
  const FALLBACK_MEMBERS = [
    { name: "Pajama Sam", email: "sam@gmail.com", role: "Pajama Man" },
    { name: "Scuba Steve", email: "steve@scuba.com", role: "Scuba Instructor" },
  ];
  const [allMembers, setAllMembers] = useState(FALLBACK_MEMBERS);

  const addTeamMember = (member) => {
    setAllMembers([...allMembers, member]);
  };
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        // console.log(json);
        setAllMembers(json);
      })
      .catch((err) => console.error("Fetch API error!", err));
  }, []);
  return (
    <div className="App">
      <div className="App-header">
        {allMembers.map((item) => (
          <p key={item.name}>{item.name}}</p>
        ))}
        <Form addTeamMember={addTeamMember} />
      </div>
    </div>
  );
}

export default App;
