import React from "react";
import DataFetcher from "./components/DataFetcher";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Employee Data (Fetched via Axios)</h1>
      <DataFetcher />
    </div>
  );
}

export default App;
