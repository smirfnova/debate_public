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
  keyFilename: 'key.json',
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
    console.log("typeof", typeof req.body);
    var filter = '';
    console.log(req.body, "hi")
    if(req.body.topic_areas !== undefined) {
      if(req.body.topic_areas[0] !== null && req.body.topic_areas.length !== 0)  {
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
    
    let num = 1;
    if(req.body.num !== undefined) {
      console.log("there is a body num")
      num = req.body.num;
    }
    console.log(num)

    const sqlQuery = `SELECT *,
    FROM \`debate-topics.debateopics.topics_1\`
    ${filter}
    ORDER BY RAND()
    LIMIT ${num}`;

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
app.listen(process.env.PORT || 3000);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'));
  app.get('*', (req, res) => {
    res.sendFile(path.join('build', 'index.html'));
  });
}