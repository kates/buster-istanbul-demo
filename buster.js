module.exports.tests = {
    environment: "node",

    rootPath : "./",
    sources: [
        "src/**/*.js"
    ],
    libs: [
        "lib/**/*.js"
    ],
    tests : [
       "test/**/*-test.js"
    ],
    extensions: [
        require('buster-istanbul')
    ]
};
