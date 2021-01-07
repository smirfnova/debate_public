import React from "react";
import HelpIcon from '@material-ui/icons/Help';
import './Topic.css'
import Collapsible from 'react-collapsible';

import axios from 'axios';

class Topic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            resolution: '',
        }
    }
    componentDidMount() {
			axios('/query').then(response => 
			{
                console.log(response.request.response);
                const result = response.request.response;
                const temp_result = result.slice(2, -2);
                const values = JSON.parse(temp_result)
                const res = values.string_field_0;
                this.setState({
                    ...this.state,
                    resolution: res,
                })
			}).catch(function(error) {
				console.log(error);
			});
	}
    render(){
        return (
            <div className = "cont">
                <div className = "topic">
                    {this.state.resolution}
                </div>
    
                <Collapsible className = "hi" trigger="Questions?">
    
                <div className = "instructions">
    
                Why is the wording of my topic so funny? 
                Why is the topic completely skewed towards one side?
                <br/>
                <br/>
                Topics are randomly selected  from bills introduced in to Congress. A good majority of these topics
                are fitting for parli debates with reasonable ground, but there are many others that are not. 
                I did not curate through every bill(as there are too many). If the topic is not debateable, refresh the page to get a new topic.
                You may  need to revise the wording of topics in order to make it better suit a parliamentary
                debate style topic. 
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
    }
export default Topic;