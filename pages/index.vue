<template>
  <div>
    <header class="header">
      <div class="container">
        <div class="header-in">
          <h1 class="title" data-aos="fade-up">
            ИННОВАЦИОННЫЕ <br>
            <span class="rectangle gray"></span> <span class="black circle"></span> <span class="pr-text">ТЕХНОЛОГИИ
              <br>
            </span> ДЛЯ НЕФТЕГАЗОВОЙ И <span class="black circle"></span> <br>
            <span class="primary circle"></span> ЭНЕРГЕТИЧЕСКОЙ ОТРАСЛИ
          </h1>
          <p class="header-desc" data-aos="fade-up">
            Разрабатываем и внедряем передовые инженерные решения. роектирование, производство, монтаж и пусконаладка
            под ключ
          </p>
          <div class="header-btns">
            <button class="btn">
              О компании
            </button>
            <button class="btn black">
              Заказать проект
              <IconsPointerTop :size="`18px`" :color="`#fff`" />
            </button>
          </div>
          <div class="header-right" data-aos="fade-up">
            <div class="header-cyclework">
              Полный <br> цикл работ
              <span class="header-cyclework__item">
                <img src="@/assets/images/svg/cycle-1.svg" alt="">
              </span>
              <span class="header-cyclework__item">
                <img src="@/assets/images/svg/cycle-2.svg" alt="">
              </span>
              <span class="header-cyclework__item">
                <img src="@/assets/images/svg/cycle-3.svg" alt="">
              </span>
              <span class="header-cyclework__item">
                <img src="@/assets/images/svg/cycle-5.svg" alt="">
              </span>
              <span class="header-cyclework__item">
                <img src="@/assets/images/svg/cycle-6.svg" alt="">
              </span>
            </div>
            <div class="header-projects">
              <span><b>100+</b> <br>
                проектов</span>
              <div class="header-projects__icons">
                <span>+</span>
                <span>-</span>
              </div>
            </div>
            <div class="header-technologies">
              <p>
                <b>50+</b> <br>
                Технологий внедрено
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>

    <section class="gallery" data-aos="fade-up">
      <div class="container" ref="container">
        <div class="gallery-nav">
          <div class="gallery-nav__left">
            <p>
              Разрабатываем и внедряем передовые инженерные решения. роектирование, производство, монтаж и пусконаладка
              под ключ
            </p>
            <div class="gallery-nav__btns">
              <button class="btn">
                О компании
              </button>
              <button class="btn black">
                Заказать проект
                <IconsPointerTop :size="`18px`" :color="`#fff`" />
              </button>
            </div>
          </div>
          <div class="gallery-nav__right">
            <button @click="scrollSlider('next')" class="btn longer">
              <IconsPointerRight :size="`32px`" :color="`#000`" />
            </button>
            <button @click="scrollSlider('prev')" class="btn black longer">
              <IconsPointerLeft :size="`32px`" :color="`#fff`" />
            </button>
          </div>
        </div>
        <div class="gallery-container" :style="{ width: sliderWidth + 'px' }" ref="sliderRef">
          <div class="gallery-content">
            <div class="gallery-content__item item-1">
              <img class="item-1__img" src="@/assets/images/png/slider-1.png" alt="Img">
              <img class="item-1__icon" src="@/assets/images/svg/item-1.svg" alt="">
            </div>
            <div class="gallery-content__item item-2">
              <img class="item-2__connecter" src="@/assets/images/svg/connect-1.svg" alt="">
              <div class="item-2__top">
                <p>Ключевой <br> продукт:</p>
                <span>Фильтры- <br> сепараторы</span>
              </div>
              <div class="item-2__bottom">
                <IconsStar v-for="item in 4" :key="item" :size="`24px`" />
                <IconsStarEmpty :size="`24px`" />
              </div>
            </div>
            <div class="gallery-content__item item-3">
              <img src="@/assets/images/png/slider-2.png" alt="Img">
              <span class="item-3__icon"></span>
            </div>
            <div class="gallery-content__item item-4">
              <div class="item-4__icons">
                <span v-for="item in 11" :key="item"></span>
              </div>
              <img class="item-4__connecter" src="@/assets/images/svg/connecter-2.svg" alt="img">
              <span class="item-4__year">2025</span>
              <div class="item-4__text">
                <p>Производственный цикл:</p>
                <p>Полный цикл работ</p>
              </div>
              <span class="item-4__bottom"></span>
            </div>
            <div class="gallery-content__item item-5">
              <img src="@/assets/images/png/slider-3.png" alt="Img">
            </div>
            <div class="gallery-content__item item-6">
              <img src="@/assets/images/png/slider-4.png" alt="Img">
            </div>
            <div class="gallery-content__item item-7">
              <img class="item-7__connecter" src="@/assets/images/svg/connect-3.svg" alt="">
              <h1 class="item-7__title">Гарантия эффективности</h1>
              <div class="item-7__cards">
                <div class="item-7__card" v-for="item in 3" :key="item"></div>
              </div>
              <div class="item-7__info">
                <span>99,9%</span>
                <div class="item-7__stars">
                  <IconsStar v-for="item in 4" :key="item" :color="`#000`" />
                  <IconsStarEmpty :color="`#000`" />
                </div>
              </div>
              <div class="item-7__images">
                <div class="item-7__image">
                  <img src="@/assets/images/png/item-7.1.png" alt="img">
                </div>
                <div class="item-7__image">
                  <img src="@/assets/images/png/item-7.2.png" alt="img">
                </div>
                <div class="item-7__image">
                  <img src="@/assets/images/png/item-7.3.png" alt="img">
                  <span class="item-7__image--arrow">
                    <img src="@/assets/images/svg/arrow-top-black.svg" alt="img">
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="partner">
      <div class="partner-nav" data-aos="fade-up">
        <div class="container">
          <div class="partner-nav__in">
            <div class="partner-nav__logo">
              <img src="@/assets/images/png/partner-logo.png" alt="logo">
            </div>
            <button class="partner-nav__btn">
              <IconsSearch />
              поиск по сайту
            </button>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="partner-content" data-aos="fade-up">
          <div class="partner-content__left">
            <h1 class="title">
              <span class="partner-content__one">W-S-T TECHNOLOGIES <span class="line"></span></span>
              <span class="partner-content__two">Ваш надежный партнер в нефтегазовой</span>
              <span class="partner-content__three">отрасли</span>
            </h1>
            <h1 class="title partner-content__shapes">
              <span class="circle primary"></span>
              <span class="rectangle gray"></span>
            </h1>
          </div>
          <div class="partner-content__right">
            <span class="partner-content__right--icons">
              <span class="circle black"></span>
              <span class="circle white"></span>
              <span class="circle black"></span>
            </span>
            <img src="@/assets/images/png/partner.png" alt="img">
          </div>
        </div>
      </div>
    </section>

    <section class="advantages" data-aos="fade-up">
      <div class="advantages-in">
        <div class="advantages-card__one">
          <div class="advantages-card__item">
            <b>-> Полный цикл работ</b> – от проектирования до ввода в эксплуатацию.
          </div>
          <div class="advantages-card__item">
            <b>-> Передовые технологии</b> – инновационные разработки и собственное производство.
          </div>
          <div class="advantages-card__item">
            <b>-> Опыт и экспертиза</b>– реализуем проекты любой сложности.
          </div>
          <div class="advantages-card__item">
            <b>-> Гарантия качества</b> – соответствие международным стандартам.
          </div>
        </div>
        <div class="advantages-card__two">
          <div class="advantages-card__two--img">
            <img src="@/assets/images/png/advantages.png" alt="img">
            <span class="advantages-card__two--icon">
              <IconsPointerTop :size="`20px`" :color="`#000`" />
            </span>
          </div>
        </div>
        <div class="advantages-card__three">
          Мы разрабатываем и производим высокотехнологичное оборудование для газовой, нефтяной и энергетической
          отрасли. Работая по принципу «под ключ», мы обеспечиваем полный цикл: проектирование, производство,
          поставку, монтаж и пусконаладку.
        </div>
        <div class="advantages-card__four">
          <div class="advantages-card__four--items">
            <div class="circle black"></div>
            <div class="circle white"></div>
            <div class="circle black"></div>
          </div>
        </div>
      </div>
    </section>

    <div class="line"></div>

    <section class="keys">
      <div class="container">
        <h1 class="title" data-aos="fade-up">
          Наши ключевые <span class="circle black"></span> направления <span class="rectangle gray"></span>
        </h1>
        <div class="keys-content">
          <div class="keys-card" v-for="item in 4" :key="item" data-aos="flip-right">
            <div class="keys-card__main">
              <div class="keys-card__head">
                <h4 class="keys-card__title">
                  Монтаж и пусконаладка
                </h4>
                <p class="keys-card__text">
                  Доставка оборудования в любую точку, соблюдая сроки и требования
                </p>
              </div>
              <div class="keys-card__bottom">
                <span class="keys-card__shape" :class="item === 1 ? 'keys-card__shape--fill' : ''"></span>
                <span class="keys-card__shape" :class="item === 2 ? 'keys-card__shape--fill' : ''"></span>
                <span class="keys-card__shape" :class="item === 3 ? 'keys-card__shape--fill' : ''"></span>
                <span class="keys-card__shape" :class="item === 4 ? 'keys-card__shape--fill' : ''"></span>
              </div>
            </div>
            <div v-if="item === 4" class="keys-card__circle"></div>
          </div>
        </div>
      </div>
    </section>

    <section class="projects">
      <div class="container">
        <div class="projects-content">
          <div class="projects-five">
            <div class="projects-five__three">
              <div class="projects-card projects-translate" data-aos="flip-right">
                <img src="@/assets/images/png/project-1.png" alt="Img">
              </div>
              <div class="projects-card" data-aos="flip-right">
                <img src="@/assets/images/png/project-4.png" alt="Img">
              </div>
              <div class="projects-card projects-translate" data-aos="flip-right">
                <img src="@/assets/images/png/project-img.png" alt="Img">
              </div>
            </div>
            <div class="projects-wrapper">
              <div class="projects-five__two">
                <div class="projects-card projects-translate" data-aos="flip-right">
                  <img src="@/assets/images/png/project-3.png" alt="Img">
                </div>
                <div class="projects-card projects-card__small" data-aos="flip-right">
                  <img src="@/assets/images/png/project-2.png" alt="Img">
                </div>
              </div>
              <div class="projects-five__one">
                <div class="projects-card projects-translate" data-aos="flip-right">
                  <img src="@/assets/images/png/project-5.png" alt="Img">
                </div>
              </div>
            </div>
          </div>
          <div class="projects-content__center">
            <div class="projects-card" data-aos="flip-right">
              <img src="@/assets/images/png/project-6.png" alt="Img">
            </div>
          </div>
          <div class="projects-five">
            <div class="projects-wrapper">
              <div class="projects-five__one">
                <div class="projects-card projects-translate" data-aos="flip-right">
                  <img src="@/assets/images/png/project-7.png" alt="Img">
                </div>
              </div>
              <div class="projects-five__two">
                <div class="projects-card" data-aos="flip-right">
                  <img src="@/assets/images/png/project-8.png" alt="Img">
                </div>
                <div class="projects-card projects-card__small projects-translate" data-aos="flip-right">
                  <img src="@/assets/images/png/project-2.png" alt="Img">
                </div>
              </div>
            </div>
            <div class="projects-five__three">
              <div class="projects-card projects-translate" data-aos="flip-right">
                <img src="@/assets/images/png/project-1.png" alt="Img">
              </div>
              <div class="projects-card" data-aos="flip-right">
                <img src="@/assets/images/png/project-4.png" alt="Img">
              </div>
              <div class="projects-card projects-translate" data-aos="flip-right">
                <img src="@/assets/images/png/project-3.png" alt="Img">
              </div>
            </div>
          </div>
        </div>
        <div class="projects-info" data-aos="fade-up">
          <h1 class="projects-info__title">
            Наши реализованные проекты
          </h1>
          <h1 class="projects-info__text">
            Доверие ведущих предприятий нефтегазовой и энергетической отрасли
          </h1>
          <p class="projects-info__description">
            Предоставляем передовые инженерные решения для нефтегазовой и энергетической промышленности. Полный цикл
            услуг – от проектирования до монтажа.
          </p>
          <button class="btn black">
            перейти в услуги
            <IconsPointerTop :size="`20px`" :color="`#fff`" />
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="js" setup>
const sliderRef = ref(null);
const container = ref(null);
const sliderWidth = computed(() => {
  return container.value?.clientWidth - 12
})
const scrollAmount = 300;

const scrollSlider = (direction) => {
  if (sliderRef.value) {
    if (direction === "next") {
      sliderRef.value.scrollLeft += scrollAmount;
    } else {
      sliderRef.value.scrollLeft -= scrollAmount;
    }
  }
};
</script>

<style></style>