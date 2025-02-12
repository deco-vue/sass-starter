<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-in">
        <div class="footer-menu">
          <NuxtLink to="/" class="footer-menu__item">главная</NuxtLink>
          <NuxtLink to="/" class="footer-menu__item">о компании</NuxtLink>
          <NuxtLink to="/" class="footer-menu__item">услуги</NuxtLink>
          <NuxtLink to="/contact" class="footer-menu__item">контакты</NuxtLink>
        </div>
        <div class="footer-contact">
          <div class="footer-contact__item">
            <img src="@/assets/images/svg/phone.svg" alt="Phone">
            <div class="footer-contact__item--links">
              <a class="footer-contact__item--link" href="tel:+998 90 022 87 06">+998 90 022 87 06</a>
              <a class="footer-contact__item--link" href="tel:+998 97 701 46 20">+998 97 701 46 20</a>
            </div>
          </div>
          <div class="footer-contact__item">
            <img src="@/assets/images/svg/location.svg" alt="Location">
            <a class="footer-contact__item--link">г.Ташкент, Яккасарайский район , ул. Абдуллы
              Кахара, дом - 42А, офис 3</a>
          </div>
          <div class="footer-contact__item">
            <img src="@/assets/images/svg/email.svg" alt="Email">
            <a class="footer-contact__item--link" href="mailto:info@wst.uz">info@wst.uz</a>
          </div>
        </div>
        <div class="footer-icon mobile">
          <span class="footer-icon__one"></span>
          <span class="footer-icon__two"></span>
        </div>
        <div class="footer-img mobile">
          <img src="@/assets/images/png/footer.png" alt="">
        </div>
      </div>
    </div>
    <div class="footer-icon desktop">
      <span class="footer-icon__one"></span>
      <span class="footer-icon__two"></span>
    </div>
    <div class="footer-img desktop">
      <img src="@/assets/images/png/footer.png" alt="">
    </div>
  </footer>
</template>

<script lang="ts" setup>

</script>

<style></style>