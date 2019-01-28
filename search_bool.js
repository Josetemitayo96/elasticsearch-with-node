
    var client = require('./connect.js');
    const search = function search(index, body) {
      return client.search({index: index, body: body});
    };
  
    const test = function test() {
      let body = {
        size: 20,
        from: 0,
        query: {
            bool:{
                must: [
                    {
                    query_string: {
                        query: '(authors.firstname:D* OR authors.lastname:H*) AND (title:excepteur)'
                      }
                    
                    }
                ],

                should:[
                    {
                        match:{
                            
                            query: '(abstract:dolore proident)'
                            
                                
                        }
                    }


                ],

                must_not:[
                    {
                        range:{
                            year:{
                                lte:2005,
                                gte:1997
                            }
                        }
                    }
                ]

            }
         
        }
      };
  
     
      console.log(`retrieving documents with a combined bool query (displaying ${body.size} items at a time)...`);
      search('library', body)
      .then(results => {
        console.log(`found ${results.hits.total} items in ${results.took}ms`);
        if (results.hits.total > 0) console.log(`returned article titles:`);
        results.hits.hits.forEach((hit, index) => console.log(`\t${body.from + ++index} - ${hit._source.title} (score: ${hit._score})`));
      })
      .catch(console.error);
    };
  
   

     
    
  
    test();
  
    