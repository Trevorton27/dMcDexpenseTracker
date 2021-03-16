const APP = {
    submitButton: document.querySelector(".submit"),
    table: document.querySelector("table"),
    date: document.querySelector('.dateInput'),
    expName: document.querySelector('.nameInput'),
    vendor: document.querySelector('.vendorInput'),
    type: document.querySelector('.typeInput'),
    amount: document.querySelector('.amountInput'),
    description: document.querySelector('.descriptionInput'),

    init () {
        resetInputs();
        APP.submitButton.addEventListener("click", () => {
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
    expDate = new Date(APP.date.value);
    content.querySelector('#dateTemp').textContent = expDate.toLocaleDateString([], {year: 'numeric', month: 'numeric', day: 'numeric'})+"\n"+expDate.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
    content.querySelector('#nameTemp').textContent = APP.expName.value
    content.querySelector('#vendorTemp').textContent = APP.vendor.value
    content.querySelector('#typeTemp').textContent = APP.type.value
    content.querySelector('#amountTemp').textContent = APP.amount.value
    content.querySelector('#descriptionTemp').textContent = APP.description.value
    content.querySelector('.delete').addEventListener("click", (e) => {
        deleteExpense (e);
    })
    APP.table.append(content);
    resetInputs();
}    
function deleteExpense (e) {
    APP.table.deleteRow(e.target.closest('tr').rowIndex);
}

document.addEventListener('DOMContentLoaded', APP.init());