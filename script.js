let saveLead = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
const ulEl = document.querySelector("#ul-el");

saveLead.addEventListener("click", function() {
    // myLeads.push("www.awesomelead.com");
    myLeads.push(inputEl.value);
    console.log(myLeads);
});

for (let i = 0; i < myLeads.length; i++) {
    console.log(myLeads[i]);
};