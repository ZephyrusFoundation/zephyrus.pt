<script setup lang="ts">
import useProjects from "~/composable/useProjects";

const projects = useProjects();
</script>

<template>
  <div class="py-3 bg-base-200">
    <Swiper
        :modules="[SwiperAutoplay]"
        :slides-per-view="projects.length < 5 ? projects.length : 5"
        :loop="true"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: true,
        }"
        :breakpoints="{
          640: {
            slidesPerView: projects.length < 2 ? projects.length : 2,
            spaceBetween: 20
          },
          768: {
            slidesPerView: projects.length < 4 ? projects.length : 4,
            spaceBetween: 30
          },
          1024: {
            slidesPerView: projects.length < 5 ? projects.length : 5,
            spaceBetween: 40
          }
        }"
        class="company-logos-swiper mx-auto"
    >
      <SwiperSlide v-for="project in projects">
        <a :href="`https://${project.url}/`" target="_blank" class="flex flex-wrap flex-col justify-center items-center mx-auto" v-if="project.name || project.image">
          <img :src="project.image" :alt="project.name" class="h-12" v-if="project.image" />
          <span v-if="project.name">
            {{ project.name }}
          </span>
        </a>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style scoped>
.company-logos-swiper img {
  max-height: 80px;
}
</style>
