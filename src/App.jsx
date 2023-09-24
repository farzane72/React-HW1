import { useState } from "react";
import Contacs from "./components/contacs/Contacs";
import SignUp from "./forms/signUp";

function App() {
  // Cyan
  // Teal
  return (
    <div className="bg-cyan-200 min-h-screen flex  justify-center  pt-24">
      <SignUp />
      {/* <Contacs /> */}
    </div>
  );
}

export default App;
