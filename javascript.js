/*creating a Board*/ /**problem , so slow, some size problems no coloring yet. */
window.addEventListener('resize',()=>{
    sketchboard.style.height=sketchboard.clientWidth+'px';
})
let currentResolution=0;
let selectedResolution=0;
let pixels=[];
let difference=0;
const sketchboard=document.querySelector('#sketchboard');
const resoSlider=document.querySelector('#resoSlider');
resoSlider.addEventListener('change',function (e){
    selectedResolution=e.target.value;
    createBoard();
    const resoText=document.querySelector('#resoLabel');
    resoText.textContent=selectedResolution+'x'+selectedResolution;
    console.log(sketchboard.childElementCount);
})
function removePixels(){
    sketchboard.innerHTML='';
}
function changeColor(e){
    if (e.type=='mouseover'){
        e.target.style.backgroundColor='black';
    }
}
function addPixels()
        {   
            for(i=0;i<selectedResolution**2;i++)
            {   
                pixels[i]=document.createElement('div');
                pixels[i].id='pixel';
                pixels[i].addEventListener('mouseover',changeColor);
                pixels[i].addEventListener('mousedown',changeColor);
                pixels[i].style.width= sketchboard.clientWidth/selectedResolution +'px';
                pixels[i].style.height= sketchboard.clientHeight/selectedResolution+'px';
                sketchboard.appendChild(pixels[i]);
            }
            sketchboard.style.height=sketchboard.clientWidth+'px';
        }
        /*
function setPSize(){
     
     let pixel=document.querySelectorAll('#pixel');
     pixel.forEach((square)=>{
         
     })
    setPSize();
 }*/


function createBoard(){
    
        removePixels();
        addPixels();
        currentResolution=selectedResolution;
        
}
