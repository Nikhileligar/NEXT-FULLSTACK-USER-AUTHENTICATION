import { DbConfig } from "@/dbConfig/dbConfig";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import User from "@/model/userModel";
import { NextResponse } from "next/server";


DbConfig()

export async function GET () {
    try {
        const users = await User.find();
        console.log(users,'USERS USERS USERS USERS');
        return NextResponse.json({
            message: "users fetched successfully",
            status: 200,
            users
        })
    }catch (err: any) {
        console.log(err);
    }
}  