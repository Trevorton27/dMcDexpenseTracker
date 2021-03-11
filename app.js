const submitBtn = document.querySelector("button");
submitBtn.addEventListener("click", () => {
    createExpenseRow();
})

function createExpenseRow () {
    const tracker = document.querySelector(".table tbody");
    const template = document.querySelector('template');
    const newRow =  template.content.cloneNode(true);
    const newDate = document.querySelector("input[name='date']");
    newRow.querySelector('#date').value = newDate.value
    const newName = document.querySelector("input[name='name']");
    newRow.querySelector('#name').value = newName.value
    // tracker.append(newRow);
    console.log(newRow);
}

// document.addEventListener('DOMContentLoaded', APP.init());