<template>
  <div>
    <img class="img-fluid mx-auto d-block" alt="" src="../assets/3a.png" width="600" >
    <h2>
      Get your daily news on Newslatter!
    </h2>
    
      <!-- Main news -->
      <v-carousel-item v-for="i in 3" :key="i" transition="fade-transition" reverse-transition="fade-transition">
        <div> 
          <v-card target="blank" :href="APINewsData[i - 1].url">
            <v-img
              :aspect-ratio="16 / 9"
              dark
              gradient="to top, rgba(25,32,72,.7), rgba(25,32,72,.0)"
              height="550px"
              :src="APINewsData[i - 1].image"
            >
              <v-card-text class="fill-height d-flex align-end" >
                <v-row class="flex-column">
                  <v-col cols="12" lg="8" md="10" xl="7">
                    <h2 class="py-3 text-h4 for xs text-sm-h4 text-md-h4 text-lg-h3" style="line-height: 1.2" >
                      {{ APINewsData[i - 1].title }}
                    </h2>
                  </v-col>
                  <v-col class="d-flex align-center" >
                    <v-avatar class="elevation-4" color="#e91e63" :class="{'size=10': $vuetify.breakpoint.mobile}">
                      <v-icon large>mdi-feather</v-icon>
                    </v-avatar>

                    <div class="text-h6 pl-2" :class="{'text-body-1 ': $vuetify.breakpoint.mobile}">
                      {{ APINewsData[i - 1].source.name }} ·
                      {{ APINewsData[i - 1].publishedAt.slice(0, -10) }}
                    </div>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-img>
          </v-card>
        </div>
      </v-carousel-item>
    <!-- Carousel end -->

    <!-- Latest Posts news -->
    <v-row>
      <v-col cols="12" lg="8" xl="8">
        
        <div>
          <div class="pt-16 px-5">
            <h3 class="text-h4 font-weight-bold pb-4">News</h3>
            <v-divider></v-divider>

            <div>
              <v-row v-for="i in 3" :key="i" class="py-4" >
                <v-col cols="12" md="4" >
                  <v-card flat height="100%" >
                    <v-img
                      :aspect-ratio="16 / 9"
                      height="100%"
                      :src="APINewsData[i + 4].image"
                    ></v-img>
                  </v-card>
                </v-col>

                <v-col class="px-5">
                  <div>
                    <v-btn
                      color="blue"
                      target="blank"
                      :href="APINewsData[i + 4].url"
                      link
                      depressed
                      >More</v-btn
                    >

                    <h3 class="text-h4 font-weight-bold pt-3">
                      {{ APINewsData[i + 4].title }}
                    </h3>

                    <p class="text-h6 font-weight-regular pt-3 text--secondary">
                      {{ APINewsData[i + 4].content.slice(0, -13) }}
                    </p>

                    <div class="d-flex align-center">
                      <v-avatar color="green" size="36">
                        <v-icon dark>mdi-feather</v-icon>
                      </v-avatar>

                      <div class="pl-2">
                        {{ APINewsData[i + 4].source.name }} ·
                        {{ APINewsData[i + 4].publishedAt.slice(0, -10) }}
                      </div>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </div>
          </div>
        </div>
      </v-col>
      <!-- Latest Posts news end -->

      <!-- Popular Posts news -->
      <v-col>
        <div class="pt-16 px-5">
          <h3 class="text-h4 font-weight-bold pb-4">Popular Posts</h3>

          <v-divider></v-divider>

          <div>
            <v-row v-for="i in 4" :key="i" class="py-4">
              <v-col cols="12" md="6" lg="5">
                <v-card height="100%" flat>
                  <v-img
                    :src="APINewsData[i + 2].image"
                    :aspect-ratio="16 / 9"
                    height="100%"
                  ></v-img>
                </v-card>
              </v-col>

              <v-col>
                <div>
                  <v-btn
                    color="blue"
                    target="blank"
                    :href="APINewsData[i + 2].url"
                    link
                    depressed
                    small
                    >Learn More</v-btn
                  >

                  <h3 class="text-h5 font-weight-bold py-3">
                    {{ APINewsData[i + 2].title }}
                  </h3>

                  <div class="d-flex align-center">
                    <v-avatar color="green" size="30">
                      <v-icon dark small>mdi-feather</v-icon>
                    </v-avatar>

                    <div class="pl-2">
                      {{ APINewsData[i + 2].source.name }} ·
                      {{ APINewsData[i + 2].publishedAt.slice(0, -10) }}
                    </div>
                  </div>
                </div>
              </v-col>
            </v-row>
          </div>
        </div>
      </v-col>
      
      <!-- Popular Posts news end -->
    </v-row>
    <v-row>
      <v-col>
        <v-pagination
      v-model="page"
      :length="total/perPage"
    ></v-pagination>
  
      </v-col>
    </v-row>
    
  </div>
</template>

<script>

export default {
  name: "NewsView",
  components: {},

  

  data ()  {
       return{
        APINewsData: [],
        page:1,
        total:0,
        perPage:20,
       }
   

    
  },
  mounted() {
    this.getNewsData();
    document.title = "Naslovnica";
  },
  methods: {
    //Fetching data from API
    getNewsData: function () {
      let final_url ='https://newsapi.org/v2/everything?domains=wsj.com&apiKey=3955a3fd740a4c1097c7ec8af9d46958'
      this.axios
        .get(
         final_url,
         {
          params:{
            'offset':Math.round(this.perPage*(this.page-1))
          }
         }
        )
        .then((response) => {
          console.log(response.data.articles);
          this.APINewsData = response.data.articles;
          this.total=response.data.totalArticles;
        });
    },
    
    //Printing data from API
    ispis: function () {
      console.log(this.APINewsData);
    },
    watch:{
      page: function(){
        this.getNewsData;
      }
    }
  },
  
};
</script>
<style>
h2{
  text-align: center;
}
</style>