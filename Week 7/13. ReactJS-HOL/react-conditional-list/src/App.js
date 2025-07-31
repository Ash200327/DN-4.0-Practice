import React, { useState } from "react";
import Greeting from "./components/Greeting";
import { GreetingAdvanced } from "./components/Greeting";
import ItemList from "./components/ItemList";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const items = ["React", "Vue", "Angular"];

  const toggleLogin = () => setIsLoggedIn(!isLoggedIn);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <button onClick={toggleLogin}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>

      {/* Using first Greeting (if-else) */}
      <Greeting isLoggedIn={isLoggedIn} />

      {/* Using advanced Greeting with ternary and logical AND */}
      <GreetingAdvanced isLoggedIn={isLoggedIn} />

      <h3>Popular JavaScript Frameworks:</h3>
      {/* List rendering with keys */}
      <ItemList items={items} />
    </div>
  );
}

export default App;
