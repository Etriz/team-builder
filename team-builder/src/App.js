import React, { useState, useEffect } from "react";
import Form from "./Components/Form";

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
  const loadEditMemberData = (id) => {
    const find = allMembers.find((member) => member.id === id);
    // console.log(find);
    setMemberToEdit(find);
  };
  const replaceEditMemberData = (data) => {
    const updateMemberData = allMembers.map((item) => {
      if (item.id === data.id) {
        return data;
      } else return item;
    });

    setAllMembers([...updateMemberData]);
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
              onClick={() => loadEditMemberData(item.id)}>
              Edit
            </button>{" "}
            <button
              className="bg-white text-black rounded border px-1 mt-1 hover:bg-orange-600 hover:border-white hover:text-white right-0 bottom-0"
              // onClick={make a delete function}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <Form
        addTeamMember={addTeamMember}
        memberToEdit={memberToEdit}
        setMemberToEdit={setMemberToEdit}
        replaceEditMemberData={replaceEditMemberData}
      />
    </div>
  );
}

export default App;
