<script setup>
</script>
<template>
  <div class="title" style="font-size: 5rem; font-style: italic; font-family:fantasy; text-decoration: underline
  overline #e68ad9; text-align: center">Application de Thérèse</div>
  <v-row>
    <v-col
      v-for="n in 9"
      :key="n"
      class="d-flex child-flex"
      cols="4"
    >
      <v-img
        :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
        :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
        aspect-ratio="1"
        class="bg-grey-lighten-2"
        cover
      >
        <template v-slot:placeholder>
          <v-row
            align="center"
            class="fill-height ma-0"
            justify="center"
          >
            <v-progress-circular
              color="grey-lighten-5"
              indeterminate
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-col>
  </v-row>
</template>

