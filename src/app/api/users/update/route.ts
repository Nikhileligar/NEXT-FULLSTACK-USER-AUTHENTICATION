import { DbConfig } from "@/dbConfig/dbConfig";
import User from "@/model/userModel";
import { NextRequest, NextResponse } from "next/server";
import {getUsers} from '../me/route'

DbConfig()

export async function PATCH(req: NextRequest) {
    try {
            const {_id} = await getUsers(req);
            const {name} = await req.json();
            const details = await User.findOne({_id});
            if (details) {
                await User.updateOne( {_id}, {name: name} );
                const response =  NextResponse.json({
                    name: name,
                    message: 'name updated successfully',
                    success: true
                })
                return response;
            } else {
                return NextResponse.json({
                    message: `error in updating name ${name}`
                });
            }
    } catch (err) {
        console.log(err);
    }
}



//////////////////////////////////////////////////
// const userId = await getDataFromToken(req);
        // const {name} = await req.json();
        // console.log(userId,'useridididid',name)
        // const details = await User.findOne({_id: userId});
        // if (!details) {
        //     console.log('id not exists');
        // } else {
        //     const updateDetails = await User.updateOne({_id: userId, name});
        //     const response =  NextResponse.json({
        //         name: updateDetails,
        //         message: 'updated successfully',
        //         success: true
        //     })
        //     return response;
        // }