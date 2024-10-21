import { defineStore } from "pinia"

export const useArticleStore=defineStore('articleData',{
    state:()=>{
        return {
            articleCatalog:[],
        }
    },
    getters:{

    },
    actions:{
        getArticleCatalog(){
            const articleModule = import.meta.glob('/public/article/*.md');
            const resArr=[]
            for (const path in articleModule) {
                let infoArr= path.match(/\[(.*?)\]/g)
                infoArr=infoArr.map(match => match.replace(/\[|\]/g, ''))
                const item={title:infoArr[0],filePath:path}
                resArr.push(item)
            }
            this.$state.articleCatalog=resArr
        },
    }

})
