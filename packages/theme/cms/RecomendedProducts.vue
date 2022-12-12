<template>
    <div class="products-list">
        <ProductComponent v-for="product in Products.products" :key="product.id" :product="product"/>
    </div>
</template>
  
  <script lang="ts">
  import { defineComponent } from '@nuxtjs/composition-api';
  import ProductComponent from '../components/ProductComponent.vue';
  
  export default defineComponent({
    name: 'RecomendedProducts',
    components: {
      ProductComponent,
    },
    props: {
      Products: {
        type: Object
      },
    }
  });
  </script>
  
  <style lang="scss" scoped>
  .products-list {
    margin-top: 50px;
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    justify-content: space-between;
  }
  </style>