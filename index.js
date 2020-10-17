const faunadb = require('faunadb');
const {FAUNA_KEY_SECRET} = require('./config.js');
const {query: mainQuery,Client} = faunadb;

const client = new Client({
    secret: FAUNA_KEY_SECRET
})

client.query(mainQuery.Get(mainQuery.Ref(mainQuery.Collection('user'), '274985853347955207')))
  .then((result) => console.log(result))
  .catch((e) => console.log(e));