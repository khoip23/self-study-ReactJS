//destructuring
var arr = ['Khôi', 'hôi', 'ôi', 'i']
// var a = arr[0]
// var b = arr[1]
// var c = arr[2]
// var d = arr[3]

var [a, b, c, d] = arr
console.log(a, b, c, d)

//rest
var arr1 = [1, 2, 3, 4, 5 , 6, 7]
var [a, b, ...rest] = arr1
console.log(rest)

var obj = {
    name: 'React',
    price: 1000,
    des: 'front-end',
    children: {
        name: 'Laravel'
    }
}

var {name, ...newObj} = obj
console.log(name)
console.log(newObj)

var {name: parentName, children: {name: childrenName}} = obj
console.log(parentName)
console.log(childrenName)