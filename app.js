const black = document.getElementById('div1');
const green = document.getElementById('div2');


green.addEventListener('mousemove',(event)=>{
    const {x} = event;
    green.style.width = `${x/4}1px `
    console.log(event)
})