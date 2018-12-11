<template>
  <v-container fill-height fluid style="flex-wrap: wrap;">
    <div slot="header">
      <div class="title font-weight-light mb-2">Ingresos</div>
      <div class="category font-weight-thin">
        See all available
        <a
          class="white--text"
          href="https://materialdesignicons.com/"
          target="_blank"
        >Icons</a>
        <button @click="send">Enviar</button>
        {{animals}}
      </div>
    </div>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      animals: ""
    };
  },
  methods: {
    send() {
      axios.get("/api/breeds/list/all").then(response => {
        this.animals = response.data;
      });
    }
  }
};
</script>

<style>
</style>
