export class User {
    UserId: Number;
    Email: string;
    Password: string;
    RePassword: string;
    Role: Number;



    constructor() {

        this.UserId = 0;
        this.Email = "";
        this.Password = "";
        this.RePassword = "";

        this.Role = 1;
    }
}


export class Login {

    Email: string;
    Password: string;

    constructor() {


        this.Email = "";
        this.Password = "";

    }
}



export class Policy {

    id: number;
    policyName: string;
    insuranceTye: string;
    ageLimit: string;
    premiumAmount: number;
    duration: number;
    coverAmount: number;


    /**
     *
     */
    constructor() {
        this.id = 0;
        this.policyName = '';
        this.insuranceTye = '';
        this.ageLimit = '';
        this.premiumAmount = 0;
        this.duration = 0;
        this.coverAmount = 0;

    }
}

export class Claim {
    ClaimId: number;
    PolicyId: number;
    UserId: number;
    Amount: Number;
    Hospital: string;
    Description: string;
    status: string;


    constructor() {

        this.ClaimId = 0;
        this.PolicyId = 0;
        this.UserId = 0;
        this.Amount = 0;
        this.Hospital = "";
        this.Description = "";
        this.status = ""

    }
}


