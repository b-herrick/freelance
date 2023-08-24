const container=document.querySelector('tbody');
const names=[
    "Blue",
    "Red",
    "Steven",
    "Cynthia",
    "Adler",
    "Diantha",
    "Leon",
    "Nemona"
];
const professions=[
    "gardener",
    "teacher",
    "programmer",
    "electrician",
    "plumber"
];
function randomDude(){
    const nameIdx=Math.floor(Math.random()*names.length);
    const profIdx=Math.floor(Math.random()*professions.length);
    const pricing=Math.ceil(Math.random()*70)+30;
    const dude={
        name:names[nameIdx],
        price:pricing,
        profession:professions[profIdx]
    };
    return dude;
}
const freelancers=[
    randomDude(),
    randomDude()
];
console.log(freelancers);
function render(){
    const html=freelancers.map(function(dude){
        return `<tr><td>${dude.name}</td><td>${dude.price}</td><td>${dude.profession}</td></tr>`
    });
    container.innerHTML=html.join('');
}
render();
const interval =setInterval(function(){
    const newDude=randomDude();
    freelancers.push(newDude);
    render();
    console.log(freelancers);
    if(freelancers.length>20){
        clearInterval(interval);
    }
}, 8000);