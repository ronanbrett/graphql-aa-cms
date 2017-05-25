import * as express from 'express';
import * as mongoose from 'mongoose';


import { initModels } from './models/';

const app = express();
mongoose.connect("mongodb://mongo:27017");

initModels();

app.get('/', function (req, res) {  
  initModels();
  res.send("Hello World");
});
app.listen(3000, function(){
  console.log('Example app listening on port 3000!');
});
