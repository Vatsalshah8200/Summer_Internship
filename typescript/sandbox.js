console.log("hello");
var ninja = [
    {
        name: 'vatsal',
        age: '40'
    }
];
ninja.push({ name: 'neel', age: '50' });
ninja.forEach(function (value) {
    console.log(value.name + " " + value.age);
});
var age;
//age="hello"//error
age = 20; //works fine
var details;
details = function (player) {
    console.log(player.name + " is of " + player.age + " old.");
};
details({ name: 'vatsal', age: 20 });
