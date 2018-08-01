function createPhoneNumber(numbers){
  var newStr = ( "(" + numbers[0] + numbers[1] + numbers[2] + ")" + " "
  + numbers[3] + numbers[4] + numbers[5] + "-"
  + numbers[6] + numbers[7] + numbers[8] + numbers[9] );
  return newStr;
}


// print special character, then print numbers[i], print special character, space, numbers[i], - , numbers[i]
