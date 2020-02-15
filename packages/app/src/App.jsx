import React from 'react';
import { GithubProfile } from '@monorepo-development/uikit';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GithubProfile username="ntnbrtnkv" />
        <p>
          Try to edit
          {' '}
          <code>packages/uikit/src/github-profile/index.js</code>
          {' '}
          and save.
        </p>
      </header>
    </div>
  );
}

export default App;
