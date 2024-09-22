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
  if(dpPinNumber === 1234 && !isNaN(dpIdNumber)){
    document.getElementById("totalBalance").innerText = totalBalanceParse + dpIdNumber;
    document.getElementById("dpIdNumber").value = '';
    document.getElementById("dpPinNumber").value = '';
    // =============== Transaction History ===================

    // ================== using innerText ================= 

    // const historyDoc = document.createElement("h1");
    // historyDoc.classList.add("mx-5", "flex" , "justify-between", "bg-green-500", "px-5", "items-center","mt-3", "py-3");
    // historyDoc.innerText = `Deposite Amount - ${dpIdNumber}`
    // document.getElementById("hsForm").appendChild(historyDoc);

    // Using innerHTML ============== (Better then innerText =============)
    // const historyDoc = document.createElement("div");
    // historyDoc.innerHTML = `
    // <h1 class="mx-5 flex items-center justify-between px-5 bg-green-500 mt-3 py-3">${dpIdNumber}<i class="text-2xl fa-solid fa-arrow-right-long"></i></h1>
    // `
    // document.getElementById('hsForm').appendChild(historyDoc);

    // another Method using function ============================
    transactionHistory("hsForm", dpIdNumber,"bg-green-500","fa-arrow-left-long");
  }
  else{
    alert("Error");
  }
});
// withDrawButton =======================================
document.getElementById("wdSubmitBtn").addEventListener("click", (e) =>{
  e.preventDefault();
  let totalBalance = document.getElementById("totalBalance").innerText;
  let totalBalanceParse = parseFloat(totalBalance);
  const wdAmountInput = getInputValue("wdAmountInput");
  const wdPinNumber = getInputValue("wdPinNumber");

  if(wdPinNumber === 1234 && wdAmountInput <= totalBalanceParse && !isNaN(wdAmountInput)) {
    document.getElementById("totalBalance").innerText = totalBalanceParse - wdAmountInput;
    document.getElementById("wdAmountInput").value = '';
    document.getElementById("wdPinNumber").value = '';

    // =========== Transaction History ============
    // const historyDoc = document.createElement("h1");
    // historyDoc.classList.add("mx-5", "flex" , "justify-between", "bg-orange-300", "px-5", "items-center","mt-3", "py-3");
    // historyDoc.innerText = `Withdraw Amount - ${wdAmountInput}`
    // console.log(historyDoc.innerText)
    // document.getElementById("hsForm").appendChild(historyDoc);

    // another Method using function ============================
    transactionHistory("hsForm", wdAmountInput , "bg-orange-300", "fa-arrow-right-long");
  }
  else{
    alert("Error");
  }
  
});



