import React from "react";
import Homepage from "./_components/pages/_home/_home";

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
          <Homepage />
      </BrowserRouter>
  );
}

export default App;