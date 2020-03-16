import React from "react";
import { useState } from "react";

import "./Profile.css";

const Profile = ({ toggleModal }) => {
  return (
    <div className="profile-modal">
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center bg-white">
        <main className="pa4 black-80 w-80">
          <img
            src="http://tachyons.io/img/logo.jpg"
            className="h3 w3 dib mb-0"
            alt="avatar"
          />
          <h1>John Doe</h1>
          <h4>Images submited: 5</h4>
          <p>Member since: January</p>
          <hr />
          <label className="mt-2 fw6" htmlFor="user-name">
            Name:
          </label>
          <input
            className="pa2 ba w-100"
            placeholder="John Doe"
            type="text"
            name="user-name"
            id="name"
          />
          <label className="mt-2 fw6" htmlFor="user-age">
            Age:
          </label>
          <input
            className="pa2 ba w-100"
            placeholder="56"
            type="text"
            name="user-age"
            id="age"
          />
          <label className="mt-2 fw6" htmlFor="user-pet">
            Pet:
          </label>
          <input
            className="pa2 ba w-100"
            placeholder="Dragon"
            type="text"
            name="user-pet"
            id="pet"
          />
          <div
            className="mt-4"
            style={{ display: "flex", justifyContent: "space-evenly" }}
          >
            <button className="b pa2 pointer hover-white w-40 bg-light-blue b--black-20">
              Save
            </button>
            <button
              className="b pa2 pointer hover-white w-40 bg-light-red b--black-20"
              onClick={toggleModal}
            >
              Cancel
            </button>
          </div>
        </main>
        <div className="modal-close" onClick={toggleModal}>
          &times;
        </div>
      </article>
    </div>
  );
};

export default Profile;
