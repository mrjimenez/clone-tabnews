import { Client } from "pg";

async function query(queryObject) {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
  });
  await client.connect();
  const result = await client.query(queryObject);
  await client.end();
  return result;
}

async function postgres_info() {
  const q_version = await query("SELECT version() as version;");
  const version = q_version.rows[0].version;
  
  const q_max_connections = await query("SHOW max_connections;");
  const max_connections = q_max_connections.rows[0].max_connections;

  const q_used_connections = await query("SELECT count(*) AS used_connections FROM pg_stat_activity;");
  const used_connections = q_used_connections.rows[0].used_connections;
  
  const result = {
    postgres_version: version,
    postgres_max_connections: max_connections,
    postgres_used_connections: used_connections,
  }
  
  return result;
}

export default {
  query: query,
  postgres_info: postgres_info
};
