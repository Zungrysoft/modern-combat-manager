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
  const [characters, setCharacters] = useState([]);
  const [settings, setSettings] = useState({});
  const [initiative, setInitiative] = useState([]);

  const renderPage = () => {
    switch (activeTab) {
      case 'settings':
        return <SettingsPage
          settings={settings}
        />;
      case 'combat':
        return <CombatPage
          initiative={initiative}
        />;
      default:
        return <SetupPage
          characters={characters}
          setCharacters={setCharacters}
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
