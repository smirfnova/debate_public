import React, { useEffect } from "react";
import './Topic.css'
import Collapsible from 'react-collapsible';

import axios from 'axios';
import { useState} from 'react';


export default function Topic() {
    const [state, setResolution] = useState({
        resolution: '',
    });

    let questions = <div> </div>
    if(state.resolution.length != '') {
        questions =  <Collapsible trigger="Questions? " transitionTime = {100}>

        <div className = "instructions">

        Why is the wording of my topic so funny? 
        Why is the topic skewed towards one side?
        <br/>
        <br/>
        Topics are randomly selected  from bills introduced in to Congress. Some will probably not be grammatically correct and some will be overly specific. 
        Therefore,  I recommend using these topics as inspiration to create your own topics, as opposed to taking these topics verbatim.
        Use your own discretion.
        Since I did not curate every bill, some of these topics may also not have reasonable ground for both sides.
        If the topic is not debateable, refresh the page to get a new topic.
       
        <br/>
        <br/>
        Want to have more options in selecting topics? Such as choosing topic areas and number of topics?
        Go to menu and choose the Advanced Topic Selector. 
        <br/>
        </div>

            
        </Collapsible>
    }


    //upon initial load and refresh of the page, make an api call to get a random topic
    useEffect(() => {
        axios.post('/query').then(response => 
            {
                console.log(response.request.response);
                const result = response.request.response;
                const temp_result = result.slice(2, -2);
                const values = JSON.parse(temp_result)
                const temp = values.string_field_0.replaceAll("|", ",");
                const index = temp.indexOf(', and for other purposes.')
                let res = temp;
                console.log(res);
                if(index != -1) {
                   res = temp.substring(0, index) + '.'
                }
                setResolution({...state, resolution: res});
                
              
            }).catch(function(error) {
                console.log(error);
            });

    }, [])


    return (
        <div className = "cont">
            <div className = "topic">
                {state.resolution}
            </div>

           {questions}


        </div>
         );
    }
    
