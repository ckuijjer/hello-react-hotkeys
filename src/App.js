import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { HotKeys } from 'react-hotkeys';

const Box = ({ color, children }) => (
  <div
    style={{
      padding: 48,
      backgroundColor: color,
    }}
  >
    {children}
  </div>
);

const keyMap = {
  help: 'f1',
};

class App extends Component {
  render() {
    return (
      <div>
        <HotKeys
          keyMap={keyMap}
          handlers={{ help: () => console.log('help root') }}
        >
          Select an element and press F1
          <Box color="#f9f" />
          <Box color="#99f">
            <HotKeys handlers={{ help: () => console.log('help pink') }}>
              <Box color="#f99" />
            </HotKeys>
            <HotKeys handlers={{ help: () => console.log('help green') }}>
              <Box color="#9f9" />
            </HotKeys>
          </Box>
        </HotKeys>
      </div>
    );
  }
}

export default App;
