export const API_KEY = process.env.NEXT_PUBLIC_API_KEY as string
export const API_URL = process.env.NEXT_PUBLIC_API_URL as string

export const COURIER = [
    {
        id: "jne",
        name: "JNE"
    },
    {
        id: "pos",
        name: "POS"
    },
    {
        id: "tiki",
        name: "TIKI"
    }
] as const