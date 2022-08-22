// import React, { useState } from "react";
// import { HouseFill, PersonWorkspace, Cast } from "react-bootstrap-icons";
// import "./navbot.css";

// export const NavBot = () => {
//   const [activeLink, setActiveLink] = useState("home");
//   return (
//     <React.Fragment>
//       <section>
//         <ul className="navbot p-0">
//           <li className={`${activeLink === "home" ? "active" : ""}`}>
//             <a href="#" onClick={() => setActiveLink("home")}>
//               <span className="icon">
//                 <HouseFill />
//               </span>
//               <span className="text">Home</span>
//             </a>
//           </li>
//           <li className={`${activeLink === "skilss" ? "active" : ""}`}>
//             <a href="#" onClick={() => setActiveLink("skilss")}>
//               <span className="icon">
//                 <PersonWorkspace />
//               </span>
//               <span className="text">Skilss</span>
//             </a>
//           </li>
//           <li className={`${activeLink === "project" ? "active" : ""}`}>
//             <a href="#" onClick={() => setActiveLink("project")}>
//               <span className="icon">
//                 <Cast />
//               </span>
//               <span className="text">Project</span>
//             </a>
//           </li>
//         </ul>
//       </section>
//     </React.Fragment>
//   );
// };
