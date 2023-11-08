import {NextRequest, NextResponse} from 'next/server';
import User from '@/model/userModel';
import { DbConfig } from '@/dbConfig/dbConfig';
import { getDataFromToken } from '@/helpers/getDataFromToken';

DbConfig()

export async function DELETE(req: NextRequest) {
    try {
        const userId = await getDataFromToken(req);
        console.log(userId,"userId retrieved while deleting");
        const deleteUser = await User.findOneAndDelete({_id: userId});
        if(!deleteUser) {
            return NextResponse.json({
                message:`user not exists with this ${userId} `
            });
        }
        return NextResponse.json({
            message:`user deleted successfully`,
            success: true
        });

    } catch(err) {
        console.log(err, 'error in deleting the account')
    }
}