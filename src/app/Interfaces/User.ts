export interface User{
    id: number;
    name: string;
    email: string;
    password: string;
    phone?: string;
    addres?: string;
    regDate: string;
    lastLoginDate: string;
    status: boolean;
}