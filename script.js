var v = -1;
for(let i = 1; i < document.querySelector("#game").children.length+1; i++)
{
    document.querySelector(`#b${i}`).onclick = function() 
    {
        if(v == i) 
        {
            alert("Win!")
            v = Math.random(1, 4);
        }
        else {
            alert("You lost! Try again!");
            v = Math.random(1, 4);
        }
    }
}