import { DbConfig } from "@/dbConfig/dbConfig";
import User from "@/model/userModel";
import bcryptjs from "bcryptjs"
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";


DbConfig()

export async function POST (request: NextRequest)  {
    try {
        const reqBody = await request.json()
        const {email, password} = reqBody;
        console.log(reqBody);

        //check if user exists
        const user = await User.findOne({email});
        if(!user){
            return NextResponse.json({error: "User does not exist"}, {status: 400})
        }        
        //check if password is correct
        const validPassword = await bcryptjs.compare(password, user.password)
        if(!validPassword){
            return NextResponse.json({error: "Invalid password"}, {status: 400});
        }
        console.log(user);

        // add data to token
        const tokenData = {
            id: user._id,
            email:user.email
        }

        const validateToken = jwt.sign(tokenData, process.env.TOKEN_SECRET!,{expiresIn: "1d"})
        const response = NextResponse.json({
            message: "loggedIn successfully",
            name: user.name,
            success: true
        });
        console.log(validateToken,'------------>>>')
        if (validateToken) {
            response.cookies.set("token",validateToken,{
                httpOnly: true
            });
            return response;
            } else {
                return NextResponse.json({message: "forbidden"},{status: 403})
            }
    } catch (err: any) {
        return NextResponse.json({error:err});
    }
}  