exports.config = {
    framework: 'mocha',
    mochaOpts: {
        reporter: 'mochawesome',
        reporterOptions: {
            reportFilename: "report",
            charts: true,
            autoOpen: true,
        },
    },
    specs : ['test/**/*.spec.js'],
}