import { useContext, useState } from "react";
import { ThemeContext } from "./ThemeContext";
import { UserContext } from "./UserContext";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { username, setUsername } = useContext(UserContext);
  const [input, setInput] = useState(username);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername(input);
  };

  return (
    <header style={{ marginBottom: 24, textAlign: "center" }}>
      <div>
        <strong>Welcome, {username || "Guest"}!</strong>
      </div>
      <form
        onSubmit={handleSubmit}
        style={{ display: "inline-block", margin: "0 8px" }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ marginRight: 4 }}
        />
        <button type="submit">Change Name</button>
      </form>
      <button onClick={toggleTheme} style={{ marginLeft: 16 }}>
        Switch to {theme === "light" ? "Dark" : "Light"} Theme
      </button>
    </header>
  );
}

export default Header;
