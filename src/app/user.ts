export class User {
  id: number;
  // userName: string;
  email: string;
  password: string;

  constructor(email: string, password: string){ // userName: string, email: string, password: string
    // this.userName = userName;
    this.email = email;
    this.password = password;
  }
}
