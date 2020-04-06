This just demonstrates that node's module resolution will resolve from their parent's node_modules folder if it doesn't exist in their own. 

See more details here: 

https://docs.npmjs.com/configuring-npm/folders.html#cycles-conflicts-and-folder-parsimony

## commands ran to make this: 

```
npm init
npm i @babel/core
mkdir alpha
cd alpha
npm init
npm i lodash
mkdir beta
cd beta
npm init
npm i moment
touch index.js
# fill in index.js
node index.js
```


