/*creating a Board*/
window.addEventListener('resize',setPSize)
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
function removePixels(difference){
    let nClear=sketchboard.childElementCount;
    for(i=0;i<nClear;i++){
        sketchboard.removeChild(sketchboard.lastElementChild);
        pixels.pop();
    }
}
function changeColor(e){
    if (e.type=='mouseover'){
        e.target.style.backgroundColor='black';
    }
}
function addPixels()
        {   
            let currentIndex=(pixels.length);
            for(i=0;i<selectedResolution**2;i++,currentIndex++)
            {   
                pixels[currentIndex]=document.createElement('div');
                pixels[currentIndex].id='pixel';
                pixels[currentIndex].addEventListener('mouseover',changeColor);
                pixels[currentIndex].addEventListener('mousedown',changeColor);
                sketchboard.appendChild(pixels[currentIndex]);
            }
            setPSize();
            console.log("added"+difference)
        }
function setPSize(){
     sketchboard.style.height=sketchboard.clientWidth+'px';
     let pixel=document.querySelectorAll('#pixel');
     pixel.forEach((square)=>{
         square.style.width= sketchboard.clientWidth/selectedResolution +'px';
         square.style.height= sketchboard.clientHeight/selectedResolution+'px';
     })
    
 }


function createBoard(){
    
        removePixels();
   
        addPixels();
     
        currentResolution=selectedResolution;
        
}
/*getting selected Resolution Activly*/
/*-----------------------
const resoSlider=document.querySelector('#resoSlider');
const board=document.querySelector('#board');
let resolution=resoSlider.value;
resoSlider.addEventListener('change',()=>{getResoValue();createBoard()})

function getResoValue(){
        resolution=resoSlider.value;
}
/*setting board Resolution 
const sketchboard= document.querySelector('#sketchboard');
let divvert=[];
let divvhorz=[];
let swidth=sketchboard.clientWidth;
let sheight=sketchboard.clientHeight;
let childs=sketchboard.children;
let newresolution=resolution-(childs.length);
let lines=0;
let pixels=0;
createPixels();
createBoard();
function pixelColoring(){
    pixels.forEach((pixel)=>{
        pixel.addEventListener('mouseover',(e)=>{coloring(e);})
    })
    function coloring(e){
        e.target.style.backgroundColor='black';
    }
}
function initializeColoring(){
    pixels=document.querySelectorAll('#pixel');
    pixels.forEach(function (pixel){
        pixel.style.backgroundColor='white';
    })
    
}
function createPixels(){
            for(i=0;i<resoSlider.max;i++){
                divvert[i]=document.createElement('div');
                divvert[i].id='lines';
                    for(j=0;j<resoSlider.max;j++){
                        divvhorz[j]=document.createElement('div');
                        divvhorz[j].id="pixel";        
                    }
            }
}
function createBoard(){
    initializeColoring();
        swidth=sketchboard.clientWidth;
        sheight=sketchboard.clientHeight;
        childs=sketchboard.children;
        newresolution=resolution-(childs.length)
        /**addingpixels 
        
        if (childs.length<=resolution){addPixels();}
        /**removingpixels 
        else {removePixels();}
        function addPixels(){
            for(i=0;i<newresolution;i++){
                sketchboard.appendChild(divvert[i]);
                    for(j=0;j<newresolution;j++){
                    divvert[i].appendChild(divvhorz[j]);     
                    }
            }
            
            
            addaptPixelSize();
        }
        function removePixels(){
            for(i=0;i<-newresolution;i++)
            {
                for(j=0;j<-newresolution;j++){
                    divvert.removeChild(divvert.firstChild);     
                    }
                sketchboard.removeChild(sketchboard.firstChild)
            }
            addaptPixelSize();
        }
        function addaptPixelSize(){
            lines=document.querySelectorAll('#lines');
            lines.forEach((line)=>{
                line.style.display="flex";
                line.style.height= sheight/resolution+'px'
                line.style.width=swidth;
            })
            pixels=document.querySelectorAll('#pixel');
            pixels.forEach((pixel)=>{
                pixel.style.width=swidth/resolution +'px';
                pixel.style.height=sheight/resolution+'px';
            })
        }
pixelColoring();
}
/**make sure to check the bugs of resolution, unused space(probably bcz of the pixel element call) 
------*/

