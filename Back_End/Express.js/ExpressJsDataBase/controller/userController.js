import { Eraser } from "lucide-react";
import user from "../model/userModel.js";

export const create = async(res, req) => {
    try{
        const userData = new user (req,body);
        const {email} = userData;

        const userExist = await user.findOne({email});

        if (userExist){
            return res.status(409).json({
                message: "User Already Exists"
            });
        }

        const savedUser = await userData.save();

        return res.status(201).json(savedUser);

    }catch(error){
        return res.status(500).json({
            message: "Intrnal Server Error"
        });
    }
}

export const getAllData = async (req, res) => {
    try{
        const allData = await user.find();

        if (allData.length === 0) {
            return res.status(404).json({
                message: "No Data Exists"
            });
        }
        return res.status(200).json(allData);
    }catch(error){
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }

}