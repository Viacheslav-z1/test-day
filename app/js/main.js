// $("#rateYo").rateYo({
//   rating: 3.6,
// });

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "custom",
    clickable: true, // Делает пагинацию кликабельной
     renderCustom: function (swiper, current, total) {
      var paginationHtml = ''; // Инициализируем переменную для хранения HTML пагинации

      for (var i = 0; i < total; i++) {
        // Создаем HTML-код для каждого номера слайда
        var slideNumber = (i + 1).toString().padStart(2, '0'); // Добавляем ведущий ноль перед числами
        var activeClass = current === (i+1) ? 'active' : ''; // Добавляем класс "active" для текущего слайда
        paginationHtml += '<span class="' + activeClass + '">' + slideNumber + '</span>';
      }

      return paginationHtml; // Возвращаем HTML-код пагинации
    },
  },
});

var paginationItems = document.querySelectorAll(
  ".custom-pagination span"
);
paginationItems.forEach(function (item) {
  item.addEventListener("click", function () {
    var slideIndex = parseInt(this.getAttribute("data-slide-index"));
    swiper.slideTo(slideIndex);
  });
});

/**tabs product*/


let tabsProduct = document.querySelectorAll(".products__tab-btn");
let tabsContentProduct = document.querySelectorAll(".products__list");

let tabsTrends = document.querySelectorAll(".trends__tab-btn");
let tabsContentTrends = document.querySelectorAll(".tabs-content-js");

tabsProduct.forEach((tab, i) => {
  tab.addEventListener("click", (e) => {
    e.preventDefault();
    hideTabsContent(tabsContentProduct);
    showTab(tabsContentProduct, i, tabsProduct);
  });
});


hideTabsContent(tabsContentProduct); 
removeActiveTabs(tabsProduct);
showTab(tabsContentProduct, 0, tabsProduct);




/**Tab trends */

tabsTrends.forEach((tab, i) => {
  tab.addEventListener("click", (e) => {
    e.preventDefault();
    hideTabsContent(tabsContentTrends);
     removeActiveTabs(tabsTrends);
    showTab(tabsContentTrends, i, tabsTrends);
  });
});


hideTabsContent(tabsContentTrends);
removeActiveTabs(tabsTrends);
showTab(tabsContentTrends, 0, tabsTrends);





function hideTabsContent(arr) {
  arr.forEach((tab) => {
    tab.classList.add("none");
  });
}

function showTab(arr,index, tabs) {
  arr[index].classList.remove("none");
  removeActiveTabs(tabs);
  tabs[index].classList.add('active')
}

function removeActiveTabs(tabs) {
  tabs.forEach(tab => {
    tab.classList.remove('active')
  });
}




/**smooth scroll */
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute("href").substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}