var student = function (name) {
    this.name = name;
    var printName = () => {
        // fat arrow function does not have its own this. so it searches the parent element for it
        console.log(this.name)
    }
    printName()
}
var yash = new student("yash")
// Output: yash

// Vs

var student = function (name) {
    this.name = name;
    function printName() {
        // here the this. searches upto the function block only so it will give the undefined value
        // it does not throw the error as there is a name but it is not just reachable here
        console.log(this.name)
    }
    printName()
}
var yash = new student("yash")
// Output: blank line. console.log(undefined) is a blank line

// Vs 

var student = function (name) {
    this.name = "kabadi";
    function printName() {
        console.log(this.name)
    }
    printName()
}
var yash = new student("yash")
// Output: blank line (undefined)
// Even though the student function sets the value of this.name to "kabadi", this value is not accessible 
// from within the printName function because it has its own this value, which is set to the global object 
// when it is called as a standalone function.