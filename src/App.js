import React from "react";
import KitchenDesigner from "./KitchenDesigner";  // ✅ Importing your component

function App() {
  return (
    <div className="container">
      <h1 className="text-center mt-4">Welcome to Kitchen Designer!</h1>
      <KitchenDesigner />
    </div>
  );
}

export default App;
