module.exports = {
    reporter: 'mochawesome',
    'reporter-options': [
    'reportDir=reports',
    'reportFilename=report',
    ],
    mochaOpts: {
        parallel: true
    },
    spec : 'test/specs/*.js',
}