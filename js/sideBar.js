document.getElementById('arrowDropUp').addEventListener('click', () => {
   let dropdownMenu = document.getElementById('dropdownMenu');
   if (dropdownMenu.style.visibility == 'hidden') dropdownMenu.style.visibility = 'visible';
   else dropdownMenu.style.visibility = 'hidden';
});
document.getElementById('profileLi').addEventListener('click', () => {
   location.href = 'user.html';
});
document.getElementById('signoutLi').addEventListener('click', () => {
   location.href = 'index.html';
});
