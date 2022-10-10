<template>
  <div class="home">
    <h2>Search:</h2>
        <v-autocomplete
      :items="drzave"
      v-model="odabrana_drzava"
      @change="dohvatiAPI"
    ></v-autocomplete>

    <v-container>
      <v-row>
        <v-col v-for="sveuciliste in sveucilista" :key="sveuciliste.name">
          <v-card
            class="mx-auto"
            width="400"
            prepend-icon="mdi-home"
            @click="prikaziDetalje(sveuciliste)"
          >
            <v-card-title>
              {{ sveuciliste.name }}
            </v-card-title>

            <v-card-text>
              {{ sveuciliste.domains }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2 mb-5">
          {{ odabrano_sveuciliste.name }}
        </v-card-title>

        <v-card-text>
          {{ odabrano_sveuciliste }}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false"> I accept </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-snackbar v-model="snackbar.prikazi">
      {{ snackbar.tekst }}
      <template v-slot:action="{ attrs }">
        <v-btn
          :color="snackbar.boja"
          text
          v-bind="attrs"
          @click="snackbar.prikazi = false"
        >
          Zatvori
        </v-btn>
      </template>
    </v-snackbar>
    
  </div>
</template>


<script>
export default {
  name: "AboutView",
  created() {
    this.dohvatiAPI();
  },
  data: () => ({
    selectedDate: null,
  users: [],
    dialog: false,
    odabrano_sveuciliste: {},
    sveucilista: [],
    drzave: [
      {
        value: "croatia",
        text: "Hrvatska",
      },
      {
        value: "spain",
        text: "Španjolska",
      },
      {
        value: "italy",
        text: "Italija",
      },
      {
        value: "germany",
        text: "Njemacka",
      },
    ],
    odabrana_drzava: "",

    snackbar: {},
  }),
  methods: {
    dohvatiAPI: function () {
      console.log(this.odabrana_drzava);
      this.axios
        .get(
          "http://universities.hipolabs.com/search?country=" +
            this.odabrana_drzava
        )
        .then((response) => {
          this.sveucilista = response.data;

          this.snackbar.tekst = "Uspješno!";
          this.snackbar.boja = "green";
          this.snackbar.prikazi = true;
        })
        .catch(() => {
          this.snackbar.tekst = "Neupješno!";
          this.snackbar.boja = "red";
          this.snackbar.prikazi = false;
        });
    }
    ,

    prikaziDetalje: function (odabrano_sveuciliste) {
      this.odabrano_sveuciliste = odabrano_sveuciliste;
      this.dialog = true;
    },


     














    
  },
};
</script>
<style>
h2{
  text-align: center;
}

</style>

