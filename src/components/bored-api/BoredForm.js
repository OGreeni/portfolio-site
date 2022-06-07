import React from 'react';

const BoredForm = () => {
  const formSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <input type="text"></input>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BoredForm;
