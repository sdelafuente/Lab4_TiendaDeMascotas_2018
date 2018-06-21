export class Usuario {
    public id: number;
    public email: string;
    public rol: string;
    public password: string;
    public token: string;

    constructor(id, email, rol, password) {
        this.email = email;
        this.rol = rol;
        this.password = password;
        this.id = id;
    }
}
