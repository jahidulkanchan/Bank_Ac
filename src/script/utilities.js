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