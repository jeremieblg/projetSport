<template>
  <div>
    <v-container>
      <h1>Liste des utilisateurs</h1>
      <v-row>
        <v-col>Prenom</v-col>
        <v-col>Nom</v-col>
        <v-col>Email</v-col>
        <v-col>Password</v-col>
        <v-col>Admin</v-col>
        <v-col>Delete</v-col>
      </v-row>
      <v-row v-for="user in users" :key="user.id">
        <v-col>{{user.firstName}}</v-col>
        <v-col>{{user.lastName}}</v-col>
        <v-col>{{user.email}}</v-col>
        <v-col>{{user.password}}</v-col>
        <v-col>{{user.admin}}</v-col>
        <v-col>
          <v-icon @click="deleteMyUser(user.id)" dark color="primary">mdi-trash-can</v-icon>
        </v-col>
      </v-row>
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
import dao from "@/mixins/dao";
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      users: ""
    };
  },
  mixins: [dao],
  methods: {
    async register() {
      const userObj = {
        email: this.email,
        password: this.password,
        firstName: this.firstName,
        lastName: this.lastName
      };
      await this.addUser(userObj);
      this.users = await this.getUsers();
    },
    async deleteMyUser(user) {
      this.deleteUser(user);
      this.users = await this.getUsers();
    }
  },
  async created() {
    this.users = await this.getUsers();
  }
};
</script>

<style lang="scss" scoped>
</style>