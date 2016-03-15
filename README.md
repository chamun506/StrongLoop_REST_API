# StrongLoop_REST_API 

## Run API on localhost
```
$ git clone https://github.com/chamun506/StrongLoop_REST_API.git
$ cd StrongLoop_REST_API
$ npm install
$ node .
```

## How to execute the REST API 
- `http://localhost:3000/api/rest/hello` : Generate plain text result: Hello World from Java_SpringBoot
- `http://localhost:3000/api/rest/operate?i=7&j=7` : Generate JSON object result: {"result": "14", "imeplementation": "StrongLoop"}

## Creating a build archive (create a portable archive, a tar (.tgz) file)
$ cd StrongLoop_REST_API
$ slc build

## Running on IBM Bluemix
`cf push strongloopapi  -c “node server/server.js`

The REST API URL on Bleumix then becomes 
- http://strongloopapi.mybluemix.net/api/rest/hello
- http://strongloopapi.mybluemix.net/api/rest/operate?i=7&j=7

## Swagger API
Run `http://localhost:3000/explorer` 
or http://strongloopapi.mybluemix.net/explorer/ on bluemix

##Knowledge
https://docs.strongloop.com/display/public/LB/Create+a+simple+API
https://docs.strongloop.com/display/public/LB/Use+API+Explorer


