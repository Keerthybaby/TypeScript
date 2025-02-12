"use client";
import React from "react";
const EventExample = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Searched!");
  };

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
    e.preventDefault();
    console.log(`Post ${id} has been deleted`);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Search for anything..."
          onChange={handleChange}
        />
        <button onClick={handleClick}>Search</button>
      </form>
      <form>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
          veniam voluptatum delectus, vel earum quod repellendus reprehenderit
          cumque veniam quibusdam dolorum?
        </p>
        <button onClick={(e) => handleDelete(e,1)}>Delete</button>
      </form>
      <form>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, vel
          sequi nulla ab assumenda consequuntur sint eligendi aspernatur
          blanditiis placeat recusandae cumque libero culpa, voluptates
          perferendis sit nam laborum nostrum?
        </p>
        <button onClick={(e) => handleDelete(e,2)}>Delete</button>
      </form>
    </div>
  );
};

export default EventExample;
