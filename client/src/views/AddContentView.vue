<template lang="">
  <v-container>
    <v-row no-gutters>
      <v-col sm="10" class="mx-auto">
        <v-card class="pa-5">
          <v-card-title>Create New Content</v-card-title>
          <v-divider></v-divider>
          <v-form ref="form" @submit.prevent="submitForm" class="pa-5" enctype="multipart/form-data">
            <v-text-field label="Title" v-model="post.title" prepend-icon="mdi-note" :rules="rules"></v-text-field>
            <v-text-field label="Category" v-model="post.category" prepend-icon="mdi-tag" :rules="rules"></v-text-field>
            <v-textarea label="Content" v-model="post.content" prepend-icon="mdi-text" :rules="rules"></v-textarea>
            
            <v-file-input :rules="rules_image" accept = "image/*" @change="selectFile" show-size counter multiple label="Select Image"></v-file-input>
            
            <v-btn type="submit" color="success" class="mt-5">Add Content</v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import API from '../../controllers/content';

export default {
  name: 'AddContentView',

  data(){
    return{
      rules: [(value)=> !!value || 'This field is required'],
      rules_image: [(value)=> !value || !value.length || value[0].size > 0 || 'This field is required'],
      post: {
        title: "",
        category: "",
        content: "",
        image: "",
      },
      image: "",
      show: false
    };
  },
  methods: {
    selectFile(event){
      this.image = event.target.files[0];
    },

    async submitForm(){
      const formData = new FormData();
      formData.append('image', this.image);
      formData.append('title', this.post.title);
      formData.append('category', this.post.category);
      formData.append('content', this.post.content);
      if (this.$refs.form.validate()){
        if (this.image !== ""){
          const response = await API.createPost(formData);
          this.$router.push({name: 'HomeView', params: { message: response.message}});
        }
      }
    },
  },
};
</script>

<style lang="">
    
</style>