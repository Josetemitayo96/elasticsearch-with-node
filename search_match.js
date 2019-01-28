var client = require('./connect.js');


const search = function search (index, body){
return client.search({index:index, body:body});
};
    const test = function test(){
        let body={
            size:20,
            from:0,
            query:{
                match:{
                    title:{
                    
                        query:'consequat',
                        minimum_should_match:3,
                        fuzziness:1
                    }
                    
                }
            }

        };

        console.log('displaying all documents that match : '+ body.query.match.title+ + body.size + ' at a time');
        search ('library', body)
        .then (results=> {
            console.log ('found : ' + results.hits.total + ' in ' +results.took +'ms');
            console.log ('returned articles titles:');
            results.hits.hits.forEach((hit, index) => console.log(`\t${body.from + ++index} - ${hit._source.title} (score: ${hit._score})`));
    })
    .catch(console.error);

            


     
    }
test();