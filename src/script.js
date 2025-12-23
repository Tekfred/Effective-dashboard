


const lightmode = document.getElementById("light");
const Darkmode = document.getElementById("dark");


document.getElementById("togglebtn").addEventListener('click', function(){
    lightmode.classList.toggle("bg-[#7380ec]");
    lightmode.classList.toggle("text-white");
    lightmode.classList.toggle("bg-[#d0d4fa]");

    Darkmode.classList.toggle('bg-[#7380ec]');
    Darkmode.classList.toggle('text-white');
    Darkmode.classList.toggle('bg-[#d0d4fa]');
    Darkmode.classList.toggle('translate-x-[-3px]');
    Darkmode.classList.toggle('rounded-l-md');
    
    
})

document.addEventListener("DOMContentLoaded", () => {
    const togglebtn = document.getElementById("togglebtn");
    togglebtn.addEventListener('click', () => {
        lightmode.classList.toggle('#353643');
        Darkmode.classList.toggle('')

        
    })
})