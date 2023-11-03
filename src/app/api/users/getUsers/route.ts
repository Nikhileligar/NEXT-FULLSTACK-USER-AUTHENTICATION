import { DbConfig } from "@/dbConfig/dbConfig";
import User from "@/model/userModel";
import { NextRequest, NextResponse } from "next/server";


DbConfig()

export async function GET (request: NextRequest) {
    try {
        const users = User.find();
        console.log(users);
        return NextResponse.json({
            message: "users fetched successfully",
            status: 200,
            users
        })
    }catch (err: any) {
        console.log(err);
    }
}  