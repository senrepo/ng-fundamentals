export interface IEvent {
    id: number;
    name: string;
    date: Date;
    time: string,
    price: number;
    location?: {
        address: string;
        city: string;
        country: string
    };
    olineUrl?: string;
    sessions?: ISession[];
}

export interface ISession {
    id: number;
    name: string;
    presenter: string;
    duration: number;
    level: string;
    abstract: string,
    voters?: any
}
