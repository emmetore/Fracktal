// var fractalCanvas = document.getElementById("tree_fractal_canvas");
// var ctx = fractalCanvas.getContext("2d");
// function draw(startX, startY, len, angle, branchWidth) {
//     ctx.lineWidth = branchWidth;

//     ctx.beginPath();
//     ctx.save();

//     ctx.strokeStyle
//     ctx.fillStyle 

//     ctx.translate(startX, startY);
//     ctx.rotate(angle * Math.PI / 180);
//     ctx.moveTo(0, 0);
//     ctx.lineTo(0, -len);
//     ctx.stroke();




//     if (len < 10) {
//         ctx.restore();
//         return;
//     }
   
//     draw(0, -len, len * 0.8, angle - 20, branchWidth * newFractalInput);
//     draw(0, -len, len * 0.8, angle + 20, branchWidth * newFractalInput);

//     ctx.restore();
// }
// // const newFractalInput = document.getElementById('fractal_form')
// const newFractalInput = window.prompt("Enter a number between 0 and 1.")
// draw(400, 600, 120, 0, 10)




// //Mandlebrot Set V1
// var canvas = document.getElementById("mandlebrot_fractal_canvas");
// var context = canvas.getContext("2d");

// for(var x=0;x<200;x++)
// {
//         for(var y=0;y<200;y++)
//         {
//                 var i=0;
//                 var cx=-2+x/50;
//                 var cy=-2+y/50;
//                 var zx=0;
//                 var zy=0;                        

//                 do
//                 {
//                         var xt=zx*zy;
//                         zx=zx*zx-zy*zy+cx;
//                         zy=2*xt+cy;
//                         i++;
//                 }
//                 while(i<255&&(zx*zx+zy*zy)<4);

//                 var color=i.toString(16);
//                 context.beginPath();
//                 context.rect(x*4, y*4, 4, 4);
//                 context.fillStyle ='#'+color+color+color;
//                 context.fill();
//         }
// }


//MANDLEBROT SET V2
var mandlebrotCanvas = document.getElementById("mandlebrot_fractal_canvas");
mandlebrotCanvas.width=600;
mandlebrotCanvas.height=600;

var context = mandlebrotCanvas.getContext("2d");


function checkIfBelongsToMandelbrotSet(x, y) {
    var realComponentOfResult = x;
    var imaginaryComponentOfResult = y;

    for(var i = 0; i < 10; i++) {
     // Calculate the real and imaginary components of the result
     // separately
        var tempRealComponent = realComponentOfResult * realComponentOfResult
                             - imaginaryComponentOfResult * imaginaryComponentOfResult
                             + x;

        var tempImaginaryComponent = 2 * realComponentOfResult * imaginaryComponentOfResult
                             + y;

     realComponentOfResult = tempRealComponent;
     imaginaryComponentOfResult = tempImaginaryComponent;
    }

    if (realComponentOfResult * imaginaryComponentOfResult < 5)
        return true; // In the Mandelbrot set

        return false; // Not in the set
}

var magnificationFactor = prompt("Enter a number between 500 and 1000 for best results.");
var panX = 0;
var panY = 0;

for(var x=0; x < mandlebrotCanvas.width; x++) {
   for(var y=0; y < mandlebrotCanvas.height; y++) {
       
    var belongsToSet = checkIfBelongsToMandelbrotSet(x/magnificationFactor - panX, y/magnificationFactor - panY);
       
       if(belongsToSet) {
            context.fillRect(x,y, 1,1); // Draw a black pixel
       }                
   } 
}



