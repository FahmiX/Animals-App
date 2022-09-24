import * as Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
const app = Vue.createApp({})
app.use(VueAxios, axios)

const url = 'http://localhost:5000/api'

export default class API {
    static async getAllPosts() {
        const res = await axios.get(url);
        return res.data;
    }

    static async getPostById(id) {
        const res = await axios.get(url + '/' + id);
        return res.data;
    }

    static async createPost(data) {
        const res = await axios.post(url + '/post', data);     
        return res.data;
    }

    static async updatePost(id, data) {
        const res = await axios.patch(url + '/' + id, data);
        return res.data;
    }

    static async deletePost(id) {
        const res = await axios.delete(url + '/' + id);
        return res.data;
    }
}
