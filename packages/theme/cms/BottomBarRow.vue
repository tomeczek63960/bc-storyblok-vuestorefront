<template>
   <div class="bottom-bar-row">
        <BottomBarComponent v-for="bar in BottomBar" :key="bar.id" :BottomBar="bar" />
   </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import BottomBarComponent from '../components/BottomBar.vue';

export default defineComponent({
    name: 'BottomBarRow',
    component: {BottomBarComponent},
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
.bottom-bar-row {
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    background: #f5f5f5;
    padding: 25px;
    & > div {
        width: 33%;
    }
}
</style>