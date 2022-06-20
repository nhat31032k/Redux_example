import React from "react";
import { useSelector } from "react-redux";

const links = ["Dashboard", "Ecommerce", "Super market", "Long vision"];
const Sidebar = () => {
  const globalAction = useSelector((state) => state.global);
  console.log(globalAction);
  const { showSideBar } = globalAction;
  return (
    <div
      // check nếu showSideBar = true thì show ra sidebar
      className={`w-[300px] h-[600px] border rounded  border-cyan-400  shadow fixed top-5 left-5 bottom-5 transition-all ${
        showSideBar ? "" : "-translate-x-[200%]"
      }`}
    >
      {links.map((item) => (
        <div
          className="p-4 cursor-pointer dark:text-white hover:bg-gray-50"
          key={item}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
