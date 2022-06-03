import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserForm = () => {
  let navigate = useNavigate();

  const [inputData, setInputData] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/user-details/${inputData}`, { id: inputData });
    // history.push("/user-details", { userId: inputData });
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input onChange={(e) => setInputData(e.target.value)} />
        <button type="submit">submit</button>
      </form>
    </>
  );
};
export default UserForm;
