import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const {
  NODE_ENV,
  POSTGRES_HOST,
  POSTGRES_PORT,
  POSTGRES_DB,
  POSTGRES_DB_TEST,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
} = process.env;

const client: Pool = new Pool({
  host: POSTGRES_HOST,
  port: parseInt(POSTGRES_PORT as string),
  database: NODE_ENV === "dev" ? POSTGRES_DB : POSTGRES_DB_TEST,
  user: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
});

client.on("error", (error: Error) => {
  console.error(error.message);
});
export default client;
