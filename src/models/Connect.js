import { config } from 'dotenv';
config();

let url = '';



console.log(process.env.NODE_ENV, '>>>>>')
if (process.env.NODE_ENV == 'production') {
    url = process.env.PROD_DB_URI;
}

if (process.env.NODE_ENV == 'test') {
    url = process.env.TEST_DB_URI;
}

if (process.env.NODE_ENV == 'development') {
    url = process.env.DEV_DB_URI;
}

export default url;
