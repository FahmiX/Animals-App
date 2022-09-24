<template>
   <v-app>
      <v-navigation-drawer id="background-navbar" v-model="drawer" app>
         <v-list-item class="title" id="title">
            <v-list-item-content>
               <v-list-item-title class="title-text" id="text">CRUD</v-list-item-title>
               <v-list-item-subtitle>by Fahmi & Hilman</v-list-item-subtitle>
            </v-list-item-content>
         </v-list-item>
         <v-divider></v-divider>

         <v-list density="compact">
            <v-list-item class = "item-list"
               v-for="(item, i) in items"
               :key="i"
               :to="item.link" link
               :value="item"
               active-color="blue"
            >
               <template v-slot:prepend>
                  <v-icon :icon="item.icon"></v-icon>
               </template>

               <v-list-item-title class="item-text" v-text="item.text"></v-list-item-title>
            </v-list-item>
         </v-list>

   </v-navigation-drawer>

    <v-app-bar app class="upbar">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Animals Library</v-toolbar-title>
    </v-app-bar>

    <v-main class="main" id="main">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
    //
  },
  data: () => ({ 
      drawer: null,
      items: [
        { text: 'Home', icon: 'mdi-home', link: "/"},
        { text: 'Add Post', icon: 'mdi-note-plus', link: "/add-content" },
        { text: 'About', icon: 'mdi-help-box', link: "/about" },
      ],
  }),
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

.title#title{
   padding: 25px;
   background-color: rgb(0, 67, 155);
   color: rgba(255, 255, 255, 0.993);
}

.title-text#text{
   font-family: 'Roboto', sans-serif;
   font-size: 25px;
   font-weight: bold;
}

#background-navbar{
   background-image: linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)),url(https://images.unsplash.com/photo-1550147760-44c9966d6bc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&w=1000&q=80);
}

.item-text
{
   font-family: 'Roboto', sans-serif;
   font-size: 15px;
   font-weight: bold;
   padding: 10px;
}

.item-list{
   color: white;
}

.main#main{
   background-image: linear-gradient(rgba(4,9,30,0.3),rgba(4,9,30,0.3))
}

.upbar{
   background-color: red;
}

</style>
