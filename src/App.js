import React, { useEffect, useState } from "react";

export default function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  };

  // const onAdd = aync (name, email) => {
  //   await fetch("https://jsonplaceholder.typicode.com/users", {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       name: name,
  //       email: email
  //     }),
  //     headers: {
  //       "Content-type": "applcation/json; charset=UTF-8"
  //     }
  //   })
  //     .then((response) => {

  //     })
  // }
}
