
<template>

  <div id="app" class="h-100">
      <div class="row">
        <div class="col-md-3 d-flex px-5">
          <img class="img-fluid my-auto ml-sm-5" alt="" src="../assets/2a.png">
        </div>
        <div class="col-md-9 bg-vue h-100 d-flex justify-content-center align-items-center">
          <div class="col-md-8 rounded px-5 py-4 shadow bg-white text-left">
            <SubScribe />
          </div>
        </div>
      </div>
  </div>
  
    
</template>
<script>
import SubScribe from "../components/SubScribe.vue";



export default {
  name: "app",
  components: {
    SubScribe
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.slika {
  padding-top: 3in;
  padding-left: 150px;
}
</style>
