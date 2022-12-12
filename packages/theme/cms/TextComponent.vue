<template>
    <div class="ccccccc" v-html="html"></div>
</template>
  
  <script lang="ts">
  import { defineComponent } from '@nuxtjs/composition-api';
  import ProductComponent from '../components/ProductComponent.vue';
  
  export default defineComponent({
    name: 'TextComponent',
    components: {
      ProductComponent,
    },
    props: [
      'Text',
    ],
    setup(props) {
        let fullHtml = '';

        const generateHtml = (el) => {
            let myhtml = ``;
            let tag = '';
            if(el.type === 'paragraph') {
                tag = 'p'
            } else if (el.type === 'heading') {
                tag = `h${el.attrs.level}`
            } else if (el.type === 'image') {
                myhtml += `<img src="${el.attrs.src}" />`
            } else if (el.type === 'text') {
                let text = '';
                if (el.marks) {
                    el.marks.forEach((mark) => {
                        if (mark.type === 'link') {
                            text += `<a target="blank" href="${mark.attrs.href}">${el.text}</a>`
                        }
                    })
                } else {
                    text += el.text;
                }
                myhtml += text
            }
            if (el.content) {
                el.content.forEach((my) => {
                    const mht = generateHtml(my);
                    myhtml += `<${tag}>${mht}</${tag}>`
                })
            }

            return myhtml;
        }
        props.Text.content.forEach((el, ind) => {
            const html = generateHtml(el)
            fullHtml += html;
        });

        return {
            html: fullHtml
        }
    }
  });
  </script>
  
  <style lang="scss">
  .ccccccc {
    max-width: 1000px;
    h1,h2,h3,h4,h5,h6 {
        margin: 15px 0 !important;
    }
    a {
        color: orange;
        font-weight: 700;
        text-decoration: underline;
    }
    p {
        margin: 15px 0 !important;
    }
    img {
        margin: 15px 0 !important;
        display: block;
    }
  }
  </style>