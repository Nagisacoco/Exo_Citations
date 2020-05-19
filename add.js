"use strict";

let check = 
[
    "Tout est possible, du moment qu'on a assez de cran !",
    "L'important ce n'est pas ce qu'on est à la naissance, mais la façon dont on grandir par la suite",
    "Si tu veux cerner la vraie nature de quelqu'un, regarde la façon dont il traite les personnes qui lui sont cher",
    "L'imagination, c'est ce qui nous rend capable de comprendre des chses que nous n'avaons jamais vécu.",
    "Bien entendu, c'est dans ta tête Harry ! Mais pourquoi tout ce qui ce passe dans notre tête, ne pourrait pas être réel ?",
    "C'est vrai que c'est facile d'harceler les gens, mais aussi la chose la plus atroce que l'on puisse faire !",
    "C'est impossible de vivre sans échouer quelque part, à part si vous vivez avec beaucoup de prudence mais vous pourriez ne rien avoir vécu du tout !",
    "Parfois on touche la vie des gens rien qu'en existant.",
    "Il faut avoir beaucoup de courage pour affronter ses ennemis, mais il en faut encore plus pour affronter ses amis !",
    "On peut trouver le bonheur même dans les moments les plus sombres... Il suffit de se souvenir d'allumer la lumière",
];

let checkHarry = document.getElementById("but");

function Potter()
{
    return check[Math.floor(Math.random() * check.length)];
}

function Color()
{
    let Color = []
    for (let i=0; i<5; i++)
    Color.push(Math.floor(Math.random() * 255));
    return Color;
}

Ron()
function Ron()
{
    let text = document.getElementById("quote");
    let color = Color();
    text.textContent = Potter();
    text.style.color = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
}

checkHarry.addEventListener("click", Ron)

Her()
function Her()
{
    let granger = document.getElementById("Her");
    let color = Color();
    granger.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
}

checkHarry.addEventListener("click", Her)