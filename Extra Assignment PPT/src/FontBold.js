export function changeBold() {
    document.execCommand("bold");  //Use the function execCommand() to execute the instructions in the brackets
    if (document.getElementById("boldBtn").isToggled)
    {
        document.getElementById("boldBtn").style.backgroundColor = "#2789b3";
        document.getElementById("boldBtn").isToggled = false;
    }

    else
    {
        document.getElementById("boldBtn").style.backgroundColor = "rgb(15, 79, 126)";
        document.getElementById("boldBtn").isToggled = true;
    }
}




