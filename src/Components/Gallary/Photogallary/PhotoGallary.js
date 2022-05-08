import React from "react";

const PhotoGallary = () => {
  return (
    <section>
      <div className="row g-0">
        <div className="col-md-4 col-12">
          <img
            src="https://images.unsplash.com/photo-1535683577427-740aaac4ec25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVyZnVtZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60"
            alt=""
            className="img-fluid h-100"
          />
        </div>
        <div className="col-md-8 col-12">
          <img
            src="https://images.unsplash.com/photo-1595535373192-fc8935bacd89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVyZnVtZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60"
            alt=""
            className="img-fluid h-100"
          />
        </div>
        <div className="col-md-8 col-12">
          <img
            src="https://images.unsplash.com/photo-1595425959632-34f2822322ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcmZ1bWV8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
            alt=""
            className="img-fluid h-100"
          />
        </div>
        <div className="col-md-4 col-12">
          <img
            src="https://images.unsplash.com/photo-1557170334-a9632e77c6e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyZnVtZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60"
            alt=""
            className="img-fluid h-100"
          />
        </div>
      </div>
    </section>
  );
};

export default PhotoGallary;
