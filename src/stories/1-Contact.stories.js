import React from 'react';
import { storiesOf } from '@storybook/react';
import '../App.css'
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import styled from "styled-components";
import Icon from '@material-ui/core/Icon';
import ReplyAllIcon from '@material-ui/icons/ReplyAll';
import Contacts from '../Components/Contacts';
import { action } from '@storybook/addon-actions';

const StyledAvatar = styled(Avatar)`
   {
    width: 130px;
    height: 100px;
  }
  
`;

const Notif = styled(Avatar)`
   {
    width: 26px;
    height: 26px;
    background-color: #F85252;
    position: absolute;
    left: 333px;
    top: 88px;
    font-size: 14px;
  }
  
`;

const StyledCardHeader = styled(CardHeader)`
{
  padding: 8px;
}
    & > .MuiCardHeader-avatar {
      margin: -18px -15px -50px -25px;
    }
  
`;

const StyledCard = styled(Card)`
   {
    width: 387px;
    height: 143px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
  }
  & > .MuiPaper-elevation1 {
    box-shadow: 1px 0 8px -1px rgba(0,0,0,0.2), 0px 1px 0.5px -1px rgba(0,0,0,0.14), 0px 3px 0px 0px rgba(0,0,0,0.12);
  }
  
`;
const ActiveCard = styled(Card)`
   {
    width: 387px;
    height: 143px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    background-color: #292F4C;
    border-left: 4px solid #F85252;
    color: #fff;
  }
  
`;

const StyledIconButton = styled(IconButton)`
   {
    font-size:18px;
    margin-top: -2px;
    transition: none;
    margin-left: -10px;
    color: #C1C2C8;
  }
  
`;

const OnIcon = styled(Icon)`
   {
    font-size: 14px;
    -webkit-text-stroke-width: 3px; 
    -webkit-text-stroke-color: white; 
    position: absolute;
    z-index: 100;
    left: 24px;
    top: 22px;
    color: #34D859;
  }
  
`;
const OnIconActive = styled(Icon)`
   {
    font-size: 14px;
    -webkit-text-stroke-width: 3px; 
    -webkit-text-stroke-color: #292F4C; 
    position: absolute;
    z-index: 100;
    left: 24px;
    top: 22px;
    color: #34D859;
  }
  
`;

const OffIcon = styled(Icon)`
   {
    font-size: 14px;
    -webkit-text-stroke-width: 3px; 
    -webkit-text-stroke-color: white; 
    position: absolute;
    z-index: 100;
    left: 24px;
    top: 22px;
    color: #C1C2C8;
    
  }
  
`;
const OffIconActive = styled(Icon)`
   {
    font-size: 14px;
    -webkit-text-stroke-width: 3px; 
    -webkit-text-stroke-color: #292F4C; 
    position: absolute;
    z-index: 100;
    left: 24px;
    top: 22px;
    color: #C1C2C8;
    
  }
  
`;

const ReplyIcon = styled(ReplyAllIcon)`
   {
    font-size: 20px;
    -moz-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
    filter: FlipH;
    -ms-filter: "FlipH";
    color: #C1C2C8;
    margin-bottom: -5px;
    
  }
  
`;

storiesOf('Contacts')
  .add('with primary', () => <Contacts/>)
  .add('when active', () => <Contacts
    label="Active"
    onClick={action('click')}
    style={{ backgroundColor: '#292F4C',
      borderLeft: '4px solid #F85252',
      color: '#fff' }}
  />)