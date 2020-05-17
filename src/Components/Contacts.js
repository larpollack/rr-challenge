import React, {Component} from "react";
import '../App.css'
import { Grid, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import  data  from "../dummy-data";
import styled from "styled-components";
import Icon from '@material-ui/core/Icon';
import ReplyAllIcon from '@material-ui/icons/ReplyAll';
import Sort from './Sort'

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

export default class Contacts extends Component {
  constructor(props) {
    super(props);
    this.toggleClass= this.toggleClass.bind(this);
    this.state = {
        isActive: false,
    };
}
toggleClass() {
    const currentState = this.state.isActive;
    this.setState({ isActive: !currentState });
} //need to update
render() {
  return (
    <div className="contact-wrapper" style={{ marginLeft: -250, padding: 80 }}>
      <Sort/>
      <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="flex-start"
      >
        {data.map((contact) => (
          <Grid item key={contact.name}>
            {contact.isActive ? <ActiveCard>  
              <CardActionArea onClick={this.state.toggleClass}>
              <StyledCardHeader
        avatar={
          <div>(
            {contact.status === 'Online' ? <OnIconActive>lens</OnIconActive> : <OffIconActive>lens</OffIconActive>}
            )  
          <StyledAvatar alt="avatarpic" src={contact.avatar}/></div>
        }
        action={
          <StyledIconButton aria-label="settings" style={{ backgroundColor: "transparent"}}>
            {contact.time}
          </StyledIconButton>
        }
        title={contact.name}
        subheader={<Typography component="p" style={{color:"#C1C2C8", fontSize: '14px'}}>
{contact.status}
        </Typography>}
      />
                <CardContent>
                  
                  <Typography component="p" >{contact.reply && <ReplyIcon>reply-all</ReplyIcon>}&nbsp;{contact.body}</Typography>
                </CardContent>
              </CardActionArea>
            </ActiveCard>
              : <StyledCard>
                <CardActionArea>
              <StyledCardHeader
        avatar={
          <div>(
            {contact.status === 'Online' ? <OnIcon>lens</OnIcon> : <OffIcon>lens</OffIcon>}
            )
          <StyledAvatar alt="avatarpic" src={contact.avatar}/></div>
        }
        action={
          <StyledIconButton aria-label="settings" style={{backgroundColor: "transparent"}}>
            {contact.time}
          </StyledIconButton>
        }
        title={contact.name}
        subheader={contact.status}
      />
                <CardContent>
                  
      <Typography component="p" >{contact.reply && <ReplyIcon/>}&nbsp;{contact.body}{contact.notifications && <Notif>{contact.notifications}</Notif>}</Typography>
                </CardContent>
              </CardActionArea>
              </StyledCard>}
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
}


