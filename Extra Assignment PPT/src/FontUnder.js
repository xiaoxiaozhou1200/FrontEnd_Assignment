export function doUnderline() {
    document.execCommand("underline");
    if (document.getElementById("underlineBtn").isToggled)
    {
        document.getElementById("underlineBtn").style.backgroundColor = "#2789b3";
        document.getElementById("underlineBtn").isToggled = false;
    }

    else
    {
        document.getElementById("underlineBtn").style.backgroundColor = "rgb(15, 79, 126)";
        document.getElementById("underlineBtn").isToggled = true;
    }
}
