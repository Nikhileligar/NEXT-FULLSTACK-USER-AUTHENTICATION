import mongoose from 'mongoose';

export async function DbConfig() {
    try {
        mongoose.connect("mongodb+srv://newUser:newUser@cluster01.swn9b4m.mongodb.net/");
        const connection = mongoose.connection;
        console.log(connection,"mongo connection")

        connection.on('connected', () => {
            console.log('MongoDB connected successfully');
        })

        connection.on('error', (err) => {
            console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
            process.exit();
        })

    } catch (error) {
        console.log('Something goes wrong!');
        console.log(error);
        
    }


}