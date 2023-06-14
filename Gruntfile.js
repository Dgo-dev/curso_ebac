module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: { 
            development: {
                files: {
                    'dev/styles/main.css': 'assets/css/main.less'
                }
            },
            production: {
                options: {
                    compress: true, 
                },
                files: {
                    'dist/styles/main.min.css': 'assets/css/main.less'
                }
            }
        },
        watch: {
            less: {
                files: ['assets/css/**/*.less'],
                tasks: ['less:development'] 
            },
            html: {
                files: ['index.html'],
                tasks: ['replace:dest'] 
            }
        },
        uglify: {
            target: {
                files: {
                    'dist/scripts/main.min.js': 'assets/js/main.js'
                }
            }
        }
    })


    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    
    grunt.registerTask('default', ['watch']) // O array contém todas as tarefas que serão execultadas
    grunt.registerTask('build', ['less:production',  'uglify']) 
}
