import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import UserDetails from "./UserDetails";
import UserForm from "./UserForm";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserForm />} />
          <Route path={`/user-details/:id`} element={<UserDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
