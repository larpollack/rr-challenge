import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import '../App.css'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import styled from "styled-components";
import AddCircleIcon from '@material-ui/icons/AddCircle';

const StyledSelect = styled(Select)`
  {
    color: #000;
  }
  
  
`;

const StyledCircle = styled(AddCircleIcon)`
  {
    color: #F85252;
    font-size: 35px;
    margin-bottom: -12px;
    margin-left: 5px;
  }
  
  
`;
const StyledForm = styled(FormControl)`
  {
    color: #000;
  }
  & > .MuiInput-underline:before {
    border-bottom: none;
  }

  & > .MuiFormLabel-root {
    color: #000;
    border-bottom: none;
  }
  
`;

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    verticalAlign: 'baseline',
    color: '#000',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Sort() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    latest: '',
    name: 'name',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div>
      <div className="sort-container">

      <div className="sort">Sort by:

      <StyledForm className={classes.formControl}>
        <InputLabel htmlFor="latest">Latest First</InputLabel>
        <StyledSelect
          native
          value={state.latest}
          onChange={handleChange}
          inputProps={{
            name: 'latest',
            id: 'latest',
          }}
          >
          <option aria-label="None" value="" />
          <option value='latest'>Latest First</option>
        </StyledSelect>
      </StyledForm>
      <span className="sort add">Add New</span>
      <span><StyledCircle/></span>
          </div>
      </div>


    </div>
  );
}