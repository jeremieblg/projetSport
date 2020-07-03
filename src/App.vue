<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Mon coach sportif</v-toolbar-title>

      <!-- <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>-->

      <v-spacer></v-spacer>

      <v-btn :to="{name:'Home'}" class="mr-1">
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn v-if="!isConnected" :to="{name:'Connection'}" class="mr-1">Connexion</v-btn>
      <v-btn v-if="isConnected" class="mr-1" @click="logout">Déconnection</v-btn>

      <v-btn v-if="isAdmin" :to="{name:'Admin'}" class="mr-1">Administration</v-btn>
      <v-btn v-if="isAdmin" :to="{name:'Coach'}" class="mr-1">Espace coach</v-btn>
      <v-btn v-if="!isAdmin && isConnected" :to="{name:'Member'}" class="mr-1">Espace membre</v-btn>
      <v-btn :to="{name:'About'}" class="mr-1">À propos</v-btn>

      <!-- <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>-->
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import role from "@/mixins/role";
export default {
  name: "App",
  data: () => ({
    //
  }),
  mixins: [role],
  methods: {
    logout() {
      this.$store.dispatch("updateUser", null);
      this.$router.push({ name: "Home" });
    }
  }
};
</script>
