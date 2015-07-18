/*global module:false*/
'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.

    sass: {
      build: {
          files: {
              'css/style.css': 'sass/main.scss'
          }
      }
    },
    connect: {
      server: {
        options: {
          port: 9001,
          base: './'
        }
      }
    },
    
    nodeunit: {
      files: ['test/**/*_test.js']
    },
    
    htmlhint: {
        build: {
            options: {
                'tag-pair': true,
                'tagname-lowercase': true,
                'attr-lowercase': true,
                'attr-value-double-quotes': true,
                'doctype-first': true,
                'spec-char-escape': true,
                'id-unique': true,
                'head-script-disabled': true,
                'style-disabled': true
            },
            src: ['index.html']
        }
    },

    uglify: {
        build: {
            files: {
                'build/js/base.min.js': ['js/*.js']
            }
        }
    },

    jshint: {
          files: ['js/*.js'],
          options: { jshintrc: '.jshintrc',
            globals: {  
               
            },
            ignores : []
          }
      },

    watch: {
      options: {
        livereload: true,
      },
      html: {
        files: ['index.html']
      },
      js: {
          files: ['/js/*.js'],
          tasks: ['uglify']
      },
      sass: {
        files: ['sass/*.scss'],
        tasks: ['css']
      }
    }
    
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-htmlhint');
grunt.loadNpmTasks('grunt-contrib-connect');

  // Default task.
  grunt.registerTask('default', ['css', 'js', 'connect:server', 'watch']);
  grunt.registerTask('css', ['sass']);
  grunt.registerTask('js', ['jshint', 'uglify']);
  grunt.registerTask('preview', ['connect:server','watch']);

};
