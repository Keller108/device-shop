export class AuthFormStore {
    email: string;
    password: string;

    constructor() {
        this.email = '';
        this.password = '';
    }

    setUser(email: string, pass: string) {
        this.email = email;
        this.password = pass;
    }
}