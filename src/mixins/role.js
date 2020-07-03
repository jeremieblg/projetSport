export default{
  computed: {
    isAdmin(){
      if(this.$store.state.users.user){
        return this.$store.state.users.user.admin;
      }
    },
    isConnected(){
      return this.$store.state.users.user;
    }
  }
}