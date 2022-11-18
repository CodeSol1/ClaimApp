export class User {
    Id: number;
    Email: string;
    Password: string;
    RePassword: string;
    Role: number;


   
    constructor(Id: number, Email: string, Password: string,RePassword: string,Role: number) {

        this.Id = Id;
        this.Email = Email;
        this.Password = Password;
        this.RePassword = RePassword;
        this.Role = Role;
    }


}

