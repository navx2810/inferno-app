module.exports = {
    compact: false,
    presets: [
        ["es2015", { loose: true, modules: false }]
    ],
    plugins: [
        ["transform-class-properties", {}],
        ["transform-object-rest-spread", {}],
        ["syntax-jsx", {}],
        ["inferno", { imports: true }],
    ]
}