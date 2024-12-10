import { NextResponse } from "next/server"
import axios from "axios"
import * as CONST from "#/constant"

axios.defaults.headers.common['key'] = CONST.API_KEY
axios.defaults.headers.post['Content-Type'] = 'application/json';

export async function GET() {
    try {
        const { data } = await axios.get(`${CONST.API_URL}/province`)

        if (data) {
            return NextResponse.json({ data: [] }, { status: 200 })
        }

        return NextResponse.json({ data: data.rajaongkir.results }, { status: 200 })

    } catch (error) {
        if (axios.isAxiosError(error)) {

            const response = {
                code: error.code,
                errors: error.response?.data
            }

            return NextResponse.json(response, { status: error.status })
        }
    }

}

