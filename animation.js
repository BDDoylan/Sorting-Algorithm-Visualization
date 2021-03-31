var xvalues = [10,75,140,205,270,335,400,465,530,595,660,725,790,855,920,985,1050,1115,1180,1245,1310,1375,1440];

// ------------------------- SORTING ALGORITMS ----------------------------------------- TESTING
async function selectionSort(inputArr) { 
   let n = inputArr.length; 
   for(let i = 0; i < n; i++) {
       // Finding the smallest number in the subarray
       await sleep(300);
            clearCanvas();
            createBoxes(xvalues, storageSystem);   
       let min = i;
       for(let j = i+1; j < n; j++){
           if(inputArr[j] < inputArr[min]) {
               min=j; 
           }
        }
        if (min != i) {
            // Swapping the elements
            let tmp = inputArr[i]; 
            inputArr[i] = inputArr[min];
            inputArr[min] = tmp;      
       }
   }
   return inputArr;
}

// ------------------------------------- insertion sort -----------------------------------------
// y value in reference to anything else
async function insertionSort(arr) {
   for (var i = 1, len = arr.length; i < len; i++) {
      await sleep(300);
      clearCanvas();
      createBoxes(xvalues, storageSystem);
      //================================================================
      key = arr[i];
      j = i - 1;
      while (j >= 0 && arr[j] > key) {
         clearCanvas();
         createBoxes(xvalues, storageSystem);
         arr[j + 1] = arr[j]
         j--;
         // here goes the time function and the print function
         //================================================================
      }
      arr[j + 1] = key;
      //================================================================
   }
   return arr;
   
}
// ===================================bubble sort===============================================
async function bubble_Sort(inputArr){
   let len = inputArr.length;
   let swapped;
   do {
      swapped = false;
      for (let i = 0; i < len; i++) {
         await sleep(100);
         clearCanvas();
         createBoxes(xvalues, storageSystem);
         if (inputArr[i] > inputArr[i + 1]) {
            clearCanvas();
            createBoxes(xvalues, storageSystem);
            let tmp = inputArr[i];
            inputArr[i] = inputArr[i + 1];
            inputArr[i + 1] = tmp;
            swapped = true;
         }
      }
   } while (swapped);
   return inputArr;
};
// ------------------------- Drawign Boxes --------------------------------------------- COMPLETE
 
run = true;

var c = document.getElementById("1canvas");
var ctx = c.getContext("2d");
// draw the boxes
function box(x,y,x2,y2) {
   ctx.beginPath();

   //ctx.clearRect(x, 10, 50, 480);

   ctx.rect(x, y, x2, y2);
   ctx.lineWidth = 5;
   ctx.stroke();
   ctx.fillStyle = 'rgb(148, 79, 0)';
   ctx.fill();
}

//--A--S--S---A--- S(same), A(altered)
//box(10,10,50,480);

// arrays needed to store for creation
// -------------------------------------------------
function yvalues(){
   var b = [];
   for (var i = 10; i < 1450; i+=65) {
      var c = Math.floor(Math.random(10) * 480);
      b.push(c);
   }
   return b;
}
// -------------------------------------------------
async function createBoxes(x, y){
   var xLength = x.length;
   for (var i = 0; i < xLength; i++) {
      box(x[i],10,50,y[i]);
   }
}

randomizeArr();

// -------------------------------------------------
function clearCanvas(){
   canvas = document.getElementById("1canvas");
   ctx = canvas.getContext("2d");
   ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// storage for the y values
// -------------------------------------------------
var storageSystem;
//---------------------- randomize array------------
function randomizeArr() {
   clearCanvas();
   storageSystem = yvalues();
   createBoxes(xvalues, storageSystem);
   return storageSystem;
   
}

//----------To know which sort method is used ----
var n = 0;
let whoIsRed;
function setColor(id) {
   let status = document.getElementById(id);
   // id mergS insS bblS
   document.getElementById('selS').style.color = "orange";  // 1
   document.getElementById('insS').style.color = "orange";   // 2
   document.getElementById('bblS').style.color = "orange";   // 3
   status.style.color = "red";

   if(n === 0){
      document.getElementById('selS').style.color = "orange";  // 1
      document.getElementById('insS').style.color = "orange";   // 2
      document.getElementById('bblS').style.color = "orange";   // 3
      status.style.color = "red";
      
      if(document.getElementById('selS').style.color === "red"){
         whoIsRed = 1;
         
      } else if(document.getElementById('insS').style.color === "red"){
         whoIsRed = 2;
         
      } else if(document.getElementById('bblS').style.color === "red"){
         whoIsRed = 3;
         
      }
      n = 0;
   }
}
//-------------------------------------------------
//determines the function of sorting use
var ranOrNot = false;
function sortIt(){
   if(ranOrNot === false){
      if(whoIsRed === 1){
         // merge
         clearCanvas();
         createBoxes(xvalues, selectionSort(storageSystem));
         ranOrNot = true;
      }else if(whoIsRed === 2){
         //insert
         clearCanvas();
         createBoxes(xvalues, insertionSort(storageSystem));
         ranOrNot = true;
      }else if(whoIsRed === 3){
         //bubbl
         clearCanvas();
         createBoxes(xvalues, bubble_Sort(storageSystem));
         ranOrNot = true;
      }else{
         alert("You have not selected a method of sorting.");
      }
   } else {
      alert("Randomize so you can get a new unsorted array, and then begin sorting!");
      ranOrNot = false;
   }
}

// -----------------------------------

/*
function redrawit(){
   clearCanvas();
   box(xvalues(),10, 50,yvalues());
}
*/ 

// -----------------------------------
// delay function
function sleep(milliseconds) {
   return new Promise(resolve => setTimeout(resolve, milliseconds));
}

// ----------------------------------- which function is sort?
alreadySorted2 = sort(storageSystem);
function sortColoring() {
   for (var i = 0; i < 23; i++) {
      if(storageSystem[i] === alreadySorted2[i]){
         Color_box(xvalues[i],10,50,alreadySorted2[i]);
      }
   }
}
// -----------------------------------

function colorBox(x,y,x2,y2) {
   ctx.beginPath();
   //ctx.clearRect(x, 10, 50, 480);
   ctx.rect(x, y, x2, y2);
   ctx.lineWidth = 5;
   ctx.stroke();
   ctx.fillStyle = 'rgb(0, 0, 0)';
   ctx.fill();
}
// -----------------------------------

