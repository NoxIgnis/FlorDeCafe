import dotenv from "dotenv";
import path from "path";
const envPath = path.resolve(__dirname, '../../.env');

dotenv.config({ path: envPath });

export const config =  {port:getEnv("PORT_START")};

function getEnv(name:string) {
    if(name){
        return process.env[name];
    }else{
        console.log(`ERRO AO SOLICITAR ${name}`);
        return '';
    }
}
