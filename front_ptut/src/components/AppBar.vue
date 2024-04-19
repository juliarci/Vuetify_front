<template>
  <v-app-bar :elevation="24" rounded>
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click="toggleDropdown"></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>Tour du monde</v-app-bar-title>

    <template v-slot:append>
      <v-btn icon="mdi-heart"></v-btn>
    </template>
  </v-app-bar>

  <!-- Liste déroulante des pages -->
  <v-navigation-drawer app  expand-on-hover
                       rail v-model="isDropdownOpen">
    <v-list>
      <v-list-item v-for="item in chemins" :key="item.title" :to="item.to">
        <template v-slot:prepend>
          <v-icon>{{ item.icon }}</v-icon>
        </template>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      isDropdownOpen: true,
      chemins: [
        { title: 'Accueil', to: '/', icon:"mdi-home" },
        { title: 'Page Pays', to: '/pageCountry', icon:"mdi-flag" },
        { title: 'Page Ville', to: '/pageCity', icon: "mdi-spa"}
      ]
    };
  },
  methods: {
    toggleDropdown() {
      console.log(this.isDropdownOpen)
      this.isDropdownOpen = !this.isDropdownOpen;
    }
  }
}
</script>
