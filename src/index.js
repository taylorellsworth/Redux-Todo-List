import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import TodoApp from "./TodoApp";
import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";
import ReduxReducer from "./ReducReducer";
import "./index.css";

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, ReduxReducer);
let store = createStore(persistedReducer);
let persistor = persistStore(store);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <TodoApp />
    </PersistGate>
  </Provider>,
  rootElement
);
