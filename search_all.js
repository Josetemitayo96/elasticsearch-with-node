var client = require('./connect.js');


const search = function search (index, body){
return client.search({index:index, body:body});
};
    const test = function test(){
       let body = {
           size:20,
           from:0,
           query: {
           match_all:{}
           }
       };

       console.log('displaying all documents' + body.size + 'at a time');
       search ('library', body)
       .then (results=> {
           console.log ('found' + results.hits.total + 'in' +results.took );
           console.log ('returned articles titles:');
           results.hits.hits.forEach((hit, index) => console.log(`${body.from + ++index}  ${hit._source.title}`));
       }).catch(console.error);
       
    }
    test();

    