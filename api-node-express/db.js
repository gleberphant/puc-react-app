import pg from "pg";

const PGConn = new pg.Pool({
  host: "10.0.0.51",
  port: 5432,
  user: "postgres",
  password: "postgres",
  database: "puc-react-app",
});

export default PGConn;
