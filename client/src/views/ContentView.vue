<template lang="">
    <v-container>
        <v-row>
            <v-col sm="10" class="pa-4 mx-auto">
                <v-card class="pa-2">
                    <v-img max-height="1000" :src="'http://localhost:5000/' + post.image"></v-img>
                        <v-row class="mt-5 mx-3">
                            <v-btn small outlined color ="primary">{{ post.category }}</v-btn>
                            <v-col sm="11" class = "d-flex justify-end">
                                <v-btn class="mr-5" color="success" :to="'/edit-content/' + post._id">Edit</v-btn>
                                <v-btn color="error" @click="removePost(post._id)">Delete</v-btn>
                            </v-col>
                        </v-row>
                    <v-card-subtitle class = "headline">
                        <h3>{{ post.title }}</h3>
                    </v-card-subtitle>
                    <v-card-text class="grey--text">
                        <p>{{ post.content }}</p>
                        <p class="mt-10">{{ post.created }}</p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import API from '../../controllers/content';

export default {
    name: 'ContentView',

    data(){
        return{
            post: {},
        }
    },
    async created(){
        const response = await API.getPostById(this.$route.params.id);
        this.post = response;
    },
    methods: {
        async removePost(id){
            await API.deletePost(id);
            this.$router.push({name: 'HomeView', params: {message: 'Post deleted'}});
        }
    }
}
</script>

<style lang="">
    
</style>