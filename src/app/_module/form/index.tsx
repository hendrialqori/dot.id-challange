"use client"

import { Fragment } from "react"
import { useForm } from "react-hook-form"

import Input from "#/components/input"
import Select from "#/components/select"
import Button from "#/components/button"
import style from "./form.module.scss"
import Loading from "#/components/loading"
import Flow from "#/helpers/control-flow"
import CourierListCard from "../courier-list-card"
import CourierCard from "../courier-card"

import { COURIER } from "#/constant"
import * as API from "#/app/_service"
import axios from "axios"
import Error from "#/components/error"


type Form = {
    province_origin: string;
    province_dest: string;
    city_origin: string;
    city_dest: string;
    weight: number;
    courier: string;
}


export default function Form() {
    const { handleSubmit: submit, register, watch } = useForm<Form>()

    const provincies = API.useProvinces()

    const cities_origin = API.useCities({
        type: "origin",
        province_id: watch("province_origin")
    })
    const cities_dest = API.useCities({
        type: "dest",
        province_id: watch("province_dest")
    })

    const shippingCost = API.useShippingCost()

    const handleSubmit = submit((state) => {
        const payload = {
            origin: Number(state.city_origin),
            destination: Number(state.city_dest),
            weight: Number(state.weight) * 1000,
            courier: state.courier
        }

        shippingCost.mutate(payload, {
            onSuccess: (data) => {
                console.log(data)
            },
            onError: (error) => {
                if (axios.isAxiosError(error)) {
                    console.log(error)
                }
            }
        })
    })


    return (
        <Fragment>
            <form onSubmit={handleSubmit} className={style.form}>
                <div className={style.origin}>
                    <div className={style.province}>
                        <label htmlFor="province_origin">Asal Provinsi</label>
                        <Select
                            id="province_origin"
                            {...register("province_origin", { required: true })}
                            disabled={provincies.isPending}
                        >
                            <option value="">Pilih provinsi asal</option>
                            {provincies.data?.data.map((province, i) => (
                                <option key={i} value={province.province_id}>
                                    {province.province}
                                </option>
                            ))}
                        </Select>
                    </div>
                    <div className={style.city}>
                        <label htmlFor="origin_city">Asal Kota</label>
                        <Select
                            id="origin_city"
                            {...register("city_origin", { required: true })}
                            disabled={cities_origin.isPending}
                        >
                            <option value="">Pilih kota asal</option>
                            {cities_origin.data?.data.map((city, i) => (
                                <option key={i} value={city.city_id}>{city.city_name}</option>
                            ))}
                        </Select>
                    </div>
                </div>
                <div className={style.destination}>
                    <div className={style.province}>
                        <label htmlFor="dest_province">Tujuan Provinsi</label>
                        <Select
                            id="dest_province"
                            {...register("province_dest", { required: true })}
                            disabled={provincies.isPending}
                        >
                            <option value="">Pilih provinsi tujuan</option>
                            {provincies.data?.data.map((province, i) => (
                                <option key={i} value={province.province_id}>
                                    {province.province}
                                </option>
                            ))}
                        </Select>
                    </div>
                    <div className={style.city}>
                        <label htmlFor="dest_city">Tujuan Kota</label>
                        <Select
                            id="dest_city"
                            {...register("city_dest", { required: true })}
                            disabled={cities_dest.isPending}
                        >
                            <option value="">Pilih kota tujuan</option>
                            {cities_dest.data?.data.map((city, i) => (
                                <option key={i} value={city.city_id}>{city.city_name}</option>
                            ))}
                        </Select>
                    </div>
                </div>
                <div className={style.additional}>
                    <div className={style.weight}>
                        <label htmlFor="weight">Berat (*kg)</label>
                        <Input id="weight" {...register("weight", { required: true, min: 0 })} type="number" step={0.001} />
                    </div>
                    <div className={style.courier}>
                        <label htmlFor="courier">Kurir</label>
                        <Select id="courier" {...register("courier", { required: true })}>
                            <option value="">Pilih kurir</option>
                            {COURIER.map((courier, i) => (
                                <option key={i} value={courier.id}>{courier.name}</option>
                            ))}
                        </Select>
                    </div>
                </div>
                <div className={style.submit}>
                    <Button type="submit" isLoading={shippingCost.isPending}>Cek harga</Button>
                </div>
            </form>
            <Flow>
                <Flow.If condition={shippingCost.isPending}>
                    <Loading title="Cek biaya pengiriman..." />
                </Flow.If>
                <Flow.ElseIf condition={shippingCost.isSuccess}>
                    <CourierListCard>
                        {shippingCost.data?.data[0].costs.map((cost, i) => (
                            <CourierCard key={i} {...cost} />
                        ))}
                    </CourierListCard>
                </Flow.ElseIf>
                <Flow.ElseIf condition={shippingCost.isError}>
                    <Error
                        status={shippingCost.error?.response?.status ?? 500}
                        code={shippingCost.error?.code ?? "[ERR]"}
                        message={shippingCost.error?.message ?? "Something went wrong!"}
                    />
                </Flow.ElseIf>
            </Flow>
        </Fragment>
    )
}