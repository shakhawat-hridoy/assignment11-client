import { useEffect, useState } from "react";

const GetPerfume = (page, size) => {
  const [perfume, setPerfume] = useState([]);

  useEffect(() => {
    fetch(
      `https://assignment-11-hridoy.herokuapp.com/items?page=${page}&size=${size}`
    )
      .then((res) => res.json())
      .then((data) => setPerfume(data));
  }, [page, size]);

  return [perfume, setPerfume];
};

export default GetPerfume;
