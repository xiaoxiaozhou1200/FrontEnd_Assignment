var img = document.getElementById('img');  //Get img object by using getElementById() method
var noimage = img.src;  //Define a noimage object which is equals to img's src that saves the url of the picture

function handleFileSelect(evt)  //Use the function handleFileSelect() which is triggered when a local picture is selected
{
    var file = evt.target.files[0];  //Define a file list object which is equals to the local file that is belongs to the event target
    img.src = window.URL.createObjectURL(file);  //Call the createObjectURL() function which is used to preview local images on the browser and here we have the file that is currently selected
}

document.getElementById('file').addEventListener('change', handleFileSelect, false);
//Add the event listener for the file object and the keyword change describe the event when element is changed and then call the handleFileSelect() function

document.querySelector('#removephoto').addEventListener('click', function(e)
//Search the child element with the parameter removephoto and then add the event listener for the removephoto object where the event is the mouse click
{
    document.getElementById('file').value = "";  //Set the file object's value as empty which realize the function of remove
    img.src = noimage;  //Set the src url as noimage condition
    e.preventDefault();  //Prevent elements from default behavior
});

document.querySelector('#addphoto').addEventListener('click', function(e)
//Search the child element with the parameter addphoto and then add the event listener for the addphoto object where the event is the mouse click
{
      performClick(document.getElementById('file'));  //Call the performClick() function and transfer the file as the node
      e.preventDefault();  //Prevent elements from default behavior
});

function performClick(node)  //Use the function performClick() to actively call the control's click event
{
    var evt = document.createEvent("MouseEvents");  //Create the mouse event by using the createEvent() function
    evt.initEvent("click", true, false);  //Initialize the mouse event as the click event with canBubble parameter is true and cancelable parameter is false
    node.dispatchEvent(evt);  //Let the event combine to the node with dispatchEvent() function
}

