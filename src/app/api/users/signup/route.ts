import { DbConfig } from "@/dbConfig/dbConfig";
import User from "@/model/userModel";
import bcrypt from "bcryptjs"
import { NextRequest, NextResponse } from "next/server";

 DbConfig()

export async function POST (request: NextRequest) {
    try {
        const userDetails = await request.json();
        const {name, email, password} = userDetails;
        const userExists = await User.findOne({email});
        if (userExists) {
            console.log("user is already Exists");
            return NextResponse.json({error: "user Already Exists", status: 400})
        }
        // hash password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            name,
            email,
            password: hashedPassword
        })
        const savedUser = await newUser.save();
        console.log(savedUser);

        return NextResponse.json({
            message:"signed up successfully",
            success: true,
            savedUser
        })
    } catch(err) {
        console.log(err);
    }
}