import React from 'react';
type User ={
  id: number;
  username:string;
}



type ItemProps<T extends User>={
  id:number,
  title:string,
  extra:T[]
}
const Item = (props:ItemProps<{id:number;username:string}>) => {
  return (
    <div>
      {props.id}
      {" "}
      {props.title}
      {" "}
      {props.extra.map(extraItem => (
        <div key={extraItem.id}>
          {extraItem.username}
        </div>
      ))}
    </div>
  );
};

export default Item;