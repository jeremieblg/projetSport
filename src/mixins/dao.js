// const URL = process.env.VUE_APP_URL_API;
export default{
    methods: {
        async userExist(email,password) {
            console.log(password,email);
            const user = await this.axios.get(
              `http://localhost:3000/users?email=${email}&password=${password}`
            );
            console.log(user.data);
            return user.data[0] ? user.data[0] : undefined;
          }
        // async userExist(email,password){
        //     const user = await vue.axios.get(URL+"/users",{password:password,email:email});
        //     console.log(user);
        //     return (user[0])?user[0]:undefined;
        // },
        // async adminExist(email,password){
        //     const admin = await vue.axios.get(URL+"/admin",{password:password,email:email});
        //     return (admin[0])?admin[0]:undefined;
        // },
        // async getUsers(){
        //     const users = await vue.axios.get(URL+"/users");
        //     return users;
        // },
        // async getUser(id){
        //     const user = await vue.axios.get(URL+"/users",{id:id});
        //     return (user[0])?user[0]:undefined;
        // },
        // async addUser(userObject){

        // },
        // async addStatement(userId,statementObject){

        // },
        // async addMessage(userId, message){

        // }
    }
}