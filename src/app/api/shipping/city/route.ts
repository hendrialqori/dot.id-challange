import { NextRequest, NextResponse } from "next/server"
import axios from "axios"
import * as CONST from "#/constant"

axios.defaults.headers.common['key'] = CONST.API_KEY
axios.defaults.headers.post['Content-Type'] = 'application/json';

export async function GET(req: NextRequest) {
    try {
        const params = req.nextUrl.searchParams
        const province_id = params.get('province_id')!

        const searchParams = new URLSearchParams()
        searchParams.append("province", province_id)

        const { data } = await axios.get(`${CONST.API_URL}/city?${searchParams.toString()}`, {
            headers: {
                "key": CONST.API_KEY
            }
        })
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

