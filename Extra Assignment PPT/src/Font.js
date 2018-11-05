function makeBold()  //Define the makeBold() function
{
    document.execCommand("bold");  //Use the function execCommand() to execute the instructions in the brackets
    if (document.getElementById("bold").isToggled)
    {
        document.getElementById("bold").style.backgroundColor = "#2789b3";
        document.getElementById("bold").isToggled = false;
    }

    else
    {
        document.getElementById("bold").style.backgroundColor = "rgb(15, 79, 126)";
        document.getElementById("bold").isToggled = true;
    }
}

function makeItalic()
{
    document.execCommand("italic");
    if (document.getElementById("italic").isToggled)
    {
        document.getElementById("italic").style.backgroundColor = "#2789b3";
        document.getElementById("italic").isToggled = false;
    }

    else
    {
        document.getElementById("italic").style.backgroundColor = "rgb(15, 79, 126)";
        document.getElementById("italic").isToggled = true;
    }
}

function doUnderline()
{
    document.execCommand("underline");
    if (document.getElementById("underline").isToggled)
    {
        document.getElementById("underline").style.backgroundColor = "#2789b3";
        document.getElementById("underline").isToggled = false;
    }

    else
    {
        document.getElementById("underline").style.backgroundColor = "rgb(15, 79, 126)";
        document.getElementById("underline").isToggled = true;
    }
}

function changeColor()
{
    // var title = document.getElementById("input").value;


    let select = document.getElementById("colorselector").value;
    if(select=="two")
    {

        document.execCommand('ForeColor',false,'#008000');
    }
    else document.execCommand('ForeColor',false,'#FF0000');
}
