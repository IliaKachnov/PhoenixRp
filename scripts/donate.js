document.addEventListener('DOMContentLoaded', function () {
  const dropdownItems = document.querySelectorAll('.server__dropdown-item');
  const serverTitle = document.querySelector('.server__title');
  const dropdownItemsContainer = document.querySelector('.server__dropdown-items');

  const titleWrapper = document.querySelector('.server__title-wrapper');
  titleWrapper.addEventListener('click', function () {
    dropdownItemsContainer.classList.toggle('hide');
  });
  dropdownItems.forEach(function (item) {
    item.addEventListener('click', function () {
      const dropdownTitle = item.querySelector('.server__dropdown-title').textContent;
      serverTitle.innerHTML = `<img src="img/icons/menu.svg">${dropdownTitle}`;
      dropdownItemsContainer.classList.add('hide');
    });
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const title = document.querySelector('.dropdown__type-title');
  const itemsContainer = document.querySelector('.dropdown__type-items');
  const items = document.querySelectorAll('.dropdown__type-item');
  title.addEventListener('click', function () {
    itemsContainer.classList.toggle('hide');
  });
  items.forEach(function (item) {
    item.addEventListener('click', function () {
      const altText = item.querySelector('img').getAttribute('alt');
      title.textContent = altText;
      itemsContainer.classList.add('hide');
    });
  });
});