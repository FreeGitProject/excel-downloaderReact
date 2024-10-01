import React from 'react';
import './App.css';
import DownloadExcel from './DownloadExcel'; // Import the download component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Excel File Downloader</h1>
        <DownloadExcel />  {/* Render the component */}
      </header>
    </div>
  );
}

export default App;
