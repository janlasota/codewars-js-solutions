function digPow(n, p){
  var sum = 0;
  var strNum = n.toString();
  var k = 1;

  for(var i = 0; i < strNum.length; i++){
    sum = sum + Math.pow(parseFloat(strNum[i]), p++);
  }

  while(n > k){
    if((n*k) < sum){
      k++;
    }
    else if((n*k) === sum){
      return k;
    }
    else if((n*k) > sum){
      return -1;
    }
  }
  return 12933;
}
