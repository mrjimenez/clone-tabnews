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

  /* postgres_version */
  expect(responseBody.postgres_version).toBeDefined();
  const postgres_version = Number(responseBody.postgres_version.split(" ")[1]);
  expect(postgres_version).toBeGreaterThanOrEqual(16);

  /* postgres_connections_maximum_number */
  expect(responseBody.postgres_max_connections).toBeDefined();
  const postgres_max_connections = Number(responseBody.postgres_max_connections);
  expect(postgres_max_connections).toStrictEqual(expect.any(Number));
  expect(postgres_max_connections).toBeGreaterThanOrEqual(0);
  
  /* postgres_connections_used */
  expect(responseBody.postgres_used_connections).toBeDefined();
  const postgres_used_connections = Number(responseBody.postgres_max_connections);
  expect(postgres_used_connections).toStrictEqual(expect.any(Number));
  expect(postgres_used_connections).toBeGreaterThanOrEqual(0);
});
