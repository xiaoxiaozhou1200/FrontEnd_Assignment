import  'CSS/main.css';
import {newImgElement} from 'Root/AddImage';
import {newTextElement} from 'Root/AddText';
import {changeBold} from 'Root/FontBold';
import {changeItalic} from 'Root/FontItalic';
import {doUnderline} from 'Root/FontUnder';
import {dop} from 'Root/clickremove';

let addImageBtn = document.getElementById("addImageBtn");
addImageBtn.addEventListener('click', newImgElement);

// let a = document.getElementById("box");
// a.addEventListener('ondblclick', deleteBox);

let addTextBtn = document.getElementById("addTextBtn");
addTextBtn.addEventListener('click', newTextElement);

let addBold = document.getElementById("boldBtn");
addBold.addEventListener('click', changeBold);

let addItalic = document.getElementById("italicBtn");
addItalic.addEventListener('click', changeItalic);

let addUnderline = document.getElementById("underlineBtn");
addUnderline.addEventListener('click', doUnderline);

let colorselector = document.getElementById("colorselector");
colorselector.addEventListener('click', changeColor);

function changeColor()
{
    let select = document.getElementById("colorselector").value;
    if(select=="two")
    {

        document.execCommand('ForeColor',false,'#008000');
    }
    else document.execCommand('ForeColor',false,'#FF0000');
}

