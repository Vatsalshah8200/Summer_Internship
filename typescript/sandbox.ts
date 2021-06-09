console.log("hello");
let ninja = [
    {
    name:'vatsal',
    age:'40'
    }
];
ninja.push({name:'neel',age:'50'});
ninja.forEach((value)=>{
    console.log(value.name+" " +value.age);
});
let age:number;
//age="hello"//error
age=20;//works fine
//functiondeclration intialization and calling
type person={name:string,age:number};
let details:(obj:person)=>void;
details=(player:person)=>{
    console.log(`${player.name} is of ${player.age} old.`);
}
details({name:'vatsal',age:20});