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




