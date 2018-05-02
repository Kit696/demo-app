console.log('Hello World')
//var x = setInterval(function() {
    console.log("Hello")
//}, 1000)
//
//clearInterval(x)

var id = 3
var name = `Prinya id=${id}`
var ok = true


//Object
var student = {
    code: '001',
    sname: 'Prinay'
}

student.age = 25
student['age'] = 25
delete student.age

console.log(name)
console.log(student.code)
console.log(student['code'])

//Array
//var teacher = []
var teacher = ['Prakit', 'Prinya', 'Santichai']
var list = ['aaa', 1, {id: 1}, ['code1']]

console.log(teacher.length)

for (i = 0; i < teacher.length; i++) {
    console.log(teacher[i])
}

var data = ['A', 'B', 'C', 'D']
//data.splice(data.length, 0 , 'E')
data.splice(0, 2)

for (i = 0; i < data.length; i++) {    
    console.log(data[i])
}

// JSON Encode
txt = JSON.stringify(list) 

console.log(txt)

// JSON Decode
ttxtt = JSON.parse(txt)

console.log(ttxtt)


var std1 = {id: 1}
var std2 = std1
std2.id = 2

console.log(std1.id)