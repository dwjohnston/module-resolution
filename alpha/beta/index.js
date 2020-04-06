const babel = require("@babel/core"); 
const lodash = require("lodash"); 
const moment = require("moment"); 

try {
    const doesnotexist = require('doesnotexist'); 

}
catch(err) {
    console.info("Caught error trying to require module that does not exist");
}


console.assert(babel !== undefined); 
console.assert(lodash !== undefined); 
console.assert(moment !== undefined); 

console.info("completed successfully"); 