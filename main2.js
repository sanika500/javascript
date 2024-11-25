
// console.log("hi,there");


// setTimeout(() => {
// console.log("keerthi")   
// },5000);

// function great(){
//     console.log("bye");
// }
// setTimeout(great,10000);



// class person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     greet(){
//         console.log('Hi, Im'+this.name+'and Im '+this.age +'years old.');
//     }
// }

// const person1=new person('bob',30);
// person1.greet();



// class Animal{
//     constructor(name){
//         this.name=name;
//     }
//     speak(){
//         // console.log('${this.name} makes a noise');
//         console.log(this.name+' makes a noise');
//     }
// }
// class Dog extends Animal{
//     speak(){
//         // console.log('${this.name} barks');
//         console.log(this.name +' barks');

//     }
// }

// const dog=new Dog('Rex');
// dog.speak();



// function FetchdataFromserver(callback){
//     setTimeout(()=>{
//         console.log("Data Fetched from server");
//         callback("data")
//     },1000);
// } 

// function ProcessData(data,callback){
//     setTimeout(()=>{
//         console.log("processing data:"+data);
//         callback("processed data");
//     },1000);
// }

// function SaveData(data,callback){
//     setTimeout(()=>{
//         console.log("saving data:"+data);
//         callback("data  saved");
//         },1000);
//     }

// FetchdataFromserver((data) =>{
//     ProcessData(data,(ProcessData)=>{
//         SaveData(ProcessData,(SaveData)=>{
//             console.log(SaveData);
    
//     });
// });
// });