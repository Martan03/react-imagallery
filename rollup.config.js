import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import scss from 'rollup-plugin-scss';
import terser from '@rollup/plugin-terser';
import path from 'path';

export default {
    input: 'src/index.tsx',
    output: [
        {
            file: path.resolve(__dirname, 'dist/index.js'),
            format: 'cjs',
            sourcemap: true,
            exports: 'named',
            sourcemap: true,
            strict: false,
        },
    ],
    plugins: [
        resolve(),
        commonjs(),
        typescript({ tsconfig: 'tsconfig.json' }),
        scss({ output: 'dist/styles.css' }),
        terser(),
    ],
    external: ['react', 'react-dom'],
};
