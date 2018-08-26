import React, { Component } from "react";
import user from "./images/data.svg";
import { createStore } from 'redux';
import reducer from './reducers/reducer';
import "./App.css";

const initialState = {
  name: "Jonathan Aquarone",
  description: "Fron-End Software Engineer",
  likes: "Cats",
  location: "Brooklyn"
}

const store = createStore(reducer, initialState)

class App extends Component {
  // state = {
  //   name: "Jonathan Aquarone",
  //   description: "Fron-End Software Engineer",
  //   likes: "Cats",
  //   location: "Brooklyn"
  // };
  render() {
    // const { name, description, likes, location } = this.state;
    return (
      <div className="App">
        <section className="User__img">
          <img src={user} alt="user" />
        </section>

        <section className="User__info">
          <p>
            {" "}
            <span className="faint">I am</span> a {store.getState().description}
          </p>
          <p>
            {" "}
            <span className="faint">I like</span> {store.getState().likes}
          </p>

          <p className="User__info__details User__info__divider faint">
            <span>Name: </span>
            <span>{store.getState().name}</span>
          </p>
          <p className="User__info__details faint">
            <span>Location: </span>
            <span>{store.getState().location}</span>
          </p>
        </section>
      </div>
    );
  }
}

export default App;
