'use strict';

module.exports = function(grunt){
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
          'dest/all.min.js':['src/app.js','src/one.js','src/two.js']
        }
      },
      t2:{
        files: [{
          cwd: 'src/',
          src:'**/*.js',
          dest:'target/',
          expand:true,
          flatten:false,
          ext: '.min.js'
        }]
      }
    },
    watch: {
      w1: {
        files: ['src/**/*.js'],
        tasks: ['uglify:t1','uglify:t2']
      }
    }
  });
};