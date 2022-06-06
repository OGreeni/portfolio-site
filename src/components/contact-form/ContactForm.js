import React from 'react';

const ContactForm = () => {
  const formSubmitHandler = (event) => {
    event.preventDefault();
  };

  // return (
  //   <>
  //     <h2>Get in touch:</h2>
  //     <form onSubmit={formSubmitHandler}>
  //       <div>
  //         <label for="first-name">First Name</label>
  //         <input id="first-name" type="text"></input>
  //       </div>
  //       <div>
  //         <label for="last-name">Last Name</label>
  //         <input id="last-name" type="text"></input>
  //       </div>
  //       <div>
  //         <label for="email">Email</label>
  //         <input id="email" type="email"></input>
  //       </div>
  //       <div>
  //         <button type="submit">Submit</button>
  //       </div>
  //     </form>
  //   </>
  // );
};

export default ContactForm;
