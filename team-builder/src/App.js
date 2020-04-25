import React, { useState, useEffect } from "react";
import Form from "./Components/Form";
// import "./App.css";

function App() {
  const FALLBACK_MEMBERS = [
    { id: 98, name: "Pajama Sam", email: "sam@gmail.com", username: "PajamaMan" },
    { id: 99, name: "Scuba Steve", email: "steve@scuba.com", username: "ScubaProf" },
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
    <div className="App container mx-auto my-4 text-white">
      <h2 className="text-center text-4xl">Team Members</h2>
      <div className="App-header flex flex-wrap justify-center">
        {allMembers.map((item) => (
          <div key={item.id} className="w-56 h-22 m-2 p-2 rounded border border-white bg-teal-700">
            <h2>{item.name}</h2>
            <hr />
            <p>{item.email}</p>
            <p>{item.username}</p>
          </div>
        ))}
      </div>
      <Form addTeamMember={addTeamMember} />
    </div>
  );
}

export default App;
