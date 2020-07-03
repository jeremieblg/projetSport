<template>
  <div>
    <v-container>
      <h1>Se connecter</h1>
      <v-form class="mb-10">
        <v-row>
          <v-text-field v-model="email" type="email" label="E-mail" required clearable></v-text-field>
        </v-row>
        <v-row>
          <v-text-field v-model="password" type="password" label="Mot de passe" required clearable></v-text-field>
        </v-row>
        <v-row>
          <v-btn dark class="mr-4" @click="send">Se connecter</v-btn>
        </v-row>
      </v-form>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    send() {}
  }
};
</script>

<style lang="scss" scoped>
</style>