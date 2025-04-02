import { Schema, model } from "mongoose";

const wweSuperstarSchema = new Schema({
    wwename:String, 
    height:String, 
    finisher:String,
    aka:String, 
    thumbnail:String,
});

const WweSuperstar = model("WweSuperstar",wweSuperstarSchema );

export default WweSuperstar;