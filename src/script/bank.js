const depositeForm = document.getElementById("dpForm");
const withdrawForm = document.getElementById("wdForm");
document.getElementById("depositeBtn").addEventListener("click", ()=>{
  console.log("click dp");
 showFormIterface("dpForm");
});
document.getElementById("withdrawBtn").addEventListener("click", ()=>{
  showFormIterface("wdForm");
});
document.getElementById("historyBtn").addEventListener("click", ()=>{
  showFormIterface("hsForm");
});


// Total Balance setUp =====================================
let totalBalance = document.getElementById("totalBalance").innerText;
let totalBalanceParse = parseFloat(totalBalance);
console.log(totalBalanceParse);

document.getElementById("dpSubmitBtn").addEventListener("click", (e) =>{
  e.preventDefault();
  const dpIdNumber = getInputValue("dpIdNumber");
  const dpPinNumber = getInputValue("dpPinNumber");
  // console.log({ dpIdNumber, dpPinNumber });
  if(dpPinNumber === 1234){
    document.getElementById("totalBalance").innerText = totalBalanceParse + dpIdNumber;
    document.getElementById("dpIdNumber").value = '';
    document.getElementById("dpPinNumber").value = '';
  }
  else{
    alert("Error");
  }
})
document.getElementById("wdSubmitBtn").addEventListener("click", (e) =>{
  e.preventDefault();
  const wdAmountInput = getInputValue("wdAmountInput");
  const wdPinNumber = getInputValue("wdPinNumber");
  console.log(wdAmountInput, wdPinNumber);
});



