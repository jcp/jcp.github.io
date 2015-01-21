module.exports = function(grunt) {
  'use strict';

  // register tasks
  grunt.registerTask('default', ['concat:js', 'uglify:js', 'less', 'watch', 'autoprefixer']);

  // configure
  grunt.initConfig({
    config: {
      build: 'build',
      assets: 'assets'
    },

    autoprefixer: {
      options: {
        browsers: ['last 2 versions', 'ie 7', 'ie 8', 'ie 9']
      },
      no_dest: {
        src: '<%= config.assets %>/css/main-min.css'
      }
    },

    concat: {
      js: {
        options: {
          separator: '\n\n\n'
        },
        src: [
          // bower
          '<%= config.build %>/bower/jquery/dist/jquery.min.js',
          '<%= config.build %>/bower/particles.js/particles.min.js',

          // application
          '<%= config.build %>/js/main.js',
        ],
        dest: '<%= config.assets %>/js/main.js',
        nonull: true
      },
    },

    uglify: {
      options: {
        mangle: false,
        sourceMap: process.env['DEBUG'] == 'true',
        sourceMapIncludeSources: process.env['DEBUG'] == 'true',
        compress: {
            drop_console: ! process.env['DEBUG'] == 'true',
        },
      },
      js: {
        files: {
          '<%= config.assets %>/js/main-min.js': ['<%= config.assets %>/js/main.js']
        }
      }
    },

    less: {
      production: {
        options: {
          cleancss: true,
          compress: true
        },
        files: {
          '<%= config.assets %>/css/main-min.css': '<%= config.build %>/less/main.less'
        }
      }
    },

    watch: {
      js: {
        files: ['<%= config.build %>/js/*.js'],
        tasks: ['concat:js', 'uglify:js'],
        options: {
          livereload: true,
        }
      },
      css: {
        files: ['<%= config.build %>/less/*.less'],
        tasks: ['less', 'autoprefixer'],
        options: {
          livereload: true,
        }
      }
    }
  });

  // load tasks
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

};
