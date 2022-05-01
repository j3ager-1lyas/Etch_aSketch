/*getting selected Resolution Activly*/
const resoSlider=document.querySelector('#resoSlider');
const board=document.querySelector('#board');
let resolution=resoSlider.value;
resoSlider.addEventListener('change',()=>{getResoValue();createBoard()})

function getResoValue(){
        resolution=resoSlider.value;
}
/*setting board Resolution */
const sketchboard= document.querySelector('#sketchboard');
let divvert=[];
let divvhorz=[];
let swidth=sketchboard.clientWidth;
let sheight=sketchboard.clientHeight;
let childs=sketchboard.children;
let newresolution=resolution-(childs.length);
let lines=0;
let pixels=0;
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
function createBoard(){
    initializeColoring();
        swidth=sketchboard.clientWidth;
        sheight=sketchboard.clientHeight;
        childs=sketchboard.children;
        newresolution=resolution-(childs.length)
        /**addingpixels */
        if (childs.length<=resolution){addPixels();}
        /**removingpixels */
        else {removePixels();}
        function addPixels()
        {
            for(i=0;i<newresolution;i++){
                divvert[i]=document.createElement('div');
                divvert[i].id='lines';
                sketchboard.appendChild(divvert[i]);
                    for(j=0;j<newresolution;j++){
                        divvhorz[j]=document.createElement('div');
                        divvhorz[j].id="pixel";
                        divvert[i].appendChild(divvhorz[j]);
                    }

            }
            addaptPixelSize();
        }
        function removePixels(){
            for(i=0;i<-newresolution;i++)
            {
                sketchboard.removeChild(sketchboard.firstChild)
            }
            addaptPixelSize();
        }
        function addaptPixelSize(){
            lines=document.querySelectorAll('#lines');
            lines.forEach((line)=>{
                line.style.display="flex";
                line.style.height= sheight/resolution+'px'
            })
            pixels=document.querySelectorAll('#pixel');
            pixels.forEach((pixel)=>{
                pixel.style.width=swidth/resolution +'px';
                pixel.style.height=sheight/resolution+'px';
            })
        }
pixelColoring();
}



