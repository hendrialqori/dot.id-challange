export type TSuccess<T> = {
    status: number;
    data: T
}

export type TError = Error & {
    status: number;
}

export type Province = {
    province_id: number;
    province: string;
}

export type City = {
    city_id: number;
    province_id: number;
    province: string;
    type: string;
    city_name: string;
    postal_code: number;
}

export type Cost = {
    service: string;
    description: string;
    cost: {
        value: string;
        etd: string;
        note: string;
    }[];
}

export type Shipping = {
    code: string;
    name: string;
    costs: Cost[];
}

