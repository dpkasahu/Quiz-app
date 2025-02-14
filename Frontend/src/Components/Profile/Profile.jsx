// // import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// // import { fetchQuizDataFrombackend } from "../../Redux/action.js";
// import { Link } from "react-router-dom";

// export const Profile = () => {
//   // const data = useSelector((state) => state.mernQuize.QuizData);
//   // const [count, setCount] = useState(0);
//   const userName = useSelector((state) => state.mernQuize.userName);

//   return (
//     <div className="margin-auto shadow-2xl h-96 w-11/12 ml-16 ">
//       {/* <h1 className="ml-44 mt-10">
//         <strong className="text-teal-500 text-2xl pl-32 font-extrabold italic">
//           Sweat more in practice, bleed less in war.
//         </strong>{" "}
//         <br /> <p className="ml-96 pl-28 font-bold">– Spartan Warrior Credo</p>
//       </h1> */}
//       <div className="flex w-4/5 mb-56 ml-64 mt-16">
//         {/* <img src="./profile.gif" alt="prfile" className="w-1/2 h-64" /> */}
//       </div>
//       <div className="border-red-500 absolute  bg-teal-300 rounded-2xl right-12 top-94 border-2 mb-8 p-1 pl-2  pr-2 ">
//         <Link to="/">
//           <button className="bg-teal-500 text-white text-lg font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-teal-600 transition duration-300">Attempt Quiz</button>
//         </Link>
//       </div>
//     </div>
//   );
// };



import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Profile = () => {
  const userName = useSelector((state) => state.mernQuize.userName);

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      {/* Profile Card */}
      <div className="bg-white shadow-2xl rounded-lg p-8 w-3/4 max-w-3xl text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Welcome, {userName}
        </h2>

        {/* Attempt Quiz Button */}
        <div className="mt-6">
          <Link to="/">
            <button className="bg-teal-500 text-white text-lg font-semibold py-3 px-8 rounded-xl shadow-md hover:bg-teal-600 transition duration-300">
              Attempt Quiz
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
