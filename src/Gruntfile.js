module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.initConfig({
        connect: {
            server: {
                options: {
                    port: 8000,
                    base: 'app',
                    hostname: '*'
                }
            }
        }
    });

    // Default task(s).
    grunt.registerTask('default', ['serve']);

    grunt.registerTask('serve', ['connect:server:keepalive']);

};
