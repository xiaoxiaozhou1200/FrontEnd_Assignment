var count = 0;
export function newSlideElement() {
    count = count+1;
    let newsilde = document.createElement("div");
    newsilde.setAttribute('id', 'newsilde'+count);
    newsilde.setAttribute('class','newsilde');
    // newsilde.setAttribute('onclick','showSlide()');

    let sb = document.getElementById('slidebar');
    sb.appendChild(newsilde);

}





// window.showSlide =function() {
//
//     count = count+1;
//     let father = document.createElement("div");
//     father.setAttribute('id', 'father'+count);
//     father.setAttribute('class','father');
//
//     let fatherdiv = document.getElementById('fatherdiv');
//     fatherdiv.appendChild(father);
// }
