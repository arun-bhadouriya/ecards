let panelElements = document.querySelectorAll('.panel');

for(let i=0;i<panelElements.length;i++){
    panelElements[i].addEventListener('click',()=>{
        if(panelElements[i].classList="panel"){
            removeActiveClasses();
            panelElements[i].setAttribute('class','panel active')
        }
        
        console.log("clicked");
    })
}

const removeActiveClasses = ()=>{
    panelElements.forEach(panel=>{
        panel.classList.remove('active')
    })
}