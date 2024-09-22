const showFormIterface = (id)=>{
  document.getElementById("dpForm").style.display = "none";
  document.getElementById("wdForm").style.display = "none";
  document.getElementById("hsForm").style.display = "none";
  const showId = document.getElementById(id).style.display = "block";
  return showId;
}


// Deposit Field Setup ===================================
const getInputValue = (id)=>{
  const getInputValueId = document.getElementById(id).value;
  const getInputParseValue = parseFloat(getInputValueId);
  return getInputParseValue;
}


// transaction history  =======================================
// const transactionHistory = (id, amountValue , classname)=>{
//   const historyDoc = document.createElement("h1");
//   historyDoc.classList.add("mx-5", "flex" , "justify-between", classname, "px-5", "items-center","mt-3", "py-3");
//   historyDoc.innerText = `Deposite Amount - ${amountValue}`
//   const output = document.getElementById(id).appendChild(historyDoc);
//   return output;
// }

// ============== innerHTML is Better =============

const transactionHistory = (id, amountValue,classname,icon)=>{
  const historyDoc = document.createElement("div");
  historyDoc.innerHTML = `
  <h1 class="mx-5 flex items-center justify-between px-5 ${classname} mt-3 py-3">${amountValue}<i class="text-2xl fa-solid ${icon}"></i></h1>
  `
  const output = document.getElementById(id).appendChild(historyDoc);
  return output;
}