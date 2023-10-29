export interface ISignupState {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    errors: { 
        [key: string]: string | null 
    };
}
