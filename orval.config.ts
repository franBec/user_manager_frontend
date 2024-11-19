import { defineConfig } from "orval";

export default defineConfig({
  users: {
    output: {
      mode: "split",
      target: "src/__generated__/api/users/usersApi.ts",
      schemas: "src/__generated__/api/users/model",
      client: "react-query",
    },
    input: {
      target: "src/openapi/userManagerBackend.yaml",
    },
  },
});
