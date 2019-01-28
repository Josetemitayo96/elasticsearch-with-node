var elasticsearch = require ('elasticsearch');
var client = new elasticsearch.Client({
    hosts: ['http://localhost:9200'],
    function (err, resp){
        if (err) {
        console.log (err);
    } else {
        console.log(resp);
    }
}

});


module.exports = client;


