import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { createStore } from "redux";

const initialState = [
  {
    text: "HTML",
    done: false,
  },
  {
    text: "Css",
    done: false,
  },
  {
    text: "JS",
    done: false,
  },
  {
    text: "React",
    done: false,
  },
  {
    text: "Angular",
    done: false,
  },
  {
    text: "Frontend",
    done: false,
  },
];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "delete":
      return state.filter((item, index) => {
        if (action.payload === index) {
          return false;
        } else {
          return true;
        }
      });

    case "add":
      return [...state, { text: action.payload, done: false }];
    case "click":
      return [
        ...state.map((item, index) =>
          index === action.payload ? { ...item, done: !item.done } : { ...item }
        ),
      ];
    default:
      return state;
  }
};

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
