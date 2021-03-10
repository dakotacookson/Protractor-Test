exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        browserName:
            'chrome',
        'maxInstances': 2
    },
    framework: 'jasmine',
    specs: ['spec/test.spec.js'],
    chromeOptions: {
        args: [
            '--no-sandbox',
            '--disable-infobars',
            '--disable-dev-shm-usage',
            '--disable-extensions',
            '--log-level=3',
            '--disable-gpu',
            '--window-size=1920,1080',
        ]
    },
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }
};
