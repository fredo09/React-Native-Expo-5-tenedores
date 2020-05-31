import React from 'react';
import { YellowBox } from 'react-native';
import { NavigationStacks }  from './app/navigation/navigation';
import { firebaseConfigApp } from './app/utils/Firebase';

YellowBox.ignoreWarnings(["Setting a timer"]);

export default function App() {
  return (
    <NavigationStacks />
  );
}