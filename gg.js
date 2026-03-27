/*function showjoke(){
let  jokes = [
"why did the computer sleep? it had a virus",
"why JavaScript? Because Java was too serious",
"Debugging: Removing bugs","jayam dhanush is a gay","ragul(49) loves a jd because they are both gay couples"

];

let random = Math.floor(Math.random() * jokes.length);
document.getElementById("joke").innerText =jokes[random];
}*/
function dance() {
    let robots = document.querySelectorAll(".robot");

    robots.forEach(robot => {
        robot.classList.add("dance");
    });
}

function stopDance() {
    let robots = document.querySelectorAll(".robot");

    robots.forEach(robot => {
        robot.classList.remove("dance");
    });
}
