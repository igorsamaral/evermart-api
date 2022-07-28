import mongoose, { Connection } from "mongoose";

export const mongooseConnection = () => new Promise((resolve, reject) => {
    mongoose.connect('mongodb+srv://root:root@trybe.fmttlhj.mongodb.net/Cookmaster?retryWrites=true&w=majority');
    const db: Connection = mongoose.connection;
    db.on('error', error => {
        console.error(`Error connecting to database.`);
        reject(error);
    });
    db.once('open', () => {
        console.log(`Connexion to dabatase successfull.`);
        resolve(mongoose);
    });
});