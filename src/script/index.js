// This step for login interface =========================

const loginBtn = document.getElementById("loginBtn");
const formId = document.getElementById("form");
loginBtn.addEventListener("click", (e)=>{
  e.stopPropagation();
  formId.classList.remove("scale-0","opacity-0");
  formId.classList.add("scale-100");
  console.log("i am working as btn")
});
// If Clicked outside of form it will be disabled ===========================
document.addEventListener("click", (e)=>{
  if(!formId.contains(e.target) && e.target !== loginBtn){
    formId.classList.add("scale-0","opacity-0");
    formId.classList.remove("scale-100");
  }
});


// login form Interaction ===================================
const getInputValueId = (id)=>{
  const inputValue = document.getElementById(id).value;
  const inputParseValue = parseFloat(inputValue);
  return inputParseValue;
}

// ===============================================


document.getElementById("submitBtn").addEventListener("click", (e) => {
  e.preventDefault();
    const idNumber = getInputValueId('idNumber');
    const pinNumber = getInputValueId('pinNumber');
    
    if(pinNumber === 1234){
      console.log(idNumber, pinNumber);
      window.location.href = "bank.html"
    }
    else(
      alert("wrong pin Or ID Number")
    )
})