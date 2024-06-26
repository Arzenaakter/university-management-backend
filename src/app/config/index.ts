import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.join((process.cwd(), '.env')) });
export default {
  port: process.env.PORT,
  mongodb_url: process.env.MONGODB_URL,
  salt_Rounds: process.env.saltRounds,
  default_pass: process.env.DEFAULT_PASS,
};
