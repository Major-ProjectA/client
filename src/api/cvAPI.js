// import React, { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../components/Context/AuthContext";
// import { useHttpClient } from "../components/Hooks/Http-hook";

// function CvAPI() {
//     const [loadedCvs, setLoadedCvs] = useState([]);
//     const auth = useContext(AuthContext);
//     const { sendRequest } = useHttpClient();

//     useEffect(() => {
//         const fetchCvs = async () => {
//             try {
//                 const responseData = await sendRequest(`http://localhost:5000/api/cvs/user/${auth.userId}`);
//                 const data = responseData.cvs
//                 setLoadedCvs(data);
//                 console.log(data);
//             } catch (error) { }
//         };
//         fetchCvs();
//     }, [sendRequest]);

//     return{
//         loadedCVs:[loadedCvs, setLoadedCvs],
//     }
// }
// export default CvAPI;
