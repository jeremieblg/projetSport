<template>
  <div>
    <v-container>
      <h1>Liste des utilisateurs</h1>
      <v-row></v-row>
      <h1>Ajouter un utilisateur</h1>
      <v-form class="mb-10">
        <v-row>
          <v-col>
            <v-text-field v-model="firstName" label="Prénom" required clearable></v-text-field>
          </v-col>
          <v-col>
            <v-text-field v-model="lastName" label="Nom" required clearable></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field v-model="email" type="email" label="E-mail" required clearable></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              v-model="password"
              type="password"
              label="Mot de passe"
              required
              clearable
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-btn dark class="mr-4" @click="register">Enregistrer</v-btn>
        </v-row>
      </v-form>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    };
  },
  methods: {
    register() {}
  }
};
</script>

<style lang="scss" scoped>
</style>