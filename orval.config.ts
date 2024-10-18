import { defineConfig } from 'orval';

export default defineConfig({
    users: {
        output: {
            mode: 'split',
            target: 'api/users/usersApi.ts',
            schemas: 'api/users/model',
            client: 'react-query',
            mock: true,
        },
        input: {
            target: './openapi/post.yaml',
        },
    },
});