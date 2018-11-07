export function changeItalic() {

    document.execCommand("italic");
    if (document.getElementById("italicBtn").isToggled)
    {
        document.getElementById("italicBtn").style.backgroundColor = "#2789b3";
        document.getElementById("italicBtn").isToggled = false;
    }

    else
    {
        document.getElementById("italicBtn").style.backgroundColor = "rgb(15, 79, 126)";
        document.getElementById("italicBtn").isToggled = true;
    }
}