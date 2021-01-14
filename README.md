# Debate Topics Generator

This is a tool which can generate debate topics to be used to practice for debate rounds(parliamentary debate style). I webscraped govtrack.us, in which I parsed congressional bills to create a dataset of topics. This dataset is then stored on Google cloud. Through making API calls to make an SQL query with BigQuery, Users can then receive a randomly selected topic from this dataset. 
To view the deployed app, visit this link: https://debatetopics.herokuapp.com/#/.

I implement two versions of a topic generator, a simple and an advanced topic generator. In the simple version, the user gets a randomly selected topic from the entire dataset of topics. In the advanced version, the user can specify criteria such as number of topics and topic areas, such that a topic is randomly selected based on these critera. 

The webscraping script can be found on db8multi.py. The dataset I generated is uploaded to Google Cloud and queried through BigQuery. If you would like access to this dataset, feel free to contact me. 
