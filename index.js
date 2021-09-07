import express from 'express';
import fetch from "node-fetch";
import cors from 'cors'
var app = express();

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

var accessToken = '';
app.get('/', function (req, res) {
   res.send('Hello World');
})

app.get('/api/client',cors(corsOptions),function(req, res) {
  main()
  const allClients = async () => {
  const raw = await fetch("https://assets.nectarit.com/api/graphql", {
    "headers": {
      "accept": "*/*",
      "accept-language": "en-US,en;q=0.9,ta;q=0.8,ml;q=0.7",
      "content-type": "application/json",
      // "csrftoken": "kt8ahnmr2fa9l3c82xx",
      "sec-ch-ua": "\"Chromium\";v=\"92\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"92\"",
      "sec-ch-ua-mobile": "?0",
      "sec-fetch-dest": "empty",
      // "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "cookie": "accessToken="+accessToken
    },
    "referrer": "https://assets.nectarit.com/asset/list",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": "{\"operationName\":\"findAllClients\",\"variables\":{\"domain\":\"nectarit\",\"strict\":true,\"loop\":true},\"query\":\"query findAllClients($domain: String!, $type: String, $loop: Boolean, $strict: Boolean) {\\n  findAllClients(domain: $domain, type: $type, loop: $loop, strict: $strict)\\n}\\n\"}",
    "method": "POST",
    // "mode": "cors"
  });
  const data = await raw.json();
  // console.log(data) 
  res.send(data.data.findAllClients.map(item=>item.data.clientName))
  }
  allClients()
})

app.get('/api/subcommunity',cors(corsOptions), function (req, res) {
  // res.send('Hello World'+accessToken);
  const allSubCommunity = async () => {
  const raw = await fetch("https://assets.nectarit.com/api/graphql", {
    "headers": {
      "accept": "*/*",
      "accept-language": "en-US,en;q=0.9,ta;q=0.8,ml;q=0.7",
      "content-type": "application/json",
      "csrftoken": "kt8ahnmr2fa9l3c82xx",
      "sec-ch-ua": "\"Chromium\";v=\"92\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"92\"",
      "sec-ch-ua-mobile": "?0",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "cookie": "csrfToken=kt8ahnmr2fa9l3c82xx; accessToken="+accessToken
    },
    "referrer": "https://assets.nectarit.com/asset/list",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": "{\"operationName\":\"findAllSubCommunities\",\"variables\":{\"domain\":\"nectarit\"},\"query\":\"query findAllSubCommunities($domain: String!) {\\n  findAllSubCommunities(domain: $domain) {\\n    type\\n    data\\n  }\\n}\\n\"}",
    "method": "POST",
    "mode": "cors"
  });
  const data = await raw.json();
  // console.log(data) 
  res.send(data.data.findAllSubCommunities.map(item=>item.data.name))
  }
  allSubCommunity()
})

app.get('/api/community',cors(corsOptions), function (req, res) {
  // res.send('Hello World'+accessToken);
  const allCommunity = async () => {
  const raw = await fetch("https://assets.nectarit.com/api/graphql", {
    "headers": {
      "accept": "*/*",
      "accept-language": "en-US,en;q=0.9,ta;q=0.8,ml;q=0.7",
      "content-type": "application/json",
      "csrftoken": "kt8ahnmr2fa9l3c82xx",
      "sec-ch-ua": "\"Chromium\";v=\"92\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"92\"",
      "sec-ch-ua-mobile": "?0",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "cookie": "csrfToken=kt8ahnmr2fa9l3c82xx; accessToken="+accessToken
    },
    "referrer": "https://assets.nectarit.com/asset/list",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": "{\"operationName\":\"listAllCommunities\",\"variables\":{\"domain\":\"nectarit\"},\"query\":\"query listAllCommunities($domain: String!, $parentFlag: Boolean) {\\n  listAllCommunities(domain: $domain, parentFlag: $parentFlag) {\\n    type\\n    data\\n  }\\n}\\n\"}",
    "method": "POST",
    "mode": "cors"
  });
  const data = await raw.json();
  // console.log(data) 
  res.send(data.data.listAllCommunities.map(item=>item.data.clientId))
  }
  allCommunity()
})

app.get('/api/site',cors(corsOptions), function (req, res) {
  // res.send('Hello World'+accessToken);
  const allbuildings = async () => {
  const raw = await fetch("https://assets.nectarit.com/api/graphql", {
    "headers": {
      "accept": "*/*",
      "accept-language": "en-US,en;q=0.9,ta;q=0.8,ml;q=0.7",
      "content-type": "application/json",
      "csrftoken": "kt8ahnmr2fa9l3c82xx",
      "sec-ch-ua": "\"Chromium\";v=\"92\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"92\"",
      "sec-ch-ua-mobile": "?0",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "cookie": "csrfToken=kt8ahnmr2fa9l3c82xx; accessToken="+accessToken
    },
    "referrer": "https://assets.nectarit.com/asset/list",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": "{\"operationName\":\"findAllBuildings\",\"variables\":{\"domain\":\"nectarit\"},\"query\":\"query findAllBuildings($domain: String!, $subCommunity: Entity, $type: String) {\\n  findAllBuildings(domain: $domain, subCommunity: $subCommunity, type: $type) {\\n    type\\n    data\\n  }\\n}\\n\"}",
    "method": "POST",
    "mode": "cors"
  });
  const data = await raw.json();
  console.log(data) 
  res.send(data.data.findAllBuildings.map(item=> ({name:item.data.name,ownerClientId:item.data.ownerClientId,ownerName:item.data.ownerName}) ))
  }
  allbuildings()
})


const main = async () => {
  const raw = await fetch("https://assets.nectarit.com/api/graphql", {
    headers: {
      accept: "/",
      "accept-language": "en-US,en;q=0.9,ml;q=0.8",
      "content-type": "application/json",
    //   csrftoken: "kt8n05cuymg0aulv06e",
      "sec-ch-ua":
        '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
      "sec-ch-ua-mobile": "?0",
      "sec-fetch-dest": "empty",
    //   "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
    //   cookie:
    //     "csrfToken=kt8n05cuymg0aulv06e; accessToken=a650e3fd-e02d-3377-aaf6-13f1b39dee8e",
    },
    referrer: "https://assets.nectarit.com/login",
    referrerPolicy: "strict-origin-when-cross-origin",
    body: '{"operationName":"login","variables":{"credentials":{"userName":"riyas@nectarit","password":"Welcome@123","scope":"kocttzty9g4wde6m7v"}},"query":"query login($credentials: JSON, $isDevMode: Boolean) {\\n  login(credentials: $credentials, isDevMode: $isDevMode)\\n}\\n"}',
    method: "POST",
    // mode: "cors",
  });
  const data = await raw.json();
  accessToken = data.data.login.accessToken
  console.log({accessToken:data.data.login.accessToken,refreshToken:data.data.login.refreshToken});
  // return JSON.stringify(data)
};





const port = process.env.PORT || 3000
var server = app.listen(port, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})