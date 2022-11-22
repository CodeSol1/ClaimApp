export class User {
    Id: number;
    Email: string;
    Password: string;
    
    Role: number;


   
    constructor(Id: number, Email: string, Password: string,Role: number) {

        this.Id = Id;
        this.Email = Email;
        this.Password = Password;
       
        this.Role = Role;
    }


}

