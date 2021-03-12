const APP = {
    submitBtn: document.querySelector("button"),
    table: document.querySelector("table"),
    date: document.querySelector('.dateInput'),
    expName: document.querySelector('.nameInput'),
    vendor: document.querySelector('.vendorInput'),
    type: document.querySelector('.typeInput'),
    amount: document.querySelector('.amountInput'),
    description: document.querySelector('.descriptionInput'),
    deleteButton: document.querySelector('.delete'),

    init () {
        resetInputs();
        APP.submitBtn.addEventListener("click", () => {
            createExpenseRow();
        });
    }
}
function dateTimeDisplay() {
    const dateTime = new Date();
    dateTime.setMinutes(dateTime.getMinutes() - dateTime.getTimezoneOffset());
    dateTime.setMilliseconds(null);
    dateTime.setSeconds(null);
    document.querySelector('.dateInput').value = dateTime.toISOString().slice(0, -1);
}
function resetInputs (){
    dateTimeDisplay();
    APP.expName.value = "";
    APP.vendor.value = "";
    APP.type.value = "";
    APP.amount.value = "";
    APP.description.value = "";
}
function createExpenseRow () {
    i = APP.table.rowIndex
    const template = document.querySelector('template');
    const content = template.content.cloneNode(true)
    const deleteButton = document.querySelector('.delete')
    content.querySelector('#dateTemp').textContent = APP.date.value
    content.querySelector('#nameTemp').textContent = APP.expName.value
    content.querySelector('#vendorTemp').textContent = APP.vendor.value
    content.querySelector('#typeTemp').textContent = APP.type.value
    content.querySelector('#amountTemp').textContent = APP.amount.value
    content.querySelector('#descriptionTemp').textContent = APP.description.value
    document.getElementsByClassName('delete').innerHTML = deleteButton
    APP.table.appendChild(content);
    deleteButton.addEventListener("click", (e) => {
        // deleteRow(e);
        console.log("duane is awesome!")
    })
    resetInputs();
}
function deleteRow(e) {
    var i = e.parentNode.parentNode.rowIndex;
    APP.table.deleteRow(i);
}
    //localStorage.removeItem(key);
    
document.addEventListener('DOMContentLoaded', APP.init());