## Running Locally

0. install node and npm
1. run "sudo npm install" command to install external modules locally
2. run "node index.js" to run the app
3. enter localhost:5000 on the web url



## Coding Standards

#### github
1. create commit per one logical change

2. please label each commit messages with followings (http://udacity.github.io/git-styleguide/)
FEAT: new feature
FIX: bugfix
REFACTOR: code refactoring (no functional change)
STYLE: formatting the code (no functional change)
DOCS: changes to documentation (no functional change)
CHORE: updating configurations & build tasks & etc (no production code change)


## Coding Style Guidelines

#### naming convention

1. use camel casing for variables and function names (eg. getElementById)
(https://en.wikipedia.org/wiki/Naming_convention_(programming) javascript section)

#### spaces and braces

1. Curly braces after all functions should be seperated by space, and should start on the same line.
```javascript
function() {
  //code
}
```
instead of
```javascript
function(){
  //code
}
function()
{
  //code
}
```

2. length of every line should not exceed 80 characters. seperate code into different line
```javascript
{
  "status": "abcd",  
  "result": null  
};
```
instead of
```javascript
{
  "status": "abcd",  "result": null  
};
```

3. all tabs must be in a length of 2


#### etc

1. enclose any string expression with double quotes, instead of single quotes
