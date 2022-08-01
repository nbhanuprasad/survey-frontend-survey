<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
<script>
import logo from "./assets/oc-logo-white.png";
export default {
  name: "App",
  data: () => ({
    logo,
  }),
  methods: {},
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Italiana&family=Federo&family=Raleway:wght@400;500;700;800;900&display=swap");

:root {
  --black: #161515;
  --white: #ffff;
  --lightGreen: #32de84;
  --blue: blue;
  --bg-color-body: red !important;
}

body {
  font-family: "Federo", sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>

