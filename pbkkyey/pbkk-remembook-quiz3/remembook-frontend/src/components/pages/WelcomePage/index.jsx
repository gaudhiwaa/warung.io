import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "../../DataTable";
import InputReview from "../../InputReview";

function Index({username}) {
  const [name, setName] = useState(username)
  // const [author, setAuthor] = useState()
  // const [description, setDescription]
  // const [title, setTitle]

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/reviews")
      .then((res) => {
        // console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      });
  }, []);

  return <div>
    <DataTable/>
    <InputReview/>
  </div>;
}

export default Index;
