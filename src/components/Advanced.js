import React from "react";
import './Advanced.css';
import Collapsible from 'react-collapsible';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import {
 Typography
} from '@material-ui/core';
import { createMuiTheme, withStyles, ThemeProvider } from '@material-ui/core/styles';


import axios from 'axios';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));
 
const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Cambria', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', 'Arial', 'sans-serif',
    ].join(','),
  }
});

export default function About() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);


  const handleChange1 = (event) => {
    setAge(event.target.value);
    setState({...state, num: event.target.value});

  };

  const handleClose = (event) => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

    const [state, setState] = React.useState({
        checked_1: false,
        checked_2: false,
        checked_3: false,
        checked_4: false,
        checked_5: false,
        checked_6: false,
        checked_7: false,
        checked_8: false,
        checked_9: false,
        checked_10: false,
        checked_11: false,
        checked_12: false,
        checked_13: false,
        checked_14: false,
        checked_15: false,
        checked_16: false, 
        checked_17: false, 
        checked_18: false,
        checked_19: false,
        checked_20: false,
        checked_21: false,
        checked_22: false,
        checked_23: false,
        checked_24: false,
        checked_25: false,
        checked_26: false,
        checked_27: false,
        checked_28: false,
        checked_29: false,
        checked_30: false,
        checked_31: false,
        checked_32: false,
        checked_33: false,
        resolution: '',
        link: '',
        num: 1,
      });
    

      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };

      let topics = ["Agriculture and Food", "Animals", "Armed Forces and National Security", "Arts, Culture, Religion", 
      "Civil Rights and Liberties, Minority Issues", "Commerce", "Crime and Law Enforcement", "Economics and Public Finance", "Education", "Emergency Management", "Energy",
      "Environmental Protection", "Families", "Finance and Financial Sector", "Foreign Trade and International Finance", "Geographic Areas, Entities, and Committees",
      "Government Operations and Politics", "Health", "Housing and Community Devlepment", "Immigration", "International Affairs", "Labor and Employment", 
      "Law", "Native Americans", "Private Legislation", "Public Lands and Natural Resources", " Science, Technology, Communications", "Social Sciences and History", "Social Welfare",
      "Sports and Recreation", "Traxation", "Transportation and Public Works", "Water Resources Development"]
      
      const handleClick = (event) => {
        let topics = ["Agriculture and Food", "Animals", "Armed Forces and National Security", "Arts, Culture, Religion", 
        "Civil Rights and Liberties, Minority Issues", "Commerce", "Crime and Law Enforcement", "Economics and Public Finance", "Education", "Emergency Management", "Energy",
        "Environmental Protection", "Families", "Finance and Financial Sector", "Foreign Trade and International Finance", "Geographic Areas, Entities, and Committees",
        "Government Operations and Politics", "Health", "Housing and Community Devlepment", "Immigration", "International Affairs", "Labor and Employment", 
        "Law", "Native Americans", "Private Legislation", "Public Lands and Natural Resources", " Science, Technology, Communications", "Social Sciences and History", "Social Welfare",
        "Sports and Recreation", "Traxation", "Transportation and Public Works", "Water Resources Development"]
        
        let selected = [];
        let counter = 0;
        for(const property in state) {
          if(state[property] == true) {
            selected.push(topics[counter]);
          }
          counter++;
        }
        let params = {
          topic_areas: selected,
          num: state.num
        }
        console.log(state.num)

        console.log(selected);
        axios.post('/query', params).then(response => {
          const result = response.request.response;
          const temp_result = result.slice(2, -2);
          console.log(result)
          const values = JSON.parse(temp_result)
          const temp = values.string_field_0.replaceAll("|", ",");
          const index = temp.indexOf(', and for other purposes.')
          let res = temp;
          console.log(res);
          if(index != -1) {
             res = temp.substring(0, index) + '.'
          }
          const found_link = values.string_field_1;
          setState({
              ...state, resolution: res, link: found_link});
        }).catch(function(error) {
          console.log(error);
        });
      };
      let area_1 = topics.splice(0, 11);
      let states_1 = [state.checked_1, state.checked_2, state.checked_3, state.checked_4, state.checked_5, state.checked_6, 
        state.checked_7, state.checked_8, state.checked_9, state.checked_10, state.checked_11]
        let names_1 = ["checked_1", "checked_2", "checked_3", "checked_4", "checked_5", "checked_6", "checked_7", "checked_8", "checked_9", "checked_10", "checked_11"]
      let col_1 = []
      for(var i = 0; i < 11; i++) {
        col_1.push (
            <FormControlLabel
            control={<Checkbox checked={states_1[i]} size = "small" onChange={handleChange} name={names_1[i]} color = "primary" />}
            label={<Typography variant = "body2">{area_1[i]}</Typography>}
        />)
      }
      
      let area_2 = topics.splice(0, 11);
      let states_2 = [state.checked_12, state.checked_13, state.checked_14, state.checked_15, state.checked_16, state.checked_17, 
        state.checked_18, state.checked_19, state.checked_20, state.checked_21, state.checked_22]
        let names_2 = ["checked_12", "checked_13", "checked_14", "checked_15", "checked_16", "checked_17", "checked_18", "checked_19", "checked_20", "checked_21", "checked_22"]
      let col_2 = []
      for(var i = 0; i < 11; i++) {
        col_2.push (
            <FormControlLabel
            control={<Checkbox checked={states_2[i]} size = "small" onChange={handleChange} name={names_2[i]} color = "primary" />}
            label={<Typography variant = "body2">{area_2[i]}</Typography>}
        />)
      }

      let area_3 = topics.splice(0, 11);
      let states_3 = [state.checked_23, state.checked_24, state.checked_25, state.checked_26, state.checked_27, state.checked_28,
        state.checked_29, state.checked_30, state.checked_31, state.checked_32, state.checked_33]
        let names_3 = ["checked_23", "checked_24", "checked_25", "checked_26", "checked_27", "checked_28", "checked_29", "checked_30", "checked_31", "checked_32", "checked_33"]
      let col_3 = []
      for(var i = 0; i < 11; i++) {
        col_3.push (
            <FormControlLabel
            control={<Checkbox checked={states_3[i]} size = "small" onChange={handleChange} name={names_3[i]} color = "primary" />}
            label={<Typography variant = "body2">{area_3[i]}</Typography>}
        />)
      }
      
      let link_text = ''
      if(state.resolution != '') {
          link_text =  <div>
            Visit <a href = {state.link}>{state.link} </a> to see the entire bill text.
            </div>

      }

    return (
      <ThemeProvider theme={theme}>

      <div className = "select">
          <Collapsible trigger= "Select Topic Area +" transitionTime = {100}> 
              <p className = "header">Choose the topic area(s) you would like a resolution to be randomly chosen from. If no topics are chosen, by default,
                      a resolution will be selected from all possible topic areas. 
                    
                </p>
              <div className = "choices">
              <FormGroup column className = "col">
                  {col_1}
              </FormGroup>
              <FormGroup column className = "mid">
                  {col_2}
              </FormGroup>
              <FormGroup column className = "right">
                  {col_3}
              </FormGroup>
              <p className = "note">
                    *Note that filters applied act as a union relationship, as opposed to intersectional. For example, if Health and Energy topic filter is applied, topics will 
                    be randomly from topics that are either Health related or Energy related, as opposed to being Health AND energy related.
                </p>
             
                </div>
              <div>
              <div>
                <p>
                Select number of topics to be generated
                </p>
        <FormControl className={classes.formControl}>
        <InputLabel      id="demo-controlled-open-select-label">Number</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onChange={handleChange1} 
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={10}>10</MenuItem>

        </Select>
      </FormControl>
      <p className = "note"> *if no number of topics is selected, by default one topic will be generated</p>

    </div>
              </div>
     
           </Collapsible>
      <div className = "center"> 
        <button className = "button" onClick = {handleClick}> Click here to get a topic</button>

      </div>
        <div className = "resolution"> 
        {state.resolution}
        <div className = "link">
        {link_text}
        </div>
        </div>

        

        </div>
        </ThemeProvider>
    );
}