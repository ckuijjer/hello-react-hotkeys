import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HotKeys from 'react-hotkeys';

const Box = ({ color, children }) => (
  <div
    style={{
      padding: 48,
      color,
    }}
  >
    {children}
  </div>
);

class App extends Component {
  render() {
    return (
      <div>
        <HotKeys handlers={{ up: () => console.log('outer up') }} focused />
        <Box color="#f99">
          <HotKeys handlers={{ up: () => console.log('f99 up') }} />
        </Box>
        <Box color="#9f9">
          <HotKeys handlers={{ up: () => console.log('9f9 up') }} />
        </Box>
      </div>
    );
  }
}

export default App;
