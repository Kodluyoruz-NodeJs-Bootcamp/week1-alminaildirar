function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

const que = shuffle([["q1","Var"],["q2","Let"],["q3","Const"],
                 ["q4","Promise"],["q5","Callback"], ["q6","Hoisting"]])


 var questionsDOM =document.querySelector('.questions')
  que.forEach(item => {
     var li = document.createElement("li");
     li.id = item[0]
     li.draggable = true
     li.textContent= item[1]
     questionsDOM.appendChild(li)
 })

const ans = shuffle([["a1","It can be reassigned, redeclared, hoisted.It is stored in global scope."],
                  ["a2","It can be reassigned but can't be redeclared.It has function and block scope"],
                  ["a3","It can't be reassigned and redeclared.It has function and block scope."],
                  ["a4","It is an object that may produce a single value some time in the future with either a resolved value or a reason that it's not resolved"],
                  ["a5","It is a function passed into another function as an argument"],
                  ["a6","It is a JS mechanism where variables and function declarations are moved to the top of their scope before code execution."]])


var answersDOM = document.querySelector('.answers')
ans.forEach(item => {
    var li = document.createElement("li");
    li.id = item[0]
    li.draggable = true
    li.textContent= item[1]
    answersDOM.appendChild(li)
    
})