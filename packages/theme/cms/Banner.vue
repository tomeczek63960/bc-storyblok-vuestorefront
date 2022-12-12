<template>
  <div>
    <div class="flex">
      <img v-for="image in Images" :key="image.id" :src="image.filename" alt="" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { SfBanner, SfButton } from '@storefront-ui/vue';
import ProductComponent from '../components/ProductComponent.vue';
import CategoryComponent from '../components/CategoryComponent.vue';

export default defineComponent({
  name: 'Banner',
  components: {
    SfBanner,
    SfButton,
    ProductComponent,
    CategoryComponent
  },
  props: {
    Images: {
      type: Array
    },
  },
});
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  img {
    display: block;
    width: 100%;
    /* height: 700px; */
    height: calc(100vh - 50px);
    object-fit: cover;
    object-position: top center;
  }
}
.products-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>