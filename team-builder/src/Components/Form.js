import React, { useState } from "react";

const Form = ({ addTeamMember }) => {
  const [member, setMember] = useState({ name: "", email: "", role: "" });

  const submitForm = (event) => {
    event.preventDefault();
    addTeamMember(member);
    setMember({ name: "", email: "", role: "" });
  };
  const handleChanges = (event) => {
    setMember({ ...member, [event.target.name]: event.target.value });
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        placeholder="Add Name"
        value={member.name}
        name="name"
        onChange={handleChanges}
      />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        placeholder="Add Email"
        value={member.email}
        name="email"
        onChange={handleChanges}
      />
      <label htmlFor="role">Role</label>
      <input
        id="role"
        type="text"
        placeholder="Add Role"
        value={member.role}
        name="role"
        onChange={handleChanges}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
