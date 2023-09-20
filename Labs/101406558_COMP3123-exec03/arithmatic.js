let add = (a, b) => {
    return a + b
}

let sub = (a, b) => {
    return a - b
}

let mul = (a, b) => {
    return a * b
}

let div = (a, b) => {
    return a / b
}

module.exports = { sum:add, sub, mul, div }

class Student{
    constructor(sid,snm){
        this.sid = sid
        this.snm = snm
    }

    print(){
        console.log(this.sid)
        console.log(this.snm)
    }
}