import React from "react";
import { useState } from "react";

import "./Profile.css";
import { useCallback } from "react";

const Profile = ({ toggleModal, loadUser, user }) => {
  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);
  const [pet, setPet] = useState(user.pet);

  const onSave = useCallback(async () => {
    const token = window.sessionStorage.getItem("token");
    try {
      await fetch(`http://192.168.99.101:3000/profile/${user.id}`, {
        method: "post",
        headers: { "Content-Type": "appkication/json", Authorization: token },
        body: JSON.stringify({ formInput: { name, age, pet } })
      });

      toggleModal();
      loadUser({ ...user, ...{ name, age, pet } });
    } catch (error) {
      console.error("Error while onSave", error);
    }
  }, [name, age, pet]);

  return (
    <div className="profile-modal">
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center bg-white">
        <main className="pa4 black-80 w-80">
          <img
            src="http://tachyons.io/img/logo.jpg"
            className="h3 w3 dib mb-0"
            alt="avatar"
          />
          <h1>{name}</h1>
          <h4>{`Images Submitted: ${user.entries}`}</h4>
          <p>
            {`Member since: ${new Date(user.joined).toLocaleDateString()}`}{" "}
          </p>
          <hr />
          <label className="mt-2 fw6" htmlFor="user-name">
            Name:
          </label>
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            className="pa2 ba w-100"
            placeholder={user.name}
            type="text"
            name="user-name"
            id="name"
          />
          <label className="mt-2 fw6" htmlFor="user-age">
            Age:
          </label>
          <input
            value={age}
            onChange={e => setAge(e.target.value)}
            className="pa2 ba w-100"
            placeholder={user.age}
            type="text"
            name="user-age"
            id="age"
          />
          <label className="mt-2 fw6" htmlFor="user-pet">
            Pet:
          </label>
          <input
            value={pet}
            onChange={e => setPet(e.target.value)}
            className="pa2 ba w-100"
            placeholder={user.pet}
            type="text"
            name="user-pet"
            id="pet"
          />
          <div
            className="mt-4"
            style={{ display: "flex", justifyContent: "space-evenly" }}
          >
            <button
              className="b pa2 pointer hover-white w-40 bg-light-blue b--black-20"
              onClick={onSave}
            >
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
