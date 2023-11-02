// import { DbConfig } from "@/dbConfig/dbConfig";
// import User from "@/model/userModel";
// import bcrypt from "bcryptjs"
// import { NextRequest, NextResponse } from "next/server";

// DbConfig()

// export default function POST (request: NextRequest)  {
//     try {
//         const reqBody = await request.json();
//         const {email, password} = reqBody;
//         console.log(reqBody);
//         const user = User.findOne({email})
//         if (!user) {
//             return NextResponse.json({
//                 message:"user doesn't exists",
//                 success: false,
//                 status: 400
//             });
//         }
//         const validatePassword = await bcrypt.compare(password, user.password);

//     } catch (err: any) {
//         return NextResponse.json{error: err.message}
//     }
// }