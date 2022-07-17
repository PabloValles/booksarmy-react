import React, { useState, useEffect } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h2>Usuarios: </h2>
      <h3>
        {users.length > 0
          ? `Total de Usuarios: ${users.length} `
          : "No hay Usuarios en la DB"}
      </h3>

      {users.length > 0 && (
        <ul>
          {users.map((user) => {
            return <li key={user.id}>{user.first_name}</li>;
          })}
        </ul>
      )}
    </>
  );
};

export default Users;
