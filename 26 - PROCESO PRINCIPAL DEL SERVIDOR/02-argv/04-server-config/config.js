import "dotenv/config";

export default {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
    MONGO_ATLAS_URL: process.env.MONGO_ATLAS_URL,
    MONGO_LOCAL_URL: process.env.MONGO_LOCAL_URL,
    MONGO_QA_URL: process.env.MONGO_QA_URL
}