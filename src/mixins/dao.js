export default{
    methods: {
        async userExist(email,password) {
            const user = await this.axios.get(
              `${process.env.VUE_APP_URL_API}/users?email=${email}&password=${password}`
            );
            return user.data[0] ? user.data[0] : undefined;
        },
        async getUsers(){
            const users = await this.axios.get(
                `${process.env.VUE_APP_URL_API}/users`
              );
              return users.data;
        },
        async getUser(id){
            const users = await this.axios.get(
                `${process.env.VUE_APP_URL_API}/users/${id}`
              );
              return users.data;
        },
        async deleteUser(id){
            const users = await this.axios.delete(
                `${process.env.VUE_APP_URL_API}/users/${id}`
              );
              return users;
        },
        async addUser(userObj){
            let userModel  = {
                admin:false,
                email: "",
                password: "",
                firstName: "",
                lastName: "",
                message: [],
                statement: []
              }

              Object.assign(userModel,userObj);
            
              const users = await this.axios.post(
                `${process.env.VUE_APP_URL_API}/users`,
                userModel
              );

              return users.data;
        },
        async addStatement(userId,statementObj){
            let statementModel = {
                date: "",
                sport: "",
                duration: "",
                intensity: "",
                breakfast: "",
                lunch: "",
                diner: "",
                weight: "",
                snack: "",
                mood: ""
            }

            Object.assign(statementModel,statementObj);

            let user = await this.getUser(userId);
            user.statement.push(statementModel);
            this.$store.dispatch("updateUser", user);
            await this.deleteUser(userId);
            return await this.addUser(user);
        },
        async addMessage(userId,messageObj){
            let messageModel = {
                date: "",
                text: ""
            }

            Object.assign(messageModel,messageObj);

            let user = await this.getUser(userId);
            console.log(user)
            user.message.push(messageModel);

            await this.deleteUser(userId);
            return await this.addUser(user);
        },
        async deleteStatement(userId,statementId){
            let user = await this.getUser(userId);

            user.statement.splice(statementId,1);

            this.$store.dispatch("updateUser", user);
            await this.deleteUser(userId);

            return await this.addUser(user);

        },
        async deleteMessage(userId,messageId){
            let user = await this.getUser(userId);
 
            user.message.splice(messageId,1);

            this.$store.dispatch("updateUser", user);
            await this.deleteUser(userId);

            return await this.addUser(user);
        }

    }
}