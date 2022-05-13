import { readFileSync } from 'fs';
import { mongoose } from 'mongoose';

const configFile = JSON.parse(
    readFileSync(
        new URL('./config.json', import.meta.url)
    )
);

const  mongoDB  = configFile.mongoDB;
console.log("EEEE"+mongoDB);
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    maxPoolSize: 500
};

async function initdb() {
    return new Promise((resolve, reject) => {
        console.log("---- Connection pooling ");
        mongoose.connect(mongoDB, options, (err, res) => {
            if (err) {
                reject('MongoDB Error occoured' + err)

            }
            resolve("MongoDB Connected")
        });
      
    })
}

export { initdb }
