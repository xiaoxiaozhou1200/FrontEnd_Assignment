var count = 0;



// window.newSlideElement= function() {
//
//     count = count+1;
//     let newsilde = document.createElement("div");
//     newsilde.setAttribute('id', 'newsilde'+count);
//     newsilde.setAttribute('class','newsilde');
//     newsilde.setAttribute('ondblclick','showSlide()');
//
//     let sb = document.getElementById('slidebar');
//     sb.appendChild(newsilde);
//
//     let span = document.createElement("span");
//     let txt = document.createTextNode("\u00D7");
//     span.setAttribute('id','close');
//     span.className = "close";
//
//     let ns = document.getElementById('newsilde'+count);
//     ns.appendChild(span);
//     ns.appendChild(txt);
//
//     let close = document.getElementsByClassName("close");
//     let i;
//     for (i = 0; i < close.length; i++) {
//         close[i].onclick = function() {
//             let div = this.parentElement;
//             div.style.display = "none";
//             // ns.style.display = "none";
//         }
//     }
// }
