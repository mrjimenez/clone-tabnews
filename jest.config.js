const dotenv = require("dotenv");
dotenv.config({
  path: ".env.development",
});

const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: ".",
});

const jestConfig = createJestConfig({
  moduleDirectories: ["node_modules", "<rootDir>"],
});

console.log("process.env.NODE_ENV: " + process.env.NODE_ENV);
console.log("process.env.DATABASE_URL: " + process.env.DATABASE_URL);

module.exports = jestConfig;
