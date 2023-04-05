const $items=['Item 1', 'Item 2','Item 3', 'Item 4', 'Item 5']
const theList = document.getElementById('list');


for ( let i =0; i< $items.length; i++){
    const content = document.createElement('li');
   content.textContent = $items[i];
  theList.appendChild(content);
}

const $listStyleSelect = document.getElementById('list-style-select');

$listStyleSelect.addEventListener('change', function () {
  const selectedStyle = $listStyleSelect.value;
  theList.classList = selectedStyle;
});

