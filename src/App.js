import React, { useState } from 'react';
import './App.css';

import SetupPage from './pages/SetupPage';
import CombatPage from './pages/CombatPage';
import SettingsPage from './pages/SettingsPage';

const pages = {
  setup: {tabName: 'Setup'},
  combat: {tabName: 'Combat'},
  settings: {tabName: 'Settings'},
}



function App() {
  const [activeTab, setActiveTab] = useState('setup');
  const [characters, setCharacters] = useState(loadCharacters());
  const [settings, setSettings] = useState({});
  const [initiative, setInitiative] = useState([]);
  const [timer, setTimer] = useState({ timeMs: 0, active: false });

  function loadCharacters() {
    return JSON.parse(localStorage.getItem("characters")) || [];
  }

  function saveCharacters(val) {
    localStorage.setItem("characters", JSON.stringify(val));
    setCharacters(val);
  }

  const renderPage = () => {
    switch (activeTab) {
      case 'settings':
        return <SettingsPage
          settings={settings}
        />;
      case 'combat':
        return <CombatPage
          initiative={initiative}
          characters={characters}
          timer={timer}
          setInitiative={setInitiative}
          setTimer={setTimer}
        />;
      default:
        return <SetupPage
          characters={characters}
          setCharacters={saveCharacters}
        />;
    }
  };

  return (
    <div className="app">
      <div className="tabs">
        {Object.keys(pages).map(e => 
          <button className={activeTab === e ? 'active' : ''} onClick={() => setActiveTab(e)}>{pages[e].tabName}</button>
        )}
      </div>
      <div className="content">
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
