function findNb(m) {
  var n = 1;
  var sum = 0;

  while(m > sum){
    sum = sum + Math.pow(n,3);
    n++;
  }

  if(m == sum){
    return n-1;
  }
  else{
    return -1;
  }
}
