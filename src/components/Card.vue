<template>
<div>     
    <div v-for="(eachNews, index) in news" :key="eachNews.id" style="padding: 20px;">
    <v-layout>
        <v-card
        class="mx-auto"
        outlined
        >
        <v-list-item three-line>
        <v-list-item-content>
            <div class="overline mb-4">
            {{ eachNews.title }}
            </div>
            <v-list-item-title class="headline mb-1">
            {{ eachNews.description}}
            </v-list-item-title>
            <v-list-item-subtitle style="padding: 10px">
            {{ eachNews.content }}
            </v-list-item-subtitle>

        </v-list-item-content>

        <v-list-item-avatar
            tile
            size="80"
            color="grey"
        >
        <img :src="eachNews.urlToImage" alt="">
        </v-list-item-avatar>
        </v-list-item>

        <v-card-actions>
        <strong>Author:
        <a :href="eachNews.url" target="_blank">{{ eachNews.author}}</a>
        </strong>
        </v-card-actions>
        </v-card>
    </v-layout>
    <div v-if="index === news.length - 1  && index  < data.length - 1">
         <v-btn @click="loadmore"> 
            load more news
         </v-btn>
    </div>
    </div>
</div>      
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
        data: null,
        news: null
    }
  },
  methods:{
      loadmore(){
        const moreNews = this.data.slice(this.news.length, this.news.length + 5);
        this.news = this.news.concat(moreNews)
      }
  },
  async created(){
    const endPoint = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=0f07222671644b6487f7abc901725851';
    this.data = (await axios.get(endPoint)).data.articles;
    this.news = this.data.slice(0, 5)
  }
};
</script>
<style scoped>
a {
  text-decoration: none;
}
</style>
