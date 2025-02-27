const presets = [
    [
        "@babel/preset-env",
        {
            targets: {
                edge: "17",
                firefox: "60",
                safari: "11.1",
            }
        }
    ]
]

module.exports = { presets }