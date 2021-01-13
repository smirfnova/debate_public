import React from "react";
import {Paper}  from '@material-ui/core';
import './About.css';
import axios from 'axios';

class About extends React.Component {
	constructor(props) {
		super(props);
	}
	
	

	
	render() {
		console.log("random print");
		return (
<div className = "container">
	<p><Paper variant="outlined" square className = "paper" elevation = {4}>
	<h1> ABOUT THIS PAGE </h1>
	<div className = "text">

	<h2> Motivations</h2>
		This is a quick little tool that can be used to get debate topics used for practice rounds. I strongly believe that
		debate topics serve an pedagogical function. The topics we debate inform the research students will do and thus, it is important
		for me to choose topics which is important for students to have education on. As a coach, however, I often struggled coming up with 
		debate topics for my students to practice with. A huge problem is that of "epistemic blindspots". In essence, we don't know what we don't know. 
		What occured was that because I have to know about a topic in order to give students a topic, I tend to give my students
		topics I am already familiar with. This cycle became reinforced as certain subjects were never debate on. 
		<br/>
		<br/>
		This lead to my interest trying to create a tool that can select topics from all sorts of different topic areas. 
		The idea is that this would help fill in for epistemic blindspots as well as providing
		a way to conveniently and quickly select topics. 

		<h2> Methodology </h2>
		I ran a webscraping script on govtrack.us to parse through every single bill and resolution
		that were introduced in the 116th Congress, which runs from 1/3/2019 to 1/3/2021. 

		I ultimately settled on using this as my dataset for a few reasons. 
		<br/>
		<p className = "tab">
		1. Government: Parli is largely centered around governmental policy and policy action, so bills and resolutions from Congress would be relevant to the goals of parli. 
		</p>
		<p className = "tab">
		2. Topic literature: As these bills are introduced in Congress, there should at least be some grounds for topic literature. 
		Additionally, looking at past topics used in tournaments can run the risk of topics being outdated. By using
		the 116th congress, and limiting it to strictly bills that have not been passed, most topics should not be outdated.
		</p>
		<p className = "tab"> 
		3. Convenience: the bill names are reasonably descriptive and parsing out the bill names to display as the resolution text can
		provide a reasonably worded topic.
		</p>
		<p className = "tab">	
		4. Subject areas: govinfo provides tags for associated topic areas for each bill and by scraping these tags, 
		I can create a dataset in which it allows for filtering by topic areas, to allow for more convenient usage. </p>

		<p className = "tab">		
		5. Debatebility:
			A debate can only occur when there is reasonable ground for both sides. To note is that a lot of the bills
			and resolutions in my dataset are not necessarily great in terms of ground; however, a great majority
			of them are(due to the political nature of Congress), so when randomly selecting for a topic, it is likely that the topic will be debateable.
		 </p>


		<h2> Moving forward </h2>
		This obviously is not a perfect solution to epistemological blindspot, as there are many issues beyond what is
		introduced in Congress which are relevant. Therefore, in the future, I hope to include ways of collecting data from 
		news articles from different news media outlet and think tanks to generate topics.
		<br/>
		<br/>
		Additionally, there could be further work done on improving the relevancy of topics and ensuring that the 
		topics have ground on both side. In the future, I will work on developing ways to better curate through the topics. 
		<br/>
		<br/>
		If you would like to have my original dataset of topics, containing some 14,000 different topics, feel free to 
		contact me at shirleych@gmail.com
		
		</div>
 	</Paper></p>

 	</div>
		);
	}

}
export default About;