<template>
  <div class="fontDisplayWrapper">
    <div id="articleContent"/>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import MarkdownIt from 'markdown-it'
import {useRoute} from "vue-router";

const md = new MarkdownIt();
const router=useRoute()

const articlePath=ref('/public/article/[项脊轩志].md')

onMounted(()=>{
  renderMdArticle()
})

const renderMdArticle=()=>{
  const fontName=router.query.fontName
  if (process.env.NODE_ENV === 'production') {
    articlePath.value=articlePath.value.replace('/public','')
  }
  const mdDom=document.getElementById('articleContent')
  mdDom.innerHTML=''
  mdDom.style.fontFamily=fontName
  fetch(articlePath.value)
      .then(response => response.text())
      .then(data => {
        mdDom.innerHTML=md.render(data)
        mdDom
      });
}


</script>

<style lang="scss" scoped>
.fontDisplayWrapper {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
}

#articleContent {
  margin-top: 50px;
  width: 55%;
  font-size: 24px;
  font-family:Huiwen-mincho,serif;
  line-height: 1.3;
}
</style>
