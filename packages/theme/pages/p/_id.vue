<template>
    <div v-if="content">
      <render-content :content="content.body" />
      <render-content :content="content.BottomBar" />
    </div>
  </template>
  
  <script>
  import { useContent, storyblokBridge } from '@vue-storefront/storyblok';
  import RenderContent from '~/cms/RenderContent.vue';
  import {
    computed,
    defineComponent,
    useRoute,
    useContext,
    onMounted,
    useFetch,
    ref,
    watch,
    onUpdated
  } from '@nuxtjs/composition-api';
  import { SfLoader } from '@storefront-ui/vue';
  import { onSSR } from '@vue-storefront/core'
  
  export default defineComponent({
    components: {
      RenderContent,
      SfLoader
    },
    setup() {
      const route = useRoute();
      const slug = computed(() => route.value.params.id);
      const { search, content } = useContent('unique-id')
      const story = computed(() => content.value)
 
      onMounted(async () => {
        await search({
          cache: false,
          url: 'p',
          version: 'draft',
        })
        storyblokBridge(content.value)
      })
  
      return {
        content: story
      };
    }
  });
  </script>
  
  <style lang="scss" scoped>
  .cms {
    &__loader {
      margin: var(--spacer-base) auto;
      min-height: var(--spacer-2xl);
    }
  }
  </style>
  