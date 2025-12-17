import React from "react";
import Counter from "./components/Counter";
import Calculator from "./components/Calculator";
import MessageCard from "./components/MessageCard";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div>
      <h1>Masai React Assignment</h1>

      <Counter />
      <Calculator />

      <MessageCard title="Hello" message="Welcome to React" />
      <MessageCard title="Props" message="Props make components reusable" />
      <MessageCard title="State" message="State manages data" />

      <UserProfile />
    </div>
  );
}


export default App;
