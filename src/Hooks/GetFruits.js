// import { useEffect, useState } from "react";

// const GetFruits = (page, size) => {
//   const [fruits, setFruits] = useState([]);

//   useEffect(() => {
//     fetch(
//       `https://assignment-11-hridoy.herokuapp.com/items?page=${page}&size=${size}`
//     )
//       .then((res) => res.json())
//       .then((data) => setFruits(data));
//   }, [page, size]);

//   return [fruits, setFruits];
// };

// export default GetFruits;
