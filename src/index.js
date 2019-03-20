module.exports = function solveSudoku(matrix) {

 function rowCheck(m,row,num){
   for(var i=0;i<9;i++) if(m[row][i]==num) return false;
   return true;
 }

function colCheck(m,col,num){    
  for(var i=0;i<9;i++) if(m[i][col]==num) return false;
  return true;
}

function boxCheck(m,row,col,num){   //check 3x3 box
  var r=row-row%3;
  var c=col-col%3;
  for(var i=r;i<r+3;i++){
    for(var j=c;j<c+3;j++) if(m[i][j]==num) return false;
  }
  return true;
}

function numFits(m,row,col,num){
  return rowCheck(m,row,num) && colCheck(m,col,num) && boxCheck(m,row,col,num);
}

function findHim(m){             //search for zero
  for(var row=0;row<=8;row++){
    for(var col=0;col<=8;col++){
      if(m[row][col]==0) return [row, col];
    }
  }  
  return [9,9];  //if not found
}

function tryOut(m){
var found=findHim(m);
var row=found[0]; 
var col=found[1]; 
if(row==9) {
  //solved
  return true;
} 
      for(var num=1;num<=9;num++){    
        if(numFits(m,row,col,num)) {
          m[row][col]=num;
          if(tryOut(m)) return true;
          m[row][col]=0; 
        }      
      }
    return false; 
}

tryOut(matrix);

return matrix;
}