var flag = 0;
var flag1 = 0;
var count = 0;
var count1 =0;
var count2 =0;
var count3 =0;


window.newSlideElement= function() {

    count = count+1;
    let father = document.createElement("div");
    father.setAttribute('id', 'father'+count);
    father.setAttribute('class','father');

    let fatherdiv = document.getElementById('fatherdiv');
    fatherdiv.appendChild(father);

    count1 = count1+1;
    let newsilde = document.createElement("div");
    newsilde.setAttribute('id', 'newsilde'+count1);
    newsilde.setAttribute('class','newsilde');

    let sb = document.getElementById('slidebar');
    sb.appendChild(newsilde);

    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    span.setAttribute('id','close');
    span.className = "close";

    let ns = document.getElementById('newsilde'+count1);
    ns.appendChild(span);
    ns.appendChild(txt);

    let close = document.getElementsByClassName("close");
    let i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            let div = this.parentElement;
            div.style.display = "none";
            // ns.style.display = "none";
        }
    }
}

window.newImgElement = function () {

    flag = flag + 1;
    count2 = count2 + 1;
    let box = document.createElement("div");
    box.setAttribute('class', 'box');
    box.setAttribute("id", "box" + flag);
    box.setAttribute('ondblclick', 'dop(this.id)');

    let img = document.createElement("img");
    img.setAttribute('id', 'img' + flag);
    img.setAttribute('class', 'newimg');
    let file = document.createElement("input");
    file.setAttribute('id', 'file' + flag);
    file.setAttribute('class', 'newfile');
    file.setAttribute('type', 'file');
    file.setAttribute('capture', 'camera');
    let scale = document.createElement("div");
    scale.setAttribute('id', 'scale' + flag);
    scale.setAttribute('class', 'newscale');
    let fa1 = document.getElementById('father'+count);
    document.getElementById('fatherdiv').appendChild(fa1);
    fa1.appendChild(box);
    box.appendChild(scale);
    box.appendChild(img);
    box.appendChild(file);

    window.handleFileSelect =function(evt)//Use the function handleFileSelect() which is triggered when a local picture is selected
    {
        file = evt.target.files[0];  //Define a file list object which is equals to the local file that is belongs to the event target
        img.src = window.URL.createObjectURL(file);  //Call the createObjectURL() function which is used to preview local images on the browser and here we have the file that is currently selected
        document.getElementById('file' +flag).style.display = "none";
    }

    document.getElementById('file' + flag).addEventListener('change', handleFileSelect, false);

    //拖拽
    box.onmousedown = function (ev) {
        let oEvent = ev;
        oEvent.preventDefault();
        let disX = oEvent.clientX - box.offsetLeft;
        let disY = oEvent.clientY - box.offsetTop;

        fa1.onmousemove = function (ev) {
            oEvent = ev;
            oEvent.preventDefault();
            let x = oEvent.clientX - disX;
            let y = oEvent.clientY - disY;
            // 图形移动的边界判断
            x = x <= 0 ? 0 : x;
            x = x >= fa1.offsetWidth - box.offsetWidth - 4 ? fa1.offsetWidth - box.offsetWidth - 4 : x;
            y = y <= 0 ? 0 : y;
            y = y >= fa1.offsetHeight - box.offsetHeight - 4 ? fa1.offsetHeight - box.offsetHeight - 4 : y;
            box.style.left = x + 'px';
            box.style.top = y + 'px';
        };

        fa1.onmouseleave = function () {
            fa1.onmousemove = null;
            fa1.onmouseup = null;
        };

        fa1.onmouseup = function () {
            fa1.onmousemove = null;
            fa1.onmouseup = null;
        };
    };

    scale.onmousedown = function (e) {
        // 阻止冒泡,避免缩放时触发移动事件
        e.stopPropagation();
        e.preventDefault();
        let pos =
            {
                'w': box.offsetWidth,
                'h': box.offsetHeight,
                'x': e.clientX,
                'y': e.clientY
            };
        fa1.onmousemove = function (ev) {
            ev.preventDefault();
            let w = Math.max(80, ev.clientX - pos.x + pos.w);
            let h = Math.max(80, ev.clientY - pos.y + pos.h);
            w = w >= fa1.offsetWidth - box.offsetLeft - 4 ? fa1.offsetWidth - box.offsetLeft - 4 : w;
            h = h >= fa1.offsetHeight - box.offsetTop - 4 ? fa1.offsetHeight - box.offsetTop - 4 : h;
            box.style.width = w + 'px';
            box.style.height = h + 'px';
        };

        fa1.onmouseleave = function () {
            fa1.onmousemove = null;
            fa1.onmouseup = null;
        };

        fa1.onmouseup = function () {
            fa1.onmousemove = null;
            fa1.onmouseup = null;
        };
    };
}

window.newTextElement =function(){

    flag1 = flag1+1;
    count3 = count3+1;

    let textinput = document.createElement("div");
    textinput.setAttribute('id','textid' + flag1);
    textinput.setAttribute('class','textinput');
    textinput.setAttribute('contenteditable','true');
    textinput.setAttribute('ondblclick', 'textdop(this.id)');
    textinput.setAttribute('onclick', 'showtoolbar()');

    let movebar = document.createElement("div");
    movebar.setAttribute('class','movebar');

    let textscale = document.createElement("div");
    textscale.setAttribute('class','textscale');

    let newText = document.createTextNode("Input here>>>");
    textinput.appendChild(newText);

    let fa2 = document.getElementById('father'+count);
    fa2.appendChild(textinput);
    textinput.appendChild(movebar);
    textinput.appendChild(textscale);

    movebar.onmousedown = function(ev)
    {
        let oEvent = ev;
        let disX = oEvent.clientX - textinput.offsetLeft;
        let disY = oEvent.clientY - textinput.offsetTop;

        fa2.onmousemove = function (ev)
        {
            oEvent = ev;
            oEvent.preventDefault();
            let x = oEvent.clientX - disX;
            let y = oEvent.clientY - disY;

            // 图形移动的边界判断
            x = x <= 0 ? 0 : x;  //Judge whether parameter x is smaller than 0 if so then set it to 0 for min value
            x = x >= fa2.offsetWidth - textinput.offsetWidth - 4 ? fa2.offsetWidth - textinput.offsetWidth - 4 : x;
            y = y <= 0 ? 0 : y;
            y = y >= fa2.offsetHeight - textinput.offsetHeight - 4 ? fa2.offsetHeight - textinput.offsetHeight - 4 : y;  //Judge whether parameter y is bigger than biggest length if so then set it to biggest length for max value

            textinput.style.left = x + 'px';
            textinput.style.top = y + 'px';
        };

        fa2.onmouseleave = function ()
        {
            fa2.onmousemove = null;
            fa2.onmouseup = null;
        };

        fa2.onmouseup = function()
        {
            fa2.onmousemove = null;
            fa2.onmouseup = null;
        };
    };

    textscale.onmousedown = function (e)
    {
        // 阻止冒泡,避免缩放时触发移动事件
        e.stopPropagation();
        e.preventDefault();

        let pos =
            {
                'w': textinput.offsetWidth,
                'h': textinput.offsetHeight,
                'x': e.clientX,
                'y': e.clientY
            };

        fa2.onmousemove = function (ev)
        {
            ev.preventDefault();
            let w = Math.max(200, ev.clientX - pos.x + pos.w);
            let h = Math.max(40, ev.clientY - pos.y + pos.h);
            w = w >= fa2.offsetWidth - textinput.offsetLeft - 6 ? fa2.offsetWidth - textinput.offsetLeft - 6 : w;
            h = h >= fa2.offsetHeight - textinput.offsetTop - 6 ? fa2.offsetHeight - textinput.offsetTop - 6 : h;
            textinput.style.width = w + 'px';
            textinput.style.height = h + 'px';
        };

        fa2.onmouseleave = function ()
        {
            fa2.onmousemove = null;
            fa2.onmouseup = null;
        };

        fa2.onmouseup = function()
        {
            fa2.onmousemove = null;
            fa2.onmouseup = null;
        };
    };
}


