document.getElementById('logAddBtn').addEventListener('click', () => {
   document.getElementById('loggingSection').style.display = '';
   document.getElementById('darkenPage').style.display = '';
});
document.getElementById('closeLoggingSectionBtn').addEventListener('click', () => {
   document.getElementById('loggingSection').style.display = 'none';
   document.getElementById('darkenPage').style.display = 'none';
});
document.getElementById('darkenPage').addEventListener('click', () => {
   document.getElementById('loggingSection').style.display = 'none';
   document.getElementById('darkenPage').style.display = 'none';
});
document.getElementById('income').addEventListener('change', () => {
   document.getElementById('income-category').style.display = '';
   document.getElementById('expense-category').style.display = 'none';
});
document.getElementById('expense').addEventListener('change', () => {
   document.getElementById('income-category').style.display = 'none';
   document.getElementById('expense-category').style.display = '';
});
function success(e) {
   e.preventDefault();
   document.getElementById('loggingSection').style.display = 'none';
   document.getElementById('darkenPage').style.display = 'none';
   document.getElementById('alert').style.display = '';
   setTimeout(() => {
      document.getElementById('alert').style.display = 'none';
   }, 3000);
}
document.getElementById('closeAlertBtn').addEventListener('click', () => {
   document.getElementById('alert').style.display = 'none';
});
