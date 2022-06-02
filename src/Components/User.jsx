import React, { useContext, useEffect, useState } from "react";
import { AuthCreate } from "../Context/AuthContext";
import Show from "./Show";
import SignIn from "./SignIn";

const User = () => {
  const { isAuth } = useContext(AuthCreate);

  const [user, setUser] = useState({
    data: { id: 0, email: "", first_name: "", last_name: "", avatar: "" },
  });

  console.log(user);

  const getdata = () => {
    if (isAuth) {
      fetch(`https://reqres.in/api/users/${Math.floor(Math.random() * 12 + 1)}`)
        .then((res) => res.json())
        .then((d) => setUser(d));
    }
  };

  useEffect(() => {
    getdata();
  }, [isAuth]);

  return <div>{isAuth ? <Show user={user} /> : <SignIn />}</div>;
};

export default User;
