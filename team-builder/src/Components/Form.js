import React, { useState, useEffect } from "react";

const Form = ({ addTeamMember, memberToEdit, setMemberToEdit, replaceEditMemberData }) => {
  const BLANK_MEMBER = { id: Date.now(), name: "", email: "", username: "" };
  const [member, setMember] = useState(BLANK_MEMBER);

  const submitForm = (event) => {
    event.preventDefault();
    if (!memberToEdit) {
      if (
        member.name !== BLANK_MEMBER.name &&
        member.email !== BLANK_MEMBER.email &&
        member.username !== BLANK_MEMBER.username
      ) {
        addTeamMember(member);
        clearForm();
      }
    } else {
      replaceEditMemberData(member);
      clearForm();
    }
  };
  const clearForm = () => {
    setMember(BLANK_MEMBER);
    setMemberToEdit();
  };
  const handleChanges = (event) => {
    // console.log(event.target.value);
    setMember({ ...member, [event.target.name]: event.target.value.toString() });
  };

  useEffect(() => {
    if (memberToEdit) {
      setMember(memberToEdit);
    }
  }, [memberToEdit]);

  return (
    <form
      onSubmit={submitForm}
      className="rounded border border-white bg-teal-900 p-6 mx-auto my-2 max-w-md">
      <div className="flex justify-between">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          placeholder="Add Name"
          value={member.name}
          name="name"
          className="px-2 py-1 ml-6 text-black border-2 outline-none focus:border-orange-600"
          onChange={handleChanges}
        />
      </div>
      <div className="my-6 flex justify-between">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Add Email"
          value={member.email}
          name="email"
          className="px-2 py-1 ml-6 text-black border-2 outline-none focus:border-orange-600"
          onChange={handleChanges}
        />
      </div>
      <div className="flex justify-between">
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          placeholder="Add Username"
          value={member.username}
          name="username"
          className="px-2 py-1 ml-6 text-black border-2 outline-none focus:border-orange-600"
          onChange={handleChanges}
        />
      </div>
      <button
        type="submit"
        className="bg-white text-black rounded border py-1 px-3 mt-6 w-1/2 hover:bg-orange-600 hover:border-white hover:text-white">
        Submit
      </button>
    </form>
  );
};

export default Form;
