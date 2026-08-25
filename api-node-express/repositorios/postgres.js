import pg from "pg";

export const DB = new pg.Pool({
  host: "10.0.0.18",
  port: 5432,
  user: "postgres",
  password: "postgres",
  database: "puc-react-app",
});
