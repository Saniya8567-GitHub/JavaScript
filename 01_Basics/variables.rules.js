//Variables are cases sensitive: "a " and "A" are different variables.
//only letters,digits,$ and _ are valid characters for variable names.
//Variables cannot start with a digit.
//reserved words cannot be used as variable names.
// let const var
//var:Variables can be re-declared and updated.
//let:Variables can be updated but not re-declared.
//const:Variables cannot be updated or re-declared.
//Variables declared with const must be assigned a value.
 a;///no need to declare let
console.log(a);
const=a;//need to declare const
console.log(const);
//gloabal scope
{
    let a=5;
    console.log(a);

}
{let a=10;
    console.log(a);
}
//DataTypes in js
let age=25;//number
typeof age;
price=100.5
typeof price;//number
let name="John Doe";//string
typeof name;
let isStudent=true;
typeof isStudent;//boolean
let address;
typeof address;//undefined
let phone=null;
typeof phone;
const student={
    fullName:"Saniya Mulla",
    age:20,
    cgpa:6.5,
    isPass:true,
}
console.log(student);