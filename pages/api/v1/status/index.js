import database from "infra/database.js";

/* Controller */

async function status(request, response) {
  /*
  const result = await database.query("SELECT 1 + 1 as sum;");
  console.log(result.rows);
  */
  const updatedAt = new Date().toISOString();

  /* Pega o parâmetro da URL */
/*
  const databaseName = request.query.databaseName;
  console.log(`Banco de dados selecionado: '${databaseName}'`);
  const database_info = await database.database_info(databaseName);
*/
  const database_info = await database.database_info();

  // console.log("postgres_info = ", postgres_info);
  // console.log('database_info = ');
  // console.log(database_info);
 
  response.status(200).json({
    // updated_at: "texto maluco",
    // updated_at: null,
    updated_at: updatedAt,
    dependencies: {
      database: {
        version: database_info.version,
        max_connections: database_info.max_connections,
        opened_connections: database_info.used_connections,
      },
    },
  });
}

export default status;
