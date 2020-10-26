import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [state, setState] = useState("");
  const myToken = "Bearer sdvgshdfhgdgfkdhfkdjfhgdhfjdfjdhfjdf";
  localStorage.setItem("access_token", myToken);
  return (
    <div className="App">
      <h1>XSS Attack example</h1>
      <textarea value={state} onChange={(e) => setState(e.target.value)} />
      <div dangerouslySetInnerHTML={{ __html: state }}></div>
    </div>
  );
}
