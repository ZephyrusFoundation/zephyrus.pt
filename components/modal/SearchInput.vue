<script setup lang="ts">
import usePages from '~/composable/usePages';
import useProjects from "~/composable/useProjects";

const { t } = useI18n();

const searchQuery = ref('');
const searchResults = ref([]);
const search = ref<HTMLElement | null>(null);

const localePath = useLocalePath();
const pages = usePages();
const projects = useProjects();

const performSearch = () => {
  if (searchQuery.value) {
    const possibleValues = [...pages.value, ...projects.value];
    searchResults.value = possibleValues.filter((page) => {
      return page.name.toLowerCase().includes(searchQuery.value.toLowerCase()) && !page.hideSearch;
    });
  } else {
    searchResults.value = [];
  }
};

const showModal = () => {
  search.value?.showModal();
};

const handleKeyDown = (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
    event.preventDefault();

    search.value?.showModal();
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown);
});
</script>

<template>
  <div>
    <button class="btn btn-circle bg-base-300" @click="showModal()">
      <IconMagnifier />
    </button>
    <dialog ref="search" class="modal modal-bottom sm:modal-middle">
      <div class="modal-box">
        <form method="dialog">
          <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        <h3 class="font-bold text-lg pb-2">{{ t('search.title') }}</h3>
        <input type="text" v-model="searchQuery" @keyup.enter="performSearch" @input="performSearch" :placeholder="t('search.placeholder')" class="input input-bordered w-full mb-4" />
        <TransitionGroup name="searchlist" tag="div" class="search-results space-y-2">
          <div v-for="search in searchResults" :key="search.path" class="search-result-item p-2 hover:bg-gray-100 rounded flex flex-col cursor-pointer">
            <a :href="search.path ? localePath(search.path) : `https://${search.url}/`" :target="search.path ? '_self' : '_blank'" class="font-bold flex flex-col gap-1" v-if="(search.path || search.url) && search.name">
              <div class="capitalize flex items-center gap-2">
                {{ search.name }}
              </div>
              <div class="flex flex-wrap gap-1 items-center">
                <div class="avatar w-4 h-4">
                  <div class="w-full h-full rounded" v-if="search.html" v-html="search.html">
                  </div>
                  <div v-else>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full" fill="currentColor" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                      <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
                    </svg>
                  </div>
                </div>
                <span class="text-xs text-gray-500">{{ search.path || search.url }}</span>
              </div>
            </a>
          </div>
        </TransitionGroup>
      </div>
    </dialog>
  </div>
</template>

<style scoped>

</style>