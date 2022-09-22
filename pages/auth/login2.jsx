import React from 'react';

function Login2() {
  return (
    <div>Login2</div>
  );
}

export default Login2;


// import React, { useState } from "react";
// import Cookies from 'js-cookie';
// import axios from "axios";

// export default function Login() {
//   const [form, setForm] = useState({ email: "", password: "" });

//   const handleChangeText = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async () => {
//     try {
//       const {data} = await axios.post("https://fazzpay.herokuapp.com/auth/login", form);
//       Cookies.set("token", data.data.token)
//       // Cookies.set("id", data.data.id)
//       console.log(data)
//     //  console.log("login")
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div>
//       <h1>Login</h1>
//       <input
//         type="email"
//         className="form-control my-2"
//         name="email"
//         placeholder="Input email ..."
//         onChange={handleChangeText}
//       />
//       <input
//         type="password"
//         className="form-control my-2"
//         name="password"
//         placeholder="Input password ..."
//         onChange={handleChangeText}
//       />
//       <button className="btn btn-primary mt-3" onClick={handleSubmit}>
//         Submit
//       </button>
//     </div>
//   );
// }

