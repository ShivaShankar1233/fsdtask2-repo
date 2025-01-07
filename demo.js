//console.log("hello")
/*let Myobj={
    fname:"cvr",
    lname:"cse",
    display(){
        return "Name:"+this.fname + ":" +this.lname
    }
}
console.log(Myobj.display())*/
//1.
/*let f1=20;
console.log(f1)

var r1=20;
console.log(r1)

const s1="myday";
console.log(s1)


console.log(a)
var a=100;
console.log(a)


let b=230;
console.log(b)


const c="think123"
console.log(c)*/

//2.

// let calculator = function(a, b) { 
//     a=Number(a);
//     b=Number(b);
//     console.log("Addition is :", a + b);
//     console.log("Subtraction is :", a-b);
//     console.log("Multiplication  is :", a*b);
    
//     if(b!=0){
//         console.log("Division is :", a/b);
//     }
//     else{
//         console.log("Division with 0 is not defined")
//     }
// }    

// let a=prompt("enter the 1st number:")
// let b=prompt("enter the 2nd number:")
// calculator(a,b)

//3.

// let person = {
//     name:"shankar",
//     age:17,
    
//     greet(){
//         return "Hello "+ this.name+":"+this.age
//     },
//     isAdult(){
//         return this.age>=18;
//     }
// };

// console.log(person.greet())
// console.log(person.isAdult())

//4.

// function Student(name,grade){
//     this.name=name;
//     this.grade=grade;
//     this.study=function(){
//         console.log(this.name + "is studying");
//         this.grade+=1;
//     };
//     this.getGrade=function(){
//         return this.grade;
//     };
// }

// const Student1= new Student("barath",8);
// const Student2= new Student("shankar",8);

// Student1.study();
// Student2.study();
// console.log(`${Student1.name} grade:${Student1.getGrade()}`);
// console.log(`${Student2.name} grade:${Student2.getGrade()}`);

//5.

let temperatureCalculator={
   
    tofahren(x){
        let temp=((x/5)*9)+32;
        return temp;
    },
    tocelsius(y){
            let temp=(y-32)*5/9;
            return temp;
    }


}
let x=prompt("Enter temperature in celsius");

let y=prompt("Enter temperature in Fahrenheit");

let temp1=temperatureCalculator.tofahren(x);
console.log(temp1);

let temp2=temperatureCalculator.tocelsius(y);
console.log(temp2);

//6.

// function Person(name,age){
//     this.name=name;
//     this.age=age;
//     this.details=function det(){
//         return `Name: ${this.name}, Age: ${this.age}` 
//     }
// }
// function Student(name,age,grade){
//     Person.call(this, name, age);
//     this.grade=grade
//     this.gradeDetails=function fgh(){
//      return   ` ${this.name}is studying for grade ${this.grade}.` 
//     }
    
// }
// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student
// let st=new Student("akhi",20,"C")

// console.log(st.gradeDetails())
// console.log(st)

// console.log(st.age)

//9.
// class Rectangle {
//     constructor(width, height) {
//       this.width = width;
//       this.height = height;
//     }
  
//     area() {
//       return this.width * this.height;
//     }
//   }
  

//   const rectangle = new Rectangle(5, 10);
  
 
//   console.log("The area of the rectangle is:", rectangle.area());


//8.
// function Person(name) {

//     this.name = name;
// }
// Person.prototype.greet = function() {
//     console.log(`Hello, my name is ${this.name}`);
// };
// const person1 = new Person('Alice');
// person1.greet();
// console.log(Person.prototype); 
// console.log(person1.__proto__); 
// console.log(person1.__proto__ === Person.prototype); 

//7.

// function Car(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }
  

//   Car.prototype.getDetails = function() {
//     return `${this.year} ${this.make} ${this.model}`;
//   };

// function ElectricCar(make, model, year, batteryCapacity) {
   
//     Car.call(this, make, model, year);
//     this.batteryCapacity = batteryCapacity;
//   }
  

//   ElectricCar.prototype = Object.create(Car.prototype);
//   ElectricCar.prototype.constructor = ElectricCar;
  
 
//   ElectricCar.prototype.getBatteryInfo = function() {
//     return `Battery Capacity: ${this.batteryCapacity} kWh`;
//   };

// const myElectricCar = new ElectricCar("Tesla", "Model S", 2024, 100);


// console.log(myElectricCar.getDetails()); 


// console.log(myElectricCar.getBatteryInfo()); 
    