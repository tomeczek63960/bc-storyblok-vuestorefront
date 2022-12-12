<template>
   <div class="bottom-bar">
        <img :src="BottomBar.Image.filename" />
        <div>
            <p><strong>{{BottomBar.BoldText}}</strong></p>
            <p>{{BottomBar.BoldText}}</p>
        </div>
   </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useProductData } from '../composables/useProductData';

export default defineComponent({
    name: 'BottomBar',
    props: {
        BottomBar: {
            type: Object,
            required: true
        }
    },
    setup(props) {
    },
})
</script>

<style scoped lang="scss">
.bottom-bar {
    display: flex;
    align-items: center;
    p + p{
        margin-top: 10px;
    }
    img {
        margin-right: 15px;
        width: 50px;
        height: 50px;
        object-fit: cover;
    }
}
</style>