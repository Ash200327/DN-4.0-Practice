import React, { useState } from "react";
import Guest from "./components/Guest";
import User from "./components/User";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      {isLoggedIn ? (
        <>
          <User />
          <LogoutButton onClick={handleLogout} />
        </>
      ) : (
        <>
          <Guest />
          <LoginButton onClick={handleLogin} />
        </>
      )}
    </div>
  );
}

export default App;
