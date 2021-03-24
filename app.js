const APP = {
  submitButton: document.querySelector('.submit'),
  table: document.querySelector('table'),
  date: document.querySelector('.dateInput'),
  expName: document.querySelector('.nameInput'),
  vendor: document.querySelector('.vendorInput'),
  type: document.querySelector('.typeInput'),
  amount: document.querySelector('.amountInput'),
  description: document.querySelector('.descriptionInput'),

  init() {
    resetInputs();
    APP.submitButton.addEventListener('click', () => {
      validateForm()
        ? alert('Please fill out all fields before submitting.')
        : createExpenseRow();
    });
  }
};

function resetInputs() {
  dateTimeDisplay();
  APP.expName.value = '';
  APP.vendor.value = '';
  APP.type.value = '';
  APP.amount.value = '';
  APP.description.value = '';
}
function dateTimeDisplay() {
  const dateTime = new Date();
  dateTime.setMinutes(dateTime.getMinutes() - dateTime.getTimezoneOffset());
  dateTime.setMilliseconds(null);
  dateTime.setSeconds(null);
  document.querySelector('.dateInput').value = dateTime
    .toISOString()
    .slice(0, -1);
}
function createExpenseRow() {
  const template = document.querySelector('template');
  const content = template.content.cloneNode(true);
  content.querySelector('#dateTemp').textContent = formatExpTime();
  content.querySelector('#nameTemp').textContent = APP.expName.value;
  content.querySelector('#vendorTemp').textContent = APP.vendor.value;
  content.querySelector('#typeTemp').textContent = APP.type.value;
  content.querySelector('#amountTemp').textContent = formatAmount(
    APP.amount.value
  );
  content.querySelector('#descriptionTemp').textContent = APP.description.value;
  content.querySelector('.delete').addEventListener('click', (e) => {
    deleteExpense(e);
  });
  APP.table.append(content);
  resetInputs();
}
function formatExpTime() {
  expDate = new Date(APP.date.value);
  date =
    expDate.toLocaleDateString([], {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric'
    }) +
    '\n' +
    expDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  return date;
}
function deleteExpense(e) {
  APP.table.deleteRow(e.target.closest('tr').rowIndex);
}

function validateForm() {
  const { date, expName, vendor, type, amount, description } = APP;
  if (
    !date.value ||
    !expName.value ||
    !vendor.value ||
    !type.value ||
    !description.value
  )
    return true;
}

function formatAmount(amount) {
  return (amount = parseFloat(amount).toFixed(2));
}

document.addEventListener('DOMContentLoaded', APP.init());
