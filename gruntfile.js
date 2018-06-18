module.exports = function(grunt) {

  grunt.registerTask('default', 'copy');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("dd-mm-yyyy") %>\n' +
      '* http://<%= pkg.homepage %>/\n' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
      '<%= pkg.author.name %>; Licensed MIT */',

    clean: {
      dest: ['dest', 'dest2']
    },

    copy: {
      t1: {
        src: 'src/*',
        dest: 'dest/'
      }
    },

    concat: {
      index: {
        options: {
          process: true
        },
        src: ['src/index.html'],
        dest: 'public/index.html'
      }
    },

    // uglify: {
    //   build: {
    //     options: {
    //       sourceMap: false,
    //       banner: '<%= banner %>'
    //     },
    //     files: {
    //       'dest/output.min.js': ['src/app.js', 'src/one.js', 'src/t/two.js']
    //     }
    //   }
    // },

    uglify: {
      build: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        files: [{
          cwd: 'src/',
          src: '**/*.js',
          dest: 'public/<%= pkg.version %>',
          ext: '.min.js',
          expand: true,
          flatten: false
        }]
      }
    },

    watch: {
      js: {
        files: ['src/**/*.js'],
        tasks: ['uglify']
      }
    }
  });
};