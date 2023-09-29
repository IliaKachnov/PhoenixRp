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

  // Добавляем обработчик клика на заголовок
  title.addEventListener('click', function () {
    // Убираем класс hide у контейнера элементов
    itemsContainer.classList.toggle('hide');
  });

  // Перебираем все элементы .dropdown__type-item
  items.forEach(function (item) {
    item.addEventListener('click', function () {
      const altText = item.querySelector('img').getAttribute('alt');
      title.textContent = altText;

      // Добавляем класс hide обратно к контейнеру элементов
      itemsContainer.classList.add('hide');
    });
  });
});