import React, { useState } from "react";

const SwitchTabs = ({ data, onTabChange }) => {
  const [selectedTab, setselectedTab] = useState(0);
  const [left, setleft] = useState(0);

  return (
    <div className="h-8 bg-white rounded-full p-1">
      <div className="flex items-center h-7 relative">
        {data &&
          data.map((tab, index) => {
            return (
              <span key={index} className="text-black">
                {tab}
              </span>
            );
          })}
          <span className="h-7 w-20 rounded-lg bg-gradient-to-r from-orange-500 to-blue-500 absolute left-0"/>
      </div>
    </div>
  );
};

export default SwitchTabs;
