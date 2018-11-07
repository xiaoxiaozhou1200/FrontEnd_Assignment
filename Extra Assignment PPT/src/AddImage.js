var flag = 0;
// var count = 0;

export function newImgElement() {

    flag = flag+1;
    // count = count+1;
    let box = document.createElement("div");
    box.setAttribute('class','box');
    box.setAttribute("id", "box" + flag);
    box.setAttribute('ondblclick', 'dop(this.id)');

    let img = document.createElement("img");
    img.setAttribute('id', 'img'+flag);
    img.setAttribute('class', 'newimg');
    let file = document.createElement("input");
    file.setAttribute('id', 'file'+flag);
    file.setAttribute('class', 'newfile');
    file.setAttribute('type','file');
    file.setAttribute('capture','camera');
    let scale = document.createElement("div");
    scale.setAttribute('id', 'scale'+flag);
    scale.setAttribute('class', 'newscale');
    let fa = document.getElementById('father');
    fa.appendChild(box);
    box.appendChild(scale);
    box.appendChild(img);
    box.appendChild(file);

    //拖拽
    box.onmousedown = function(ev)
    {
        let oEvent = ev;
        oEvent.preventDefault();
        let disX = oEvent.clientX - box.offsetLeft;
        let disY = oEvent.clientY - box.offsetTop;

        fa.onmousemove = function (ev)
        {
            oEvent = ev;
            oEvent.preventDefault();
            let x = oEvent.clientX - disX;
            let y = oEvent.clientY - disY;
            // 图形移动的边界判断
            x = x <= 0 ? 0 : x;
            x = x >= fa.offsetWidth - box.offsetWidth - 4 ? fa.offsetWidth - box.offsetWidth - 4 : x;
            y = y <= 0 ? 0 : y;
            y = y >= fa.offsetHeight - box.offsetHeight - 4 ? fa.offsetHeight - box.offsetHeight - 4 : y;
            box.style.left = x + 'px';
            box.style.top = y + 'px';
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

    scale.onmousedown = function (e)
    {
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
        fa.onmousemove = function (ev)
        {
            ev.preventDefault();
            let w = Math.max(80, ev.clientX - pos.x + pos.w);
            let h = Math.max(80, ev.clientY - pos.y + pos.h);
            w = w >= fa.offsetWidth - box.offsetLeft - 4 ? fa.offsetWidth - box.offsetLeft - 4 : w;
            h = h >= fa.offsetHeight - box.offsetTop - 4 ? fa.offsetHeight - box.offsetTop - 4 : h;
            box.style.width = w + 'px';
            box.style.height = h + 'px';
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

    let addimg = document.getElementById('img'+flag);  //Get img object by using getElementById() method
    let noimage = addimg.src;  //Define a noimage object which is equals to img's src that saves the url of the picture

    function handleFileSelect(evt)  //Use the function handleFileSelect() which is triggered when a local picture is selected
    {
        let file = evt.target.files[0];  //Define a file list object which is equals to the local file that is belongs to the event target
        img.src = window.URL.createObjectURL(file);  //Call the createObjectURL() function which is used to preview local images on the browser and here we have the file that is currently selected
    }

    document.getElementById('file'+flag).addEventListener('change', handleFileSelect, false);
//Add the event listener for the file object and the keyword change describe the event when element is changed and then call the handleFileSelect() function

    document.querySelector('#removephoto').addEventListener('click', function(e)
//Search the child element with the parameter removephoto and then add the event listener for the removephoto object where the event is the mouse click
    {
            flag = flag - 1;
            // document.getElementById('box' + flag).style.display = "none";
        document.getElementById('box'+flag).style.display = "none";  //Set the file object's value as empty which realize the function of remove
        addimg.src = noimage;  //Set the src url as noimage condition
        e.preventDefault();  //Prevent elements from default behavior
    });

    document.querySelector('#addphoto').addEventListener('click', function(e)
//Search the child element with the parameter addphoto and then add the event listener for the addphoto object where the event is the mouse click
    {
        performClick(document.getElementById('file'+flag));  //Call the performClick() function and transfer the file as the node
        e.preventDefault();  //Prevent elements from default behavior
    });

    function performClick(node)  //Use the function performClick() to actively call the control's click event
    {
        let evt = document.createEvent("MouseEvents");  //Create the mouse event by using the createEvent() function
        evt.initEvent("click", true, false);  //Initialize the mouse event as the click event with canBubble parameter is true and cancelable parameter is false
        node.dispatchEvent(evt);  //Let the event combine to the node with dispatchEvent() function
    }
}