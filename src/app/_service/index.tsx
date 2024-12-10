import { useMutation, useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import type { TSuccess, Province, City, Shipping, TError } from "#/@types"

export function useProvinces() {
    const GET = async () => {
        const { data } = await axios.get("/api/shipping/province")
        return data
    }

    return useQuery<TSuccess<Province[]>>({
        queryKey: ["PROVINCE"],
        queryFn: GET
    })
}

type CitiesParams = { type: "origin" | "dest", province_id: string }

export function useCities({ province_id, type }: CitiesParams) {
    const GET = async () => {
        const { data } = await axios.get(`/api/shipping/city?province_id=${province_id}`)
        return data
    }

    return useQuery<TSuccess<City[]>>({
        queryKey: ["CITIES", type, province_id],
        queryFn: GET,
        enabled: Boolean(province_id)
    })
}

export function useShippingCost() {
    type Payload = {
        origin: number;
        destination: number;
        weight: number;
        courier: string;
    }

    const POST = async (payload: Payload) => {
        const { data } = await axios.post("/api/shipping/cost", payload, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        return data
    }

    return useMutation<TSuccess<Shipping[]>, AxiosError<TError>, Payload>({
        mutationKey: ["COST"],
        mutationFn: POST
    })
}