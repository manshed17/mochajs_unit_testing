function countAllPaarl(regNumbers){
    var regNumbersForPaarl = [];
   const strList = regNumbers.split(",");
     for (var i = 0 ; i < strList.length; i++){ 
     var par = strList[i].trim();
      if(par.startsWith("CJ")){
       regNumbersForPaarl.push(par);
      } 
       
     }
     return regNumbersForPaarl.length;
   }