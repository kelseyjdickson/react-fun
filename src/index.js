import React, { useState } from "react";
import ReactDom from "react-dom";

const BookList = () => {
  return (
    <section>
      <Book />
    </section>
  );
};
const Book = () => {
  return (
    <article>
      <Image></Image>
      <Title />
    </article>
  );
};
const Image = () => {
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/51pOqQY9tiL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg"
    alt="wes anderson"
  />;
};
const Title = () => <h2>By: Kelsey Dickson</h2>;
ReactDom.render(<BookList />, document.getElementById("root"));
