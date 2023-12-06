import React from "react";

import UserCard from "./components/UserCard";
export interface PendingId {
  id: number;
  fields: { title: string; value: string | number }[];
  idFront: string;
  idBack: string;
}

function App() {
  const pendingIds: PendingId[] = [
    {
      id: 1,
      fields: [
        {
          title: "Name",
          value: "Samia",
        },
        {
          title: "Job",
          value: "Career",
        },
        {
          title: "Name",
          value: "Samia",
        },
        {
          title: "Job",
          value: "Career",
        },
      ],
      idFront:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl3u2qiqt7TJhBKHbDiD802G3HvbFukL14yHtHUw_MCw&s",
      idBack:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyIfV9_gZP6IxiWdFyL6KwzRA0E0j0OJDg0vsCEYdmkGXxmauMY7lFlapjGiRwi-t0l-4&usqp=CAUg",
    },
    {
      id: 2,
      fields: [
        {
          title: "Name",
          value: "Samia",
        },
        {
          title: "Job",
          value: "Career",
        },
      ],
       idFront:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl3u2qiqt7TJhBKHbDiD802G3HvbFukL14yHtHUw_MCw&s",
      idBack:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyIfV9_gZP6IxiWdFyL6KwzRA0E0j0OJDg0vsCEYdmkGXxmauMY7lFlapjGiRwi-t0l-4&usqp=CAUg",
   },
    {
      id: 3,
      fields: [
        {
          title: "Name",
          value: "Samia",
        },
        {
          title: "Job",
          value: "Career",
        },
        {
          title: "Name",
          value: "Samia",
        },
        {
          title: "Job",
          value: "Career",
        },
      ],
       idFront:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl3u2qiqt7TJhBKHbDiD802G3HvbFukL14yHtHUw_MCw&s",
      idBack:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyIfV9_gZP6IxiWdFyL6KwzRA0E0j0OJDg0vsCEYdmkGXxmauMY7lFlapjGiRwi-t0l-4&usqp=CAUg",
   
    },
    {
      id: 4,
      fields: [
        {
          title: "Name",
          value: "Samia",
        },
        {
          title: "Job",
          value: "Career",
        },
      ],
        idFront:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl3u2qiqt7TJhBKHbDiD802G3HvbFukL14yHtHUw_MCw&s",
      idBack:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyIfV9_gZP6IxiWdFyL6KwzRA0E0j0OJDg0vsCEYdmkGXxmauMY7lFlapjGiRwi-t0l-4&usqp=CAUg",
   
    },
  ];
  return (
    <div className="pending__ids__container">
      <div className="header">
        <img src="images/logo.jpg" alt="" className="header__image" />
      </div>
      <div className="pending__ids">
        <div className="pending__ids__title">  <span>pending IDs</span></div>
        <div className="content">
          <div className="users__content">
            {pendingIds.map((pendingId) => (
              <UserCard key={pendingId.id} pendingId={pendingId}></UserCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
