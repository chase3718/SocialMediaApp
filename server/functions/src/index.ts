import * as functions from 'firebase-functions';
import * as express from 'express';
import db from './service/db-service';

const app = express();
app.get('/', (req, res) => {
  db.getCollection('users').then((data) => {
    res.send(data);
  });
});

exports.app = functions.https.onRequest(app);
