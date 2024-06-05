/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsConfigPaths from 'vite-tsconfig-paths'
import { resolve } from 'node:path';

const path = resolve(__dirname, './src/app');

const config = defineConfig({
    plugins: [react(), tsConfigPaths()],
    resolve: {
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.module.css', '.css']
    }
});

export default config;