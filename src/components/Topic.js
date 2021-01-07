import React, { useEffect } from "react";
import './Topic.css'
import Collapsible from 'react-collapsible';

import axios from 'axios';
import { useState} from 'react';


export default function Topic() {
    const [state, setResolution] = useState({
        resolution: '',
    });
    
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

            <Collapsible trigger="Questions? " transitionTime = {100}>

            <div className = "instructions">

            Why is the wording of my topic so funny? 
            Why is the topic skewed towards one side?
            <br/>
            <br/>
            Topics are randomly selected  from bills introduced in to Congress. A good majority of these topics
            have reasonable ground, but there are many others that are not. 
            I did not curate through every bill. If the topic is not debateable, refresh the page to get a new topic.
            I recommend using these topics as inspiration to create your own topics, as opposed to taking these topics verbatim.
            Some will probably not be grammatically correct and some will be overly specific. Use your own discretion.
            <br/>
            <br/>
            Want to have more options in selecting topics? Such as choosing topic areas and number of topics?
            Go to menu and choose the Advanced Topic Selector. 
            <br/>
                
            </div>
            </Collapsible>


        </div>
         );
    }
    
