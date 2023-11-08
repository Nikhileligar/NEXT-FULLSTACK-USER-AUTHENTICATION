import { NextRequest } from "next/server";
import jwt from 'jsonwebtoken'
import { decode } from "punycode";

export const getDataFromToken = (req: NextRequest) => {
    try {
        const token = req.cookies.get('token')?.value || "";
        const decodedToken: any = jwt.verify(token, process.env.TOKEN_SECRET!);
        console.log(decodedToken,'getDataFromToken userId')
        return decodedToken.id;
    } catch (err) {
        console.log(err);
        
    }
}
