<template>
  <nav class="nav" :class="{ active: isMenuOpen }">
    <div class="container">
      <div class="nav-in">
        <NuxtLink to="/" class="nav-logo">
          <img src="@/assets/images/png/logo.png" alt="">
        </NuxtLink>
        <div class="nav-right">
          <div class="nav-circles">
            <div class="nav-circles__item"></div>
            <div class="nav-circles__item"></div>
          </div>
          <button class="nav-hamb" @click="toggleMenu">
            <span class="nav-hamb__el" :class="{ active: isMenuOpen }"></span>
            <span class="nav-hamb__el" :class="{ active: isMenuOpen }"></span>
          </button>
        </div>
      </div>
      <div class="nav-bottom">
        <span class="nav-bottom__line"></span>
        <span class="nav-bottom__circle"></span>
        <span class="nav-bottom__line"></span>
      </div>
      <div class="nav-menu" :class="{ active: isMenuOpen }">
        <NuxtLink @click="toggleMenu" to="/" class="nav-menu__item" data-aos="fade-right">главная</NuxtLink>
        <NuxtLink @click="toggleMenu" to="/" class="nav-menu__item animation-item">о компании</NuxtLink>
        <NuxtLink @click="toggleMenu" to="/" class="nav-menu__item animation-item">услуги</NuxtLink>
        <NuxtLink @click="toggleMenu" to="/contact" class="nav-menu__item animation-item">контакты</NuxtLink>
        <div class="nav-menu__contact">
          <a href="tel:+998 90 022 87 06" class="nav-menu__phone animation-item">+998 90 022 87 06</a>
          <a href="tel:+998 97 701 46 20" class="nav-menu__phone animation-item">+998 97 701 46 20</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
const isMenuOpen = ref(false);
import gsap from "gsap";
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  window.scrollTo(0, 0);
  if (isMenuOpen.value) {
    gsap.fromTo(
      ".animation-item",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.2,
        ease: "power2.out"
      }
    );
  }
};
</script>

<style></style>