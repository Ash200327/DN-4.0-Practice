import React from "react";

function Greeting({ isLoggedIn }) {
  // 1. Using if-else
  if (isLoggedIn) {
    return <h2>Welcome back, User!</h2>;
  } else {
    return <h2>Please log in.</h2>;
  }
}

export default Greeting;

function GreetingAdvanced({ isLoggedIn }) {
  return (
    <div>
      {/* 2. Using Ternary Operator */}
      <h3>{isLoggedIn ? "You are logged in." : "You are not logged in."}</h3>

      {/* 3. Using Logical AND operator */}
      {isLoggedIn && <p>Enjoy your dashboard!</p>}
    </div>
  );
}

export { GreetingAdvanced };
