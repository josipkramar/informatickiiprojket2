<template>
  <v-app id="inspire">
    <v-app-bar app color="lightgray" flat>
      <v-container class="py-0 fill-height ">
        
      <h3 class="news" path="/">Newsletter</h3>
      <v-btns 
        centered
        class="ml-n9"
      >

        <v-btn 
        v-for="link in links" 
        :key="link.text" 
        :to="link.path" text>
          {{ link.text }}
        </v-btn>
      </v-btns>
        <v-spacer></v-spacer>

    
      </v-container>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          

          <v-col cols="12" sm="12">
            <v-sheet min-height="100vh" rounded="lg">
            <router-view></router-view>
           
           
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    links:[
      {
        text: 'News',
        path: '/'
      },
      {
        text: 'Search',
        path: '/about'
      },
      
      {
        text: 'Subscribe',
        path: '/pretplatise'
      },
      {
        text: 'About',
        path: '/viseonama'
      },
    ]
  }),
}
</script>
<style>
  .news{
    padding-right: 70px;
    letter-spacing: 3px;
  }
  h4{
    text-align: center;
  }
</style>