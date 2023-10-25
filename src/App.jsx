import React from "react";
import { useState } from "react";
import profileImage from "./asset/20653_18.jpg";
import starFill from "./asset/star-fill.png";
import starEmpty from "./asset/star-empty.png";

export default function App() {
  const [contact, setContact] = React.useState({
    firstName: "Habeebullah",
    lastName: "Opeyemi",
    skill: "Biotechnologist",
    email: "habeebullahokunlola@gmail.com",
    isFavourite: false
  })
  let starIcon = contact.isFavourite ? starEmpty : starFill;
  function toggleStar() {
    setContact(prevContact => {
      return{
        ...prevContact,
        isFavourite: !prevContact.isFavourite
      }
    })
  }
  return (
    <div className="app-section">
      <div className="profile-image">
      <img src={profileImage} />
      </div>
      <div className="profile-text">
      <h1>{contact.firstName} {contact.lastName}</h1>
      <p>{contact.skill}</p>
      <p>{contact.email}</p>
      <img onClick={toggleStar} className="rate" src={starIcon} />
      </div>
    </div>
  );
}
