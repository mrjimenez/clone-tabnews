import { Client } from "pg";

async function query(queryObject) {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    ssl: process.env.NODE_ENV === "development" ? false : true,
  });
  
  console.log("Credenciais do Postgres:",{
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
  })
  
  
  try {
    await client.connect();
    const result = await client.query(queryObject);
    return result;
  } catch (error) {
    console.error('something bad has happened!', error);
    // console.error('something bad has happened!', error.stack);
    throw error;
  } finally {
    await client.end();
  }
}

async function database_info() {
  // const q_version = await query("SELECT version();");
  const q_version = await query("SHOW server_version;");
  const version = q_version.rows[0].server_version;
  
  const q_max_connections = await query("SHOW max_connections;");
  const max_connections = q_max_connections.rows[0].max_connections;

  // const databaseName = "local_db";
  const databaseName = process.env.POSTGRES_DB;
  // const query_used_connections =
  //    "SELECT count(*) AS used_connections FROM pg_stat_activity;";
  // const query_used_connections =
  //    "SELECT * FROM pg_stat_activity WHERE datname = 'local_db';";
  // "SELECT count(*)::int FROM pg_stat_activity WHERE datname = 'local_db';"
  // "SELECT count(*)::int FROM pg_stat_activity WHERE datname = '" + databaseName + "';"
  // console.log(`q_used_connections = ${q_used_connections}`);
/*
  const query_used_connections =
    `SELECT count(*)::int FROM pg_stat_activity WHERE datname = '${databaseName}';`
*/
  const query_used_connections =
  {
    text: "SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1;",
    values: [databaseName]
  }
  const q_used_connections = await query(query_used_connections);
  // console.log(q_used_connections);
  const used_connections = q_used_connections.rows[0].count;
  
  const result = { 
      // vendor: "postgresql",
      version: version,
      max_connections: max_connections,
      used_connections: used_connections,
  };
  
  return result;
}

export default {
  query: query,
  database_info: database_info
};
