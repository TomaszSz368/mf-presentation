/**
 * This is the entry point for the root application using single-spa-react.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';

import { RootApp } from '~src/apps/RootApp';

export const { bootstrap, mount, unmount, update } = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: RootApp,
});
