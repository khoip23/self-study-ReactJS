(() => {
    console.log(123)
})()

const sum = (a, b) => a + b
console.log(sum(1,2))

const num = (a, b) => ({a: a, b: b})
console.log(num(2,3))

const mes = log => console.log(log)
mes('message...')

const course = {
    name: 'js basic!',
    getname: function() {
        return this.name
    }
}

console.log(course.getname())