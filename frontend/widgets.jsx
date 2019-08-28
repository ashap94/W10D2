import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Tab from './tabs';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const tabs = document.getElementById('tabs');
  const name = 'mike';
  ReactDOM.render(<Clock name={name}/>, root);
  ReactDOM.render(<Tab/>, tabs);
});


