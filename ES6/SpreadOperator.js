var array = ['tôi', 'yêu', 'jolibee']
var array1 = ['js', 'php', 'c#']
var array2 = ['react', 'laravel', '.net']

//dùng spread (...)
var array3 = [...array2, ...array, ...array1]
console.log(array3)

var obj1 = {
    name: 'Javascript'
}

var obj2 = {
    price: 1000
}

var obj = {...obj1, ...obj2}
console.log(obj)

var courses = ['toán', 'văn', 'anh']
function logger(a, b, c){
    console.log(a, b, c)
}

logger(...courses)

function logger1(...rest){
    for(var i = 0; i < rest.length; i++){
        console.log(rest[i])
    }
}

logger1(...courses)