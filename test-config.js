exports.config={
    runner: 'local',
    port: 4723,
    host: 'localhost',
    path: '/wd/hub',
    logLevel: 'info',
    framework: 'mocha',
    mochaOpts:{
        ui:'bdd',
        require:['@babel/register'],
        timeout: 600000
    },
    maxInstances:1,
    sync:true,
    specs:[
        './playWithMocha.js'
    ],
    capabilities:[{
        
            "platformName": "Android",
            "appium:automationName": "UiAutomator2",
            "appium:udid": "84B7N16523003243",
            "appium:appPackage": "com.wdiodemoapp",
            "appium:appActivity": ".MainActivity"
          
    }]
}