var fs = require('fs');
var readline = require('readline');

var rdObject = readline.createInterface({
    input: fs.createReadStream('./ProcessData.txt'),
    output: process.stdout,
    console: false
});

var tempObjectList = [];

var baseObject = {
    "name": "SDProcess",
    "comment": "Software Development Process",
    'child': []
};

var tempObjectIndex = 0;

var currentParent = baseObject;
var lastChild = baseObject;

rdObject.on('line', function (line) {
    var dataList = line.split("|");
    for (var i = 0; i < dataList.length - 3; ++i) {
        if ("" == dataList[i]) {
            continue;
        }

        var newObject = {
            "name": dataList[i],
            "comment": dataList[4],
            'child': []
        };

        if (tempObjectIndex < i) {
            //push the current parent on the stack
            tempObjectList[tempObjectIndex] = currentParent;
            tempObjectIndex = i;

            currentParent = lastChild;

        } else if (i < tempObjectIndex) {
            tempObjectIndex = i;
            currentParent = tempObjectList[tempObjectIndex];
        } 

        currentParent.child.push(newObject);
        lastChild = newObject;
    }
});

rdObject.on('close', function() {
    console.log('goodbye!');
    let outputJson = JSON.stringify(tempObjectList);
    fs.writeFileSync("abc.json", outputJson);
    
});