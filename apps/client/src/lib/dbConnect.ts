import mongoose from "mongoose";

// import mongoose from "mongoose"
let alreadyDone = false;

export async function ensureDbConnected() {
    if(alreadyDone){
        return;
    }
    alreadyDone = true;
    
    await mongoose.connect('mongodb+srv://Project0u:Project0u@cluster0.9e2vu4f.mongodb.net/courses' , { useNewUrlParser: true, useUnifiedTopology: true })
}