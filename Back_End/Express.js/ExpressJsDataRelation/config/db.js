import mongoose from "mongoose";


const connectDB = async() =>{
    try{
        const connection = await mongoose.connect(process.env.MONGOURL);
        console.log(`DataBase Connected Succesfully ${connection.connection.host}`);
    }
    catch(error){
        console.log(`DAtaBase connection Error ${error.message}`);
        process.exit(1);
    }
}

export default connectDB;