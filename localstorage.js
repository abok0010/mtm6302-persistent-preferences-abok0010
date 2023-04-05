const $switchTheme = document.getElementById('colors');

$switchTheme.addEventListener('change', function() {
  colorMode();
  localStorage.setItem('theme', $switchTheme.value);
});

function colorMode() {
    const selectedTheme = $switchTheme.value;
    document.body.classList = selectedTheme;
  }
  
const themeLs = localStorage.getItem('theme');


if(themeLs){
  $switchTheme.value = themeLs;
}

colorMode();

