import React from "react";
import KitchenDesigner from "./KitchenDesigner";  // ✅ Make sure it's correctly imported

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Welcome to Kitchen Designer!</h1>
      <KitchenDesigner />  {/* ✅ This will render your actual tool */}
    </div>
  );
}

export default App;
