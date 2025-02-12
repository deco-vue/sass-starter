<script lang="ts" setup></script>
<template>
  <div class="contact">
    <!-- main -->
    <div class="contact__main">
      <div class="container">
        <h2 class="contact__title title" data-aos="fade-up">
          контакты <span class="rectangle gray"></span><span class="black circle"></span>
        </h2>

        <div class="contact__row">
          <div class="contact-data" data-aos="fade-up">
            <h3 class="contact-data__title">Контактные данные</h3>
            <div class="contact-data__item contact-item">
              <div class="contact-item__icon">
                <IconsPhone />
              </div>
              <div class="contact-item__main">
                <h5 class="contact-item__title">номер телефона</h5>
                <p class="contact-item__text">+998 90 022 87 06</p>
                <p class="contact-item__text">+998 97 701 46 20</p>
              </div>
            </div>
            <div class="contact-data__item contact-item">
              <div class="contact-item__icon">
                <IconsMap />
              </div>
              <div class="contact-item__main">
                <h5 class="contact-item__title">Адрес</h5>
                <p class="contact-item__text">
                  г.Ташкент, Яккасарайский район , ул. Абдуллы Кахара, дом -
                  42А, офис3
                </p>
              </div>
            </div>
            <div class="contact-data__item contact-item">
              <div class="contact-item__icon">
                <IconsEmail />
              </div>
              <div class="contact-item__main">
                <h5 class="contact-item__title">E-mail</h5>
                <p class="contact-item__text">info@w-s-t.uz</p>
              </div>
            </div>
          </div>

          <form @submit.prevent="" class="contact-form" data-aos="fade-up">
            <h3 class="contact-form__title">
              Оставьте заявку, и мы свяжемся с вами в ближайшее время
            </h3>
            <div class="contact-form__row">
              <label for="" class="contact-form__label">
                <input type="text" class="contact-form__input" placeholder="Имя" />
              </label>
              <label for="" class="contact-form__label">
                <input type="text" class="contact-form__input" placeholder="Почта" />
              </label>
              <label for="" class="contact-form__label">
                <input type="text" class="contact-form__input" placeholder="Телефон" />
              </label>
            </div>
            <label class="contact-form__label contact-form__label--textarea">
              <textarea name="message" id="message" rows="3" class="contact-form__input"
                placeholder="Сообщение"></textarea>
            </label>
            <div class="contact-form__footer">
              <button class="contact-form__submit btn black">
                <span>отправить заявку</span>
                <img src="@/assets/images/svg/arrow-top.svg" alt="" />
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
    <!-- main -->
    <!-- map -->
    <div class="contact__map" data-aos="fade-up">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1295.4991772307583!2d69.22482182797452!3d41.278079187797545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b1f06d2e401%3A0x2a1e82604a98b8f3!2sWST!5e0!3m2!1sru!2s!4v1739341666691!5m2!1sru!2s"
        style="border: 0" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <!-- map -->
  </div>
</template>
<style></style>
