<template>
  <div class="homePageWrapper">
    <h1 style="font-family:Huiwen-mincho,serif;margin: 0" @click="router.push({path:'/fontDisplay',query:{fontName:'Huiwen-mincho'}})">汇文明朝体</h1>
    <h1 style="font-family:zcoolwenyiti,serif;margin: 0" @click="router.push({path:'/fontDisplay',query:{fontName:'zcoolwenyiti'}})">站酷文艺体</h1>
  </div>
</template>

<script setup>
import router from '../router';
import {useArticleStore} from "../store/index";

const articleStore=useArticleStore()

articleStore.getArticleCatalog()
</script>

<style lang="scss" scoped>
.homePageWrapper{
  height: 100%;
  width: 100%;
}
</style>
