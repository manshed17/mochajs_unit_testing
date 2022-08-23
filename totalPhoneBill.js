function totalPhoneBill(x){
var y = x.split(',');
const call = 2.75;
const sms = 0.65;
var totalBill = 0;

for (var i = 0; i < y.length; i++){
let list = y[i].trim();
  
  if(list === 'call'){
  totalBill = totalBill + call;
  }else {
   totalBill = totalBill + sms;
  }
}
return 'R' + totalBill.toFixed(2);  
}