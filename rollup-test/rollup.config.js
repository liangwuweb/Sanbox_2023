import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';


export default {
    input:'src/main.js',
    output:{
        file:'build/bundles2.js',
        format:'cjs'
    },
    plugins: [
        resolve(),
        babel({ babelHelpers: 'bundled' })
    ]
};