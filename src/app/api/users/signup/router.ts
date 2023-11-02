// import { DbConfig } from "@/dbConfig/dbConfig";
// import User from "@/model/userModel";
// import bcrypt from "bcryptjs"
// import { NextRequest, NextResponse } from "next/server";

//  DbConfig()

// export async function POST (request: NextRequest) {
//     try {
//         const userDetails = await request.json();
//         const {name, email, password} = userDetails;
//         const userExists = await User.findOne({email});
//         if (userExists) {
//             console.log("user is already Exists");
//             return NextResponse.json({error: "user Already Exists", status: 400})
//         }
//         // hash password
//         const salt = await bcrypt.genSalt(10)
//         const hashedPassword = await bcrypt.hash(password, salt);

//         const newUser = new User({
//             name,
//             email,
//             password: hashedPassword
//         })
//         const savedUser = await newUser.save();
//         console.log(savedUser);

//         return NextResponse.json({
//             message:"signed up successfully",
//             success: true,
//             savedUser
//         })
//     } catch(err) {
//         console.log(err);
//     }
// }


import {DbConfig} from "@/dbConfig/dbConfig";
import User from "@/model/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
// import { sendEmail } from "@/helpers/mailer";


DbConfig()


export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json()
        const {username, email, password} = reqBody

        console.log(reqBody);

        //check if user already exists
        const user = await User.findOne({email})

        if(user){
            return NextResponse.json({error: "User already exists"}, {status: 400})
        }

        //hash password
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        const newUser = new User({
            username,
            email,
            password: hashedPassword
        })

        const savedUser = await newUser.save()
        console.log(savedUser);

        // //send verification email

        // await sendEmail({email, emailType: "VERIFY", userId: savedUser._id})

        return NextResponse.json({
            message: "User created successfully",
            success: true,
            savedUser
        })
        
        


    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})

    }
}