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
          <v-btn dark class="mr-4" @click="login(email,password)">Se connecter</v-btn>
        </v-row>
      </v-form>
    </v-container>
  </div>
</template>

<script>
import dao from "@/mixins/dao";
import role from "@/mixins/dao";
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  mixins: [dao, role],
  methods: {
    async login(email, password) {
      const user = await this.userExist(email, password);
      this.$store.dispatch("updateUser", user);
      if (this.isAdmin) {
        this.$router.push({ name: "Coach" });
      }
      if (!this.isAdmin) {
        this.$router.push({ name: "Member" });
      }
      return user;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>