<template>
<div>
        
    <v-layout>
          <v-card
            class="mx-auto"
            outlined
          >
          <v-list three-line>
                <div  v-for="(eachNews, index ) in news" :key="eachNews.id">
                <v-list-item  style="padding: 20px">
                  <v-list-item-avatar>
                    <v-img >
                      <img :src="eachNews.urlToImage" alt="">
                    </v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title style="padding: 10px">
                        {{ eachNews.title }}
                    </v-list-item-title>
                    <div class="overline mb-4">
                      {{ eachNews.description }}
                    </div>
                    <v-list-item-subtitle style="padding: 15px">
                        {{ eachNews.content}}
                    </v-list-item-subtitle>
                    <strong style="padding: 10px">Author:
                        <a :href="eachNews.url" target="_blank">{{ eachNews.author}}</a>
                    </strong>
                  </v-list-item-content>
                </v-list-item>
                <hr>
                <div v-if="index === news.length - 1 && index  < data.length - 1">
                <v-btn @click="loadmore"> 
                    loading more news
                </v-btn>
                </div>
                </div>
          </v-list>
          </v-card>
      </v-layout>
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
