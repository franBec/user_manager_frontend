import { defineConfig } from 'orval';

export default defineConfig({
    users: {
        output: {
            mode: 'split',
            target: 'api/users/usersApi.ts',
            schemas: 'api/users/model',
            client: 'react-query',
        },
        input: {
            target: './openapi/post.yaml',
        },
    },
});