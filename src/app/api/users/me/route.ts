import { getDataFromToken } from "@/helpers/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";
import { DbConfig } from "@/dbConfig/dbConfig";
import User from "@/model/userModel";

DbConfig()

export async function GET(req: NextRequest) {
   try {
        const data = await getUsers(req);
        return NextResponse.json({
            message:"data retrieved successfully",
            data: {
                id: data.id,
                name: data.name
            },
            success: true
        });
    } catch (err) {
        console.log(err);
    }
}

// retrieve data from token id and email and also userDetails
export const getUsers = async (req: NextRequest) => {
    try {
        const userId = await getDataFromToken(req);
        const idFromDb = await User.findOne({_id: userId});
        return idFromDb;
    } catch (err) {
        console.log(err);
        throw new Error('error in getting users')
    }
}
