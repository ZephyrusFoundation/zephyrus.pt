<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';

const { t } = useI18n();

const slides = [
  {
    title: t('slides.dynatriSoft.title'),
    description: t('slides.dynatriSoft.description'),
    image: "/images/dynatrisoft.jpg",
    logo: "/brands/dynatrisoft.png",
    button: "https://dynatrisoft.com",
    coming: true,
  },
  {
    title: t('slides.bitwo.title'),
    description: t('slides.bitwo.description'),
    image: "/images/bitwo.jpg",
    logo: "/brands/bitwo.png",
    button: "https://bitwo.io",
    coming: true,
  },
  {
    title: t('slides.granport.title'),
    description: t('slides.granport.description'),
    image: "/images/granport.jpg",
    logo: "/brands/granport.png",
    button: "https://granport.pt",
    coming: true,
  },
  {
    title: t('slides.zephyrusFoundation.title'),
    description: t('slides.zephyrusFoundation.description'),
    image: "/images/zephyrus-foundation.jpg",
    logo: "/brands/zephyrus-foundation.png",
    button: "https://zephyrus-foundation.org",
    coming: true,
  }
]
</script>

<template>
  <Swiper
    :modules="[
      SwiperPagination,
      SwiperAutoplay,
      SwiperNavigation,
      SwiperEffectCreative
    ]"
    :spaceBetween="50"
    :slidesPerView="1"
    :navigation="false"
    :loop="true"
    :effect="'creative'"
    :creative-effect="{
      prev: {
        shadow: false,
        translate: ['-20%', 0, -1],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    }"
    :pagination="{
      clickable: true,
    }"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }">
    <SwiperSlide v-for="(slide, index) in slides" :key="index">
      <div
          class="hero bg-primary min-h-screen"
          :style="slide.image ? `background-image: url(${slide.image});` : ''">
        <div class="hero-overlay bg-black bg-opacity-75" v-if="slide.image"></div>
        <div class="hero-content text-neutral-content text-center">
          <div class="max-w-lg">
            <div class="mb-5">
              <h1 class="text-5xl font-bold mb-1">
                {{ slide.title }}
              </h1>
              <span v-if="slide.coming" class="badge badge-warning">
              {{ t('comingSoon') }}
            </span>
            </div>
            <p class="mb-5">
              {{ slide.description }}
            </p>
            <button v-if="slide.button" class="btn btn-primary" :disabled="slide.coming">
              {{ t('viewMore') }}
            </button>
          </div>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<style scoped>
</style>