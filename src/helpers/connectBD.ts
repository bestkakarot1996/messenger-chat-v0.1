import mongoose from 'mongoose';
import keys from '../configs/dev';

export const connectMongoDB = () => { 
    mongoose.Promise = global.Promise;
    return mongoose.connect(keys.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => { 
        console.log('Connect database success!')
    })
    .catch((err: string) => { 
        console.log("Something wrong when connect to DB! " + err);
    })

};
