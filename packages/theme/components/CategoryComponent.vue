<template>
    <nuxt-link
        :to="localePath(`/c${category.custom_url.url}`)"
        class="category-item"
    >   
        <div class="category-item__image">
            <img :src="category.image_url" />
        </div>
        <h2>{{category.name}}</h2>
        <p>{{category.description}}</p>
    </nuxt-link>  
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    name: 'CategoryComponent',
    props: {
        category: {
            type: Object,
            required: true
        }
    },
    setup() {
        
    },
})
</script>


<style scoped lang="scss">
    .category-item {
        width: 300px;
        display: block;
        &__image {
            height: 200px;
            background: black;;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
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