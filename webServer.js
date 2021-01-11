const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));
//const publicPath = path.join(__dirname, '..', 'src');
//app.use(express.static(publicPath));
app.use(express.json())
var cors = require('cors')
app.use(cors())


app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

const {BigQuery} = require('@google-cloud/bigquery');

const options = {
  keyFilename: '/Users/ladyjane/Downloads/debate-topics-d0129d3d9dd2.json',
  projectId: 'debate-topics'
}
const bigquery = new BigQuery(options);


app.get('/ping', function (req, res) {
  
 return res.send('pong');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.post('/query', function(req, res) {
  console.log("in server")
  async function querydb() {
    console.log("this is the body", req.body.topic_areas);
    var filter = '';
    if(req.body.topic_areas !== undefined) {
      if(req.body.topic_areas.length != 0)  {
        console.log("hi");
        filter = "WHERE ";
        for(i = 0; i < req.body.topic_areas.length; i++) {
          let add = "string_field_2 = " + '"' + req.body.topic_areas[i] + '"';
          console.log(add);
          filter += add;
          if(i != req.body.topic_areas.length - 1) {
            filter += "\nOR "
          }
        }
      } 
    }
  
    console.log(filter)

    const sqlQuery = `SELECT *,
    FROM \`debate-topics.debateopics.topics_1\`
    ${filter}
    ORDER BY RAND()
    LIMIT 1`;

  const options = {
    query: sqlQuery,
    location: 'US',
  };
  const [job] = await bigquery.createQueryJob(options);
    console.log(`Job ${job.id} started.`);

    // Wait for the query to finish
    const rows = await job.getQueryResults();

    res.status(200).send(rows);
} querydb();
});
app.listen(process.env.PORT || 8080);