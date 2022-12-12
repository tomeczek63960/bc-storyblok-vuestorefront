<template>
    <nuxt-link
        :to="
            localePath(
            `/p/${productData.getId(product)}/${productData.getSlug(
                product
            )}`
            )
        "    
        class="custom-product"
    >
        <img v-if="product.images[0]" :src="product.images[0].url_standard" alt="">
        <h2>{{product.name}}</h2>
        <p>{{product.price}} currency</p>
    </nuxt-link>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useProductData } from '../composables/useProductData';

export default defineComponent({
    name: 'ProductComponent',
    props: {
        product: {
            type: Object,
            required: true
        }
    },
    setup() {
        const productData = useProductData();
        return {
            productData
        }
    },
})
</script>

<style scoped lang="scss">
    .custom-product {
        max-width: 300px;
        width: 100%;
        display: block;
        img {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }
        h2 {
            margin-top: 20px;
            font-size: 20px;
            line-height: 24px;
            font-weight: 500;
        }
        p {
            margin-top: 20px;
            font-size: 18px;
            line-height: 20px;
        }
    }
</style>