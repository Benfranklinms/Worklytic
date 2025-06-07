import React from "react";
import Header from "../Other/Header";
import CreateTask from "../Other/CreateTask";
import AllTask from "../Other/AllTask";

const Admin = () => {
  return (
    <div className="min-h-screen w-full p-8 bg-[#0f1117] text-white">
      <Header />
      <CreateTask/>
      <AllTask/>
    </div>
  );
};

export default Admin;
