type Info = {
    id: number;
    name: string;
    email: string;
};

type AdminInfo = Info & {
    role: string;
    lastLoggedIn: Date;
};

export { type Info, type AdminInfo };
