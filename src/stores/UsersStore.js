import { observable, makeObservable, action, reaction } from "mobx";

class UsersStore {
    users = []

    loggedUser(user) {
        this.users.push(user);
    }

    signOut() {
        this.users = []
    }

    constructor() {
        makeObservable(this, {
            users: observable,
            loggedUser: action,
            signOut: action
        })
    }

}


const usersStore = new UsersStore();

reaction(
    () => JSON.stringify(usersStore.users),
    usersStr => {localStorage.setItem("users", usersStr)
    }
   
)


export default usersStore;

