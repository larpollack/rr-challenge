import React from 'react';
import { storiesOf } from '@storybook/react';
import '../App.css'
import MiniDrawer from '../Components/MiniDrawer'

storiesOf('MiniDrawer')
  .add('with primary', () => <MiniDrawer/>)