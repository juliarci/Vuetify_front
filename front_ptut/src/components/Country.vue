<template>
  <v-carousel show-arrows="hover" cycle hide-delimiter-background class="carousel-card" style="margin-top: 2rem;">
    <v-carousel-item v-for="(country, i) in countries" :key="i">
      <v-sheet height="100%">
        <v-card class="mx-auto my-auto" max-width="800" elevation="10">
          <v-img class="align-end text-white" height="300" :src="country.url" cover>
            <v-card-title>{{ country.name }}</v-card-title>
          </v-img>
          <v-card-subtitle class="pt-4" style="margin-bottom: 2rem">Nombre d'habitants du pays : {{ country.population
            }}</v-card-subtitle>
          <div>Différentes villes du pays :</div>
          <v-card-text v-for="city in country.cities" :key="city.id">
            {{ city.name }}
            Nombre d'habitant = {{ city.population }}
          </v-card-text>
        </v-card>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      countries: [
        {
          id: null,
          code: null,
          name: null,
          url: null,
          population: null,
          cities: [{ id: null, name: null, population: null }]
        }
      ]
    };
  },
  mounted() {
    this.fetchCountries();
  },
  methods: {
    fetchCountries() {
      fetch(`http://localhost:8989/country/getAllCountries`, {
        method: 'GET',
      })
        .then(response => response.json())
        .then(data => {
          this.countries = data;
          this.countries.forEach(country => {
            this.valider(country.id);
          });
        })
        .catch(error => {
          console.error('Error fetching countries:', error);
        });
    },
    valider(numeroPays) {
      fetch(`http://localhost:8989/country/getPopulation/${numeroPays}`, {
        method: 'GET',
      })
        .then(response => response.json())
        .then(data => {
          const countryIndex = this.countries.findIndex(country => country.id === numeroPays);
          if (countryIndex !== -1) {
            this.countries[countryIndex].population = data;
          }
        })
        .catch(error => {
          console.error('Error fetching population data:', error);
        });
    }
  }
};
</script>

<style scoped>
.carousel-card {
  margin-top: 2rem;
  width: 100%;
  height: auto;
}
</style>
