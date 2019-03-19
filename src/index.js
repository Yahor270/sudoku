module.exports = function solveSudoku(matrix) {

 var m=matrix;
 function rowCheck(row,num){
   for(i=0;i<9;i++) if(m[row][i]==num) return false;
   return true;
 }


function colCheck(col,num){
  for(i=0;i<9;i++) if(m[i][col]==num) return false;
  return true;
}

function boxCheck(row,col,num){
  r=row-row%3;
  c=col-col%3;
  for(i=r;i<r+3;i++){
    for(j=c;j<c+3;j++) if(m[i][j]==num) return false;
  }
  return true;
}

function numFits(row,col,num){
  return rowCheck(row,num) && colCheck(col,num) && boxCheck(row,col,num);
}

function tryOut(){

for(row=0;row<=8;row++){
  for(col=0;col<=8;col++){
    if(m[row][col]==0){
      for(num=1;num<=9;num++){    
        if(numFits(row,col,num)) {
          //console.log('fit '+num);
          m[row][col]=num;
          if(tryOut()) return true;
          m[row][col]=0; 
        } 
      }
      
    }
    if(row==8 && col==8) return true;
  }
}
return false;
}

tryOut();

return m;
}