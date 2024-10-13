document.getElementById('primaryButton').addEventListener('click', function() {
    alert('Button has been clicked!');
});

// وظيفة إضافية لإضافة عنصر ديناميكي للقائمة
function addDynamicListItem(itemText) {
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    li.textContent = itemText;
    ul.appendChild(li);
    document.body.appendChild(ul);
}

addDynamicListItem('Dynamically added item');