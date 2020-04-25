import React, { useState, useEffect } from "react";
import Form from "./Components/Form";
// import "./App.css";

function App() {
  const FALLBACK_MEMBERS = [
    { id: 98, name: "Pajama Sam", email: "sam@gmail.com", username: "PajamaMan" },
    { id: 99, name: "Scuba Steve", email: "steve@scuba.com", username: "ScubaProf" },
  ];
  const [allMembers, setAllMembers] = useState(FALLBACK_MEMBERS);
  const [memberToEdit, setMemberToEdit] = useState();

  const addTeamMember = (member) => {
    setAllMembers([...allMembers, member]);
  };
  const editMember = (id) => {
    const find = allMembers.find((member) => member.id === id);
    // console.log(find);
    setMemberToEdit(find);
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
      <h1 className="text-center text-4xl">Team Members</h1>
      <div className="App-header flex flex-wrap justify-center">
        {allMembers.map((item) => (
          <div key={item.id} className="w-56 h-22 m-2 p-2 rounded border border-white bg-teal-700">
            <h2 className="text-lg">{item.name}</h2>
            <hr />
            <p>{item.email}</p>
            <p>{item.username}</p>
            <button
              className="bg-white text-black rounded border px-1 hover:bg-orange-600 hover:border-white hover:text-white right-0 bottom-0"
              onClick={() => editMember(item.id)}>
              Edit
            </button>
          </div>
        ))}
      </div>
      <Form addTeamMember={addTeamMember} memberToEdit={memberToEdit} />
    </div>
  );
}

export default App;
