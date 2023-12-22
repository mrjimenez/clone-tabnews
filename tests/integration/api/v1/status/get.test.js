test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  // console.log(responseBody);

  /* updated_at */
  expect(responseBody.updated_at).toBeDefined();
  new Date(responseBody.updated_at).toISOString();
  parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parsedUpdatedAt);
  // console.log(parsedUpdatedAt);

  // Dependencies
  expect(responseBody.dependencies).toBeDefined();
  const dependencies = responseBody.dependencies;

  /* postgres_version */
  expect(dependencies.database.version).toBeDefined();
  // const database_version = dependencies.database.version.split(" ")[1];
  // expect(database_version).toEqual("16.0");
  // const database_version_number = Number(database_version);
  expect(dependencies.database.version).toEqual("16.0");
  const database_version_number = Number(dependencies.database.version);
  expect(database_version_number).toBeGreaterThanOrEqual(16);

  /* postgres_connections_maximum_number */
  expect(dependencies.database.max_connections).toBeDefined();
  const database_max_connections = Number(dependencies.database.max_connections);
  expect(database_max_connections).toStrictEqual(expect.any(Number));
  expect(database_max_connections).toBeGreaterThanOrEqual(0);
  
  /* postgres_connections_used */
  expect(dependencies.database.opened_connections).toBeDefined();
  const database_opened_connections = dependencies.database.opened_connections;
  expect(database_opened_connections).toStrictEqual(expect.any(Number));
  expect(database_opened_connections).toBeGreaterThanOrEqual(1);
  expect(database_opened_connections).toEqual(1);
});

/* test("Teste de SQL injection", async () => {
  // const response = await fetch("http://localhost:3000/api/v1/status?databaseName=local_db");
  // const injection = "local_db";
  const injection = "local_db'; SELECT pg_sleep(4); --";
  const request = `http://localhost:3000/api/v1/status?databaseName=${injection}`;
  const response = await fetch(request);
  expect(response.status).toBe(200);
}); */
 