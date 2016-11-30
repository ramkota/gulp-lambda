var index = require('./index');
var e = require('./event.json');
var c = require('./context.json');

index.handler(e,c,function(error, results){
    console.log ("error:  " + JSON.stringify(error));
    console.log("result:" + JSON.stringify(results));
});