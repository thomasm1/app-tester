'use strict';

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Configurable paths for the application
    var appConfig = {
        app: ''
    };
 
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify:{
          t1:{
            options:{
              sourceMap:true
            },
            files:{
              'dest/all.min.js':['src/one.js','src/two.js']
            }
          },
          t2:{
            files: [{
              cwd: 'src/',
             // src:'**/*.js',
              dest:'target/',
              expand:true,
              flatten:false,
              ext: '.min.js'
            }]
          }
        },
        jasmine: {
            pivotal: {
                src: ['src/*.js','post-list/*.js'],
                options: {
                    specs: ['spec/*.js','post-list/*.js']
                }
            }
        },

        // define jshint options
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish'),
                curly: true,   // require {} around blocks in loops and conditionals
                eqeqeq: true,  // equality checker, e.g. use === instead of ==
                eqnull: true  // suppresses warnings about == null comparisons
            },
            all: {
                src : [
                    'src/*.js',
                    'post-list/*.js'
                
                ]
            },
            test: {
                options: {
                  jshintrc: '.jshintrc'
                },
                src: [
                    'src/*.js',
                    'post-list/*.js'
                ]
              }
        },
/*
        // Test settings
        karma: {
            unit: {
            configFile: 'karma.conf.js',
            singleRun: false
            }
        },
*/
        // Watches files for changes and runs tasks based on the changed files
        watch: {
            js: {
                files: ['src/*.js'],
                tasks: ['newer:jshint:all'],
                options: {
                    livereload: '<%= connect.options.livereload %>'
                }
            },
            gruntfile: {
                files: ['Gruntfile.js']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
            },
            files: [
                    'src/*.js'
                ]
            }, w1: {
                files: ['src/**/*.js'],
                tasks: ['uglify:t1','uglify:t2']
              }
        },

        // The actual grunt server settings
        // connect: {
        //     options:  {
        //         port: 9000,
        //         // Change this to '0.0.0.0' to access the server from outside.
        //         hostname: '0.0.0.0',
        //         livereload: 35729
        //     },
        //     proxies: [
        //         {
        //             context: '/books',
        //             host: 'localhost',
        //             port: 3500,
        //             https: false
        //       }
        //     ],
        //     livereload: {
        //         options: {
        //             open: {
        //                 target: (function () {
        //                     return 'http://' + require('os').hostname() + ':9000';
        //                 })()
        //             },
        //             middleware: function (connect, options) {
        //                 if (!Array.isArray(options.base)) {
        //                     options.base = [options.base];
        //                 }

        //                 // Setup the proxy
        //                 var middlewares = [require('grunt-connect-proxy/lib/utils').proxyRequest];

        //                 // Serve static files.
        //                 options.base.forEach(function(base) {
        //                     middlewares.push(connect.static(base));
        //                 });
                        
        //                 middlewares.push(connect.static('.tmp'));
        //                 middlewares.push(connect().use('/bower_components', connect.static('/bower_components')));
        //                 middlewares.push(connect.static(appConfig.app));

        //                 return middlewares;
        //             }
        //         }
        //     }
        // },


    });

    // grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
    //     if (target === 'dist') {
    //       return grunt.task.run(['build', 'connect:dist:keepalive']);
    //     }
    
    //     grunt.task.run([
    //         'configureProxies:server',
    //         'connect:livereload',
    //         'watch'
    //     ]);
    //   });

    grunt.registerTask('test', [
        
        'jasmine',
        'jshint'
        /*,
        'karma'
    */
        ]);
    
    
      grunt.registerTask('build', [
        'newer:jshint',
        'test'
      ]);
      grunt.loadNpmTasks('grunt-contrib-jasmine');

      grunt.registerTask('default', [
        'test',
        'build',
        'uglify'
      ]);
};