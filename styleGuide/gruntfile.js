module.exports = function(grunt) {
  // Add Grunt Timer
  // $ npm install time-grunt
  // https://www.npmjs.org/package/time-grunt
  require('time-grunt')(grunt);
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'public/stylesheets/application.css': 'sass/application.scss'
        },
        options: {
          sourceComments: "map",
          includePaths: [
            './bower_components/bower-bourbon',
            './bower_components/bower-neat'
          ]
        }
      }
    },
    watch: {
      source: {
        files: ['sass/**/*.scss', 'views/**/*.jade'],
        tasks: ['sass'],
        options: {
          livereload: true, // needed to run LiveReload
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.registerTask('default', ['sass']);
};
