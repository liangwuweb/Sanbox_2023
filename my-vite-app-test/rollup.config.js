import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';


export default {
    input:'src/demo.js',
    output:{
        file:'build/bundles.js',
        format:'cjs'
    },
    plugins: [
        resolve(),
        babel({ babelHelpers: 'bundled' })
    ]
};