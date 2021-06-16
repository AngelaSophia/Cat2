// console.log(b);
// setTimeout(function(){
//     var a=34,
    
// }),200;
// console.log(a);

console.log("plant the seedlings")
setTimeout(function(){
    console.log("Water the seeds");
}),300;
console.log("check on your seeds");

var lisaLab = {
    name: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.name = " + this.name);
        console.log("outer func:  self.name = " + self.name);
        (function() {
            console.log("inner func:  this.name = " + this.name);
            console.log("inner func:  self.name = " + self.name);
        }());
    }
};

lisaLab.func();

// The identifer tried to make an object and the object was represented by lisalab, inside the object 
// the identifer created the attributes of the objects within the attributes, the identifer created a function
// that she used "this" to refer to the object which is lisalab.In the out put, she has consoled.log the outer
// func,the variable and the attributes of the object to print out one sentence link "outer func: this.name=bar"

//The out put of the code will print the attributes and thier values in one line like for the "outer func: self
//.name=bar", the identifer has concatinated both the attributes of the object and the function that is inside 
//the object to bring a one line output.



