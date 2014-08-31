module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: {
        options: {
          port: 9001,
          hostname: 'localhost',
          base: '_site',
          open: {
            target: 'http://localhost:9001',
            appname: 'open'
          }
        }
      }
    },
    watch: {
      css: {
        files: ['css/*.css', '_posts/**/*', '_layouts/*', 'cv/*', '*/', 'js/*.js'],
        tasks: ['default'],
        options: {
          livereload: true
        }
      }
    },
    jekyll: {
      src: {
        options: {
          src: '.',
          dest: './_site/'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jekyll');

  // Default task(s).
  grunt.registerTask('default', ['jekyll']);

  // Server task
  grunt.registerTask('server', ['jekyll','connect','watch']);

};
