import typescript from "rollup-plugin-typescript2";

export default {
    input: 'src/ts-cache.ts',
    output: [
        { file: 'dist/ts-cache.umd.js', name: 'TSCache', format: 'umd', sourcemap: true },
        { file: 'dist/ts-cache.es5.js', format: 'es', sourcemap: true }
    ],
    watch: { include: 'src/**' },
    plugins: [ typescript({ useTsconfigDeclarationDir: true }) ]
}
