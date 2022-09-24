<template>
   <v-app id="inspire">
      <v-navigation-drawer v-model="drawer" app>
         <v-list-item>
            <v-list-item-content>
               <v-list-item-title class="title">Animals</v-list-item-title>
               <v-list-item-subtitle>by Fahmi & Hilman</v-list-item-subtitle>
            </v-list-item-content>

         </v-list-item>
         <v-divider></v-divider>

         <v-list density="compact">
            <v-list-item
               v-for="(item, i) in items"
               :key="i"
               :to="item.link" link
               :value="item"
               active-color="primary"
            >
               <template v-slot:prepend>
                  <v-icon :icon="item.icon"></v-icon>
               </template>

               <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item>
         </v-list>

   </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    name: 'NavBar',
    data: () => ({ 
      drawer: null,
      items: [
        { text: 'Home', icon: 'mdi-home', link: "/"},
        { text: 'Add Post', icon: 'mdi-note-plus', link: "/add-content" },
        { text: 'About', icon: 'mdi-help-box', link: "/about" },
      ],
    }),
  };
</script>