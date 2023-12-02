import database from "infra/database.js";

/* Controller */

async function status(request, response) {
  /*
  const result = await database.query("SELECT 1 + 1 as sum;");
  console.log(result.rows);
  */
  const updatedAt = new Date().toISOString();
  const postgres_info = await database.postgres_info();

  // console.log("postgres_info = ", postgres_info);

  response.status(200).json({
    // updated_at: "texto maluco",
    // updated_at: null,
    updated_at: updatedAt,
    postgres_version: postgres_info.postgres_version,
    postgres_max_connections: postgres_info.postgres_max_connections,
    postgres_used_connections: postgres_info.postgres_used_connections,
  });
}

export default status;
