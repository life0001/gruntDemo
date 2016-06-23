/**
 * Created by Matthew on 2016/5/9.
 */
module.exports = function (grunt) {
    // 项目配置
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'), //grunt.file.readJSON会将我们的配置文件读出，并且转换为json对象,方便下面调用pkg.xxx
        uglify: {  //Node模块 用于JS文件压缩与合并
            //options: {
            //    banner: '/*! <%= pkg.file %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            //},
            //build: {
            //    src: 'src/<%=pkg.file %>.js',   //在package.json内找到file并赋值到这里）
            //    dest: 'dest/<%= pkg.file %>.min.js'  //找到dest目录，没有就新建，然后将压缩文件搞进去
            //}
            "my_target": {
                "files": {
                    'dest/libs.min.js': ['src/jquery.1.9.1.js', 'src/circle_progress.js', 'src/udd_ul_paid.js'] //压缩后合并这几个文件，有先后顺序
                }
            }
        },
        cssmin: {  //Node模块 用于css文件压缩与合并
          compress: {
            files: {
              'dest/1.min.css': //生成后的压缩文件名和路径
            [
              "1.css",  //把要压缩或则合并的文件都放这里
              "a.css"
            ]
            }
          }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');  //加载uglify模块（压缩与合并JS） 
    grunt.loadNpmTasks('grunt-contrib-cssmin');  //加载cssmin模块（压缩与合并CSS）
    // 注册任务
    grunt.registerTask('default', ['uglify','cssmin']);
}
