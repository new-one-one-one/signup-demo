export interface ISignupState {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    accessToken: string | null;
    errors: { 
        [key: string]: string | null 
    };
}
