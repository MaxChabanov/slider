let arrowBack = document.querySelector(".arrow-back");
let arrowForward = document.querySelector(".arrow-forward");
let advantageText1 = document.querySelector(".advantage-list-item1");
let advantageText2 = document.querySelector(".advantage-list-item2");
let advantageText3 = document.querySelector(".advantage-list-item3");
let advantageTitle = document.querySelector(".slider-title");
let slideNumberText = document.querySelector(".slide-number");
let slideImage = document.querySelector(".image");
let bannerContent = document.querySelector(".row");
let blockPaginationItemsArray = document.querySelectorAll(
  ".block-pagination-item"
);

let slide = 1;
function nextSlide(event) {
  slide++;
  playSlideAnimation(event);
}
function previousSlide(event) {
  slide--;
  playSlideAnimation(event);
}

function playSlideAnimation(event) {
  bannerContent.style.animation = "slide-right 0.4s linear";
  setTimeout(() => {
    checkSlideNumber(event);

    bannerContent.style.animation = "slide-right-left-side 0.4s linear";
  }, 400);
}

function checkSlideNumber(event) {
  console.log(event);
  if (
    slide == 1 ||
    event.target.parentElement.id == "block-pagination-item1" ||
    event.target.id == "block-pagination-item1"
  ) {
    slide = 1;
    advantageText1.innerText =
      "Опираемся на стандарты, нормативы и реальную практику эксплуатации";
    advantageText2.innerText =
      "Учитываем технические нюансы и поможем заполнить опросные листы";
    advantageText3.innerText =
      "Беремся за нестандартные задачи и долгосрочные проекты на стадии проработки";

    advantageTitle.innerText =
      "Подбираем оборудование по вашим техническим требованиям";
    slideNumberText.innerText = "1";

    slideImage.src =
      "https://perm.teploprofi.com/www/images/img_carousel_1_2.png";
    blockPaginationItemsArray.forEach((el) => {
      el.className = "block-pagination-item";
    });
    blockPaginationItemsArray[0].className = "pagination-active";
    slideImage.style.marginBottom = "0";
  }

  if (
    slide == 2 ||
    event.target.parentElement.id == "block-pagination-item2" ||
    event.target.id == "block-pagination-item2"
  ) {
    slide = 2;
    advantageText1.innerText =
      "Поддержка профессионалов на каждом этапе работы";
    advantageText2.innerText = "Помогаем разобраться в технических параметрах";
    advantageText3.innerText = "Делаем сделку прозрачной";

    advantageTitle.innerText =
      "Сделаем закупку оборудования максимально простой";
    slideNumberText.innerText = "2";

    slideImage.src =
      "https://perm.teploprofi.com/www/images/img_carousel_2.png";
    slideImage.style.marginBottom = "0";
    blockPaginationItemsArray.forEach((el) => {
      el.className = "block-pagination-item";
    });
    blockPaginationItemsArray[1].className = "pagination-active";
  }
  if (
    slide == 3 ||
    event.target.parentElement.id == "block-pagination-item3" ||
    event.target.id == "block-pagination-item3"
  ) {
    slide = 3;
    advantageText1.innerText = "Организуем бесплатную доставку в Пермь";
    advantageText2.innerText = "Сразу выставляем конкурентные цены";
    advantageText3.innerText = "Просчитываем несколько вариантов под бюджет";

    advantageTitle.innerText = "Экономим ваши деньги и время";
    slideNumberText.innerText = "3";

    slideImage.src =
      "https://perm.teploprofi.com/www/images/img_carousel_3.png";
    slideImage.style.marginBottom = "5.55rem";
    blockPaginationItemsArray.forEach((el) => {
      el.className = "block-pagination-item";
    });
    blockPaginationItemsArray[2].className = "pagination-active";
  }
  if (
    slide == 4 ||
    event.target.parentElement.id == "block-pagination-item4" ||
    event.target.id == "block-pagination-item4"
  ) {
    slide = 4;
    advantageText1.innerText = "Отвечаем за груз, пока он не будет доставлен";
    advantageText2.innerText = "Выдерживаем обозначенные сроки поставки";
    advantageText3.innerText = "Всё оборудование застраховано";

    advantageTitle.innerText = "Гарантируем надёжную поставку";
    slideNumberText.innerText = "4";

    slideImage.src =
      "https://perm.teploprofi.com/www/images/img_carousel_4.png";
    blockPaginationItemsArray.forEach((el) => {
      el.className = "block-pagination-item";
    });
    blockPaginationItemsArray[3].className = "pagination-active";
    slideImage.style.marginBottom = "1.85rem";
  }

  if (slide == 0) {
    slide = 4;
    advantageText1.innerText = "Отвечаем за груз, пока он не будет доставлен";
    advantageText2.innerText = "Выдерживаем обозначенные сроки поставки";
    advantageText3.innerText = "Всё оборудование застраховано";

    advantageTitle.innerText = "Гарантируем надёжную поставку";
    slideNumberText.innerText = "4";

    slideImage.src =
      "https://perm.teploprofi.com/www/images/img_carousel_4.png";
    blockPaginationItemsArray.forEach((el) => {
      el.className = "block-pagination-item";
    });
    blockPaginationItemsArray[3].className = "pagination-active";
    slideImage.style.marginBottom = "1.85rem";
  } else if (slide == 5) {
    slide = 1;
    advantageText1.innerText =
      "Опираемся на стандарты, нормативы и реальную практику эксплуатации";
    advantageText2.innerText =
      "Учитываем технические нюансы и поможем заполнить опросные листы";
    advantageText3.innerText =
      "Беремся за нестандартные задачи и долгосрочные проекты на стадии проработки";

    advantageTitle.innerText =
      "Подбираем оборудование по вашим техническим требованиям";
    slideNumberText.innerText = "1";

    slideImage.src =
      "https://perm.teploprofi.com/www/images/img_carousel_1_2.png";
    blockPaginationItemsArray.forEach((el) => {
      el.className = "block-pagination-item";
    });
    blockPaginationItemsArray[0].className = "pagination-active";
    slideImage.style.marginBottom = "0";
  }
}

arrowForward.onclick = function (event) {
  nextSlide(event);
};
arrowBack.onclick = function (event) {
  previousSlide(event);
};

blockPaginationItemsArray.forEach((element) => {
  element.onclick = function (event) {
    playSlideAnimation(event);
  };
});
