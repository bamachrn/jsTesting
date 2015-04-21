module.exports = function(grunt) {
grunt.initConfig({
    jasmine: {
        coverage: {
            src: <source code files in the project>, //'functions.js',
            options: {
                specs: <test spec files>, //'spec/test_spec.js',
                template: require('grunt-template-jasmine-istanbul'),
                templateOptions: {
                    coverage: 'reports/coverage.json',
                    report: [
                            {type: 'html', options: {dir: 'coverage/html'}},
                            {type: 'cobertura', options: {dir: 'coverage/cobertura'}},
                          
                        ]
                }
            }
        }
    },

sonarRunner: {
        analysis: {
            options: {
                debug: true,
                separator: '\n',
                sonar: {
                    host: {
                        url: 'http://localhost:9000'
                    },
                 
                    projectKey: 'sonar:grunt-sonar-runner:0.1.0',
                    projectName: 'Gruntsonar',
                    projectVersion: '0.10',
                    sources: ['functions.js'].join(','),
                    language: 'js',
 
                }
                }
        
    }
},

karmaSonar: {
 runnerProperties: {
    'sonar.links.homepage': 'https://github.com/mdasberg/grunt-karma-sonar',
    'sonar.branch': 'master'
},
    your_target: {
                  project:{
                        Key: 'sonar:grunt-sonar-runner:0.1.0',
                        Name: 'Gruntsonar',
                         Version: '0.10'
                          },
               
     
      paths: [
        {
          cwd: '/jasmineapp', // the current working directory'
          src: '/jasmineapp/functions.js', // the source directory within the cwd
          test: '/jasmineapp/spec/test_spec.js', // the test directory within the cwd
          reports: {
              unit: '/coverage/cobertura/coverage.xml', // the result file within the cwd
              coverage: '/coverage/lcov.info' // the glob for lcov files'
          }
        }

   
]
},
 exclusions: []
}               


});
grunt.loadNpmTasks('grunt-contrib-jasmine');
grunt.loadNpmTasks('grunt-sonar-runner');
grunt.loadNpmTasks('grunt-karma-sonar');
grunt.registerTask('default', ['jasmine', 'sonarRunner']);
};
