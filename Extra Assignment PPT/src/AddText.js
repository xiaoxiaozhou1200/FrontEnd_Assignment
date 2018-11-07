var flag = 0;

export function newTextElement() {

    flag = flag+1;

    let textinput = document.createElement("div");
    textinput.setAttribute('id','textid' + flag);
    textinput.setAttribute('class','textinput');
    textinput.setAttribute('contenteditable','true');
    textinput.setAttribute('ondblclick', 'textdop(this.id)');

    let movebar = document.createElement("div");
    movebar.setAttribute('class','movebar');

    let textscale = document.createElement("div");
    textscale.setAttribute('class','textscale');

    let newText = document.createTextNode("Input here>>>");
    textinput.appendChild(newText);

    let fa = document.getElementById('father');
    fa.appendChild(textinput);
    textinput.appendChild(movebar);
    textinput.appendChild(textscale);

    movebar.onmousedown = function(ev)
    {
        let oEvent = ev;
        let disX = oEvent.clientX - textinput.offsetLeft;
        let disY = oEvent.clientY - textinput.offsetTop;

        fa.onmousemove = function (ev)
        {
            oEvent = ev;
            oEvent.preventDefault();
            let x = oEvent.clientX - disX;
            let y = oEvent.clientY - disY;

            // 图形移动的边界判断
            x = x <= 0 ? 0 : x;  //Judge whether parameter x is smaller than 0 if so then set it to 0 for min value
            x = x >= fa.offsetWidth - textinput.offsetWidth - 4 ? fa.offsetWidth - textinput.offsetWidth - 4 : x;
            y = y <= 0 ? 0 : y;
            y = y >= fa.offsetHeight - textinput.offsetHeight - 4 ? fa.offsetHeight - textinput.offsetHeight - 4 : y;  //Judge whether parameter y is bigger than biggest length if so then set it to biggest length for max value

            textinput.style.left = x + 'px';
            textinput.style.top = y + 'px';
        };

        fa.onmouseleave = function ()
        {
            fa.onmousemove = null;
            fa.onmouseup = null;
        };

        fa.onmouseup = function()
        {
            fa.onmousemove = null;
            fa.onmouseup = null;
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

        fa.onmousemove = function (ev)
        {
            ev.preventDefault();
            let w = Math.max(200, ev.clientX - pos.x + pos.w);
            let h = Math.max(40, ev.clientY - pos.y + pos.h);
            w = w >= fa.offsetWidth - textinput.offsetLeft - 6 ? fa.offsetWidth - textinput.offsetLeft - 6 : w;
            h = h >= fa.offsetHeight - textinput.offsetTop - 6 ? fa.offsetHeight - textinput.offsetTop - 6 : h;
            textinput.style.width = w + 'px';
            textinput.style.height = h + 'px';
        };

        fa.onmouseleave = function ()
        {
            fa.onmousemove = null;
            fa.onmouseup = null;
        };

        fa.onmouseup = function()
        {
            fa.onmousemove = null;
            fa.onmouseup = null;
        };
    };
}
