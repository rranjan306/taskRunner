module.exports = function(grunt) {

  grunt.registerTask('default', 'copy');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    copy: {
      t1: {
        src: 'src/*',
        dest: 'dest/'
      }
    },

    // uglify: {
    //   target1: {
    //     options: {
    //       sourceMap: true
    //     },
    //     files: {
    //       'dest/output.min.js': ['src/app.js', 'src/one.js', 'src/t/two.js']
    //     }
    //   }
    // }

    uglify: {
      main: {
        files: [{
          cwd: 'src/',
          src: '**/*.js',
          dest: 'dest2/',
          expand: true,
          flatten: false,
          ext: '.min.js'
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