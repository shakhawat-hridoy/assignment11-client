import React from "react";

const Q3 = () => {
  return (
    <div className="mt-5 mb-3 px-5">
      <h2>When Node.js</h2>
      <p>
        Node.js is a real time web app employing push technology.Thats why its
        used in such applications which need quick data transfer between client
        and server.For example chatting app.
        <br />
        Again node is known for its singlr threaded behaviour.
      </p>
      <br />
      <h2>When MongoDb</h2>
      <p>
        MongoDb is a no-sql database.Which means it doesn't have any structural
        data management requirements. Unlike sql databases , mongodb stores
        document type data. Its used whrn we need to store some data exactly as
        we want to use. for example js object.
        <br />
        Again we can use mongodb whrn we dont want to organize our data in a
        complex hierarchy.
      </p>
    </div>
  );
};

export default Q3;
