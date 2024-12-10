import { NextResponse } from "next/server"
import axios from "axios"
import { API_KEY } from "#/constant"

axios.defaults.headers.common['key'] = API_KEY
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export async function POST(request: Request) {
    try {
        const body = await request.json()

        const { data } = await axios.post("https://api.rajaongkir.com/starter/cost", body)

        return NextResponse.json({ data: data.rajaongkir.results }, { status: 200 })

    } catch (error) {
        if (axios.isAxiosError(error)) {

            const response = {
                code: error.code,
                errors: error.response?.data
            }

            return NextResponse.json(response, {
                status: error.status
            })
        }
    }

}