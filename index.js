// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
console.log(name.toUpperCase())
// TODO write your code here...


// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
function titleCase3(s) {  
    return s.toLowerCase().split(/\s+/).map(function(item, index) {  
        return item.slice(0, 1).toUpperCase() + item.slice(1);  
    }).join(' ');  
}  
console.log(titleCase3(sentence));
//TODO write your code here...


// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
let index = money.indexOf("￥");
let result = money.substr(index + 1,money.length); 
console.log(result)
//TODO write your code here...
