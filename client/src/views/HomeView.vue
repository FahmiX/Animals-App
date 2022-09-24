<template lang="">
  <v-container>
    <v-alert border="left" close-text="Close Alert" color="green accent-4"
    dark dismissible v-if="this.$route.params.message">
      {{this.$route.params.message}}
  </v-alert>
    <v-row no-gutters>
      <v-col sm="3" class="pa-3" v-for="post in posts"
      :key="post._id">
      <v-card class="pa-1" :to="'/content/' + post._id">
        <v-img max-height="250" :src="'http://localhost:5000/' + post.image"></v-img>
        <v-btn class = "ml-4 mt-3" small outlined color="indigo">
          {{ post.category }}
        </v-btn>
        <v-card-title class="headline">
          {{ post.title }}
        </v-card-title>
        <v-card-text>
          <p>{{ post.content.substring(0,30) + "..." }}</p>
        </v-card-text>
      </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import API from '../../controllers/content';

export default {
  name: 'HomeView',
  data() {
    return {
      posts: [],
    };
  },
  async created(){
    this.posts = await API.getAllPosts();
  }
}
</script>

<style lang="">


</style>