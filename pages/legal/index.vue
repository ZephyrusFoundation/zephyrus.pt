<script setup lang="ts">
const { t, locale } = useI18n();

const truncateText = (text?: string, maxLength: number = 100, maxWordLength: number = 20): string|null => {
  if (!text) return null;

  if (text.length > maxLength) {
    const truncated = text.substring(0, maxLength);
    const lastSpaceIndex = truncated.lastIndexOf(' ');

    if (text.substring(lastSpaceIndex + 1).length > maxWordLength) {
      return truncated + '...';
    }

    return truncated.substring(0, lastSpaceIndex) + '...';
  }
  return text;
}


const getLocale = computed(() => parseLocale(locale?.value));

const path = `/${getLocale.value}/legal/${getLocale.value}` as string;

const removeLanguage = (path?: string): string|null => {
  if (!path) return null;
  return path.replace(/^\/[a-z]{2}\//, '');
}
</script>


<template>
  <main class="container mx-auto p-4">
    <section class="text-center py-8">
      <h1 class="text-4xl font-bold mb-2">{{ t('legal.title') }}</h1>
      <p class="text-lg text-gray-600">{{ t('legal.subtitle') }}</p>
    </section>

    <LazyContentList :path="`/${getLocale}/legal`" v-slot="{ list }">
      <ul class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <li v-for="article in list" :key="article._path">
          <div class="card w-full h-full bg-base-200 shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <div class="card-body">
              <h2 class="card-title py-2 text-lg font-semibold">{{ truncateText(article.title, 80) }}</h2>
              <p class="text-justify text-sm">{{ truncateText(article.description, 200) }}</p>
              <div class="card-actions justify-end py-4">
                <RouterLink :to="removeLanguage(article._path)" class="btn btn-primary btn-sm">
                  {{ t('legal.readMore') }}
                </RouterLink>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </LazyContentList>
  </main>
</template>
