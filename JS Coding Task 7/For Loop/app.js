let games = ["football", "cricket", "hockey", "squash", "swimming"]
var i=0
//For Loop
for (var i=0;i<games.length;i++){
    if ("cricket" == games[i]) {
        console.log("Cricket Exists!")
    } else {
        console.log("Does not Exist")
    }
}

//ForEach Loop (syntax: for (type variableName : arrayName) {)

    
games.forEach(myFunction => {
    
    function myFunction() {
        if ("cricket" == games[i]) {
        console.log("Cricket Exists!")
        } else {
        console.log("Does not Exist")
        }
    }
});

//forOf Loop      Syntax: for (const element of array name) 

for (let i of games) {
    if ("cricket" == games[i]) {
    console.log("Cricket Exists!")
    } else {
    console.log("Does not Exist")
    }
}
