import React from "react";
import "./App.scss";

function App() {
  return (
    <div className="appContainer vh-100 d-flex">
      <div className="container mt-3 mb-3 appWrapper">
        <div className="row h-100">
          <div className="col-md-1 h-100 border firstCol">
            <div className="containe">
              <div className="row border logoRow">1</div>
              <div className="row border menuRow">1</div>
              <div className="row border photoRow">1</div>
            </div>
          </div>
          <div className="col-md-3 h-100 border secondCol">
            <div className="row border searchRow">1</div>
            <div className="row border convRow">1</div>
            <div className="row border selectRow">1</div>
            <div className="row border groupsRow">1</div>
          </div>
          <div className="col-md-8 border">3</div>
        </div>
      </div>
    </div>
  );
}

export default App;
