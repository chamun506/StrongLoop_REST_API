module.exports = function(Rest) {
  Rest.operate = function(i,j,cb) {
    cb(null, i + j, 'StrongLoop' );
  };
  Rest.hello = function(cb) {
    cb(null, 'StrongLoop' );
  };
  Rest.remoteMethod(
        'operate', 
        {
          accepts: [
		  {arg: 'i', type: 'number'},
		  {arg: 'j', type: 'number'}],
          returns: [{arg: 'result', type: 'number'},{arg: 'Implementation', type: 'string'}],
		  http: {path: '/operate', verb: 'post'}
		  
        }
    ); 
	Rest.remoteMethod(
        'hello', 
        {
        
          returns:{arg: 'Hello World from', type: 'string'},
		  http: {path: '/hello', verb: 'get'}
		  
        }
    ); 

};
