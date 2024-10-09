import mongoose from 'mongoose';

const connectDB = async () => {
    try{
        await mongoose.connect('mongodb://localhost/nombredeladb');
    } catch (error) {
        console.log('Error connecting to the database: ', error);
    }
};