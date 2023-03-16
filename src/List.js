import React, { useState } from 'react';

const List = ({ data }) => {
  // console.log(data);
  // const {_,{el}} = data;
  // console.log(el);

  return (
    <>
      {data.map(({ id, name, age, image }) => {
        return (
          <article className="person" key={id}>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
