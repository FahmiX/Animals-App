<template>
  <v-row no-gutters>
    <h1 class="text-center">Tentang Kami</h1>
  </v-row>
  <v-divider thickness="15px" class="mt-5" color="red"></v-divider>
  <v-row class="mt-10">
    <v-hover v-slot="{ isHovering, props }">
      <v-col sm="4" class="pa-4 mx-auto">
        <v-card :elevation="isHovering ? 12 : 2" class="pa-1" v-bind="props">
          <v-card-title class="name-center">Hilman Permana</v-card-title>
          <v-img>
            <img src="https://i.ibb.co/qYv880P/hilman.png">
          </v-img>
        </v-card>
      </v-col>
    </v-hover>

    <v-hover v-slot="{ isHovering, props }">
      <v-col sm="3" class="pa-3 mx-auto">
        <v-card :elevation="isHovering ? 12 : 2" class="pa-1" v-bind="props">
          <v-card-title class="name-center">Fahmi Ahmad Fadilah</v-card-title>
          <v-img max-height="660px" src="https://i.ibb.co/LCdr6Wr/fahmii.jpg">
            
          </v-img>
        </v-card>
      </v-col>
    </v-hover>
  </v-row>
  
 
</template>

<script>
export default {
  name: 'AboutView',
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

  .text-center {
    margin: auto;
    margin-top: 30px;
  }

  .name-center{
    text-align: center;
    font-family: 'Bebas Neue', cursive;
    font-size: 30px;
  }
</style>