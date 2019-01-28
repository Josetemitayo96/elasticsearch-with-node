var fs = require('fs');
var client = require('./connect.js');
const articles1 = fs.readFileSync('data.json');
      const articles2 = JSON.parse(articles1);

  
  
    const bulkIndex = function bulkIndex(index, type, data) {
      let bulkBody = [];
  
      data.forEach(item => {
        bulkBody.push({
          index: {
            _index: index,
            _type: type,
            _id: item.id
          }
        });
  
        bulkBody.push(item);
      });
  
      client.bulk({body: bulkBody});
      
    };
  
    
    
      
      console.log(`${articles2.length} items parsed from data file`);
      bulkIndex('library', 'article', articles2);
    
  

  
    