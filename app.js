
// // esconde e mostra o elemento div
// function showHide() {
//     let div = document.getElementById('div1');

//     if (div.style.display !== "none") {
//         div.style.display = "none";
       
//     }
//     else {
//         div.style.display = "block";
//     }
// }



function toggle(ele) {
    var div = document.getElementById("div1");
    var = 
    // for (let i = 0; i < )

    
    if (div.style.display == 'block') {
        div.style.display = 'none';  
        rotateImg(ele);  
    }
    else {
        div.style.display = 'block';     
        rotateImg(ele);
    }
}






// gira a imagem
function rotateImg() {
    let img = document.getElementById('img1');
    

    if(img.style.transform !== "rotate(180deg)")
    {
        img.style.transform = "rotate(180deg)";
        
    }
    else {
        img.style.transform = "rotate(0deg)";
    }
}

