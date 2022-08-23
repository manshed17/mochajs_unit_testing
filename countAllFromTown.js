function countAllFromTown(rn,ss){
    var reg = rn.split(",")
    var fromAnyTown = [];
  for(var i = 0; i < reg.length; i++){
    var x = reg[i].trim();
    if (x.startsWith(ss)){
      fromAnyTown.push(x);
    }
  }
    return fromAnyTown.length;
  }