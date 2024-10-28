import { defineConfig } from 'orval';

export default defineConfig({
    users: {
        output: {
            mode: 'split',
            target: 'src/api/users/usersApi.ts',
            schemas: 'src/api/users/model',
            client: 'react-query',
        },
        input: {
            target: 'src/openapi/post.yaml',
        },
    },
});