var gulp    = require('gulp'),
    $       = require('gulp-load-plugins')(),
    open    = require('gulp-open'), // // gulp-open does not work as $.open ????????
    wiredep = require('wiredep'),
    server  = require('./config/server.js'),
    paths   = require('./config/paths')



gulp.task('stylus', function() {
  return gulp.src('./src/styles/main.styl')
    .pipe($.stylus())
    .pipe($.rename('material-colors.css'))
    .pipe(gulp.dest('./dist'))
    .pipe($.notify({message: 'Stylus Compiled'}));
});

gulp.task('css', ['stylus'], function() {
  return gulp.src('./src/styles/**/*.css')
    .pipe($.concat('main.css'))
    .pipe(gulp.dest('./dist'))
    .pipe($.notify({message: 'Css Found in src/ Compiled'}));
});

/*
 *  Inject BOWER DEPENDENCIES with wiredep into demo/index.html
 *  @NOTE Wiredep will only inject the files by prepedning them with a ../ this still works.
 */
gulp.task('inject:bower', function () {

  var bowerFiles = wiredep.stream;
  return gulp.src( './demo/index.html' )
    .pipe( bowerFiles({
      directory: './src/lib',
      ignorePath: '/src'
    }))
    .pipe( gulp.dest( './demo' ) );
});


/*
 *  Inject JS and CSS files into demo/index.html
 */
gulp.task('inject', ['inject:bower'], function(){
  /*
   * @NOTE: read:false tells gulp to not read the file's contents. We just want the file paths;
   */
  // Grab dist/oxford.css and dist/main
  var styles  = gulp.src( './dist/*.css', {read:false} );

  // because we need to read the file in order to find wheer to inject;
  var target  = gulp.src( paths.demo.index );

  return target
    // inject '/oxford.css' and './main.css' into demo/index.html
    .pipe( $.inject( styles, {
      addRootSlash: true,
      relative:false,
      ignorePath: 'dist',
      name: 'styles'
    }))
    .pipe( gulp.dest( paths.demo.root ))
    .pipe( $.notify({message: 'Injection Finished and worked'}));

});

gulp.task('watch', function() {
  $.livereload.listen()
  gulp.watch('./demo/**/*.html', $.livereload.changed);
  gulp.watch('./demo/**/*.js', $.livereload.changed);
  gulp.watch('./demo/styles/*.css', $.livereload.changed);
  // gulp.watch( paths.src.scripts, ['jshint'] );
  gulp.watch( './src/styles/**/*.styl', ['css', $.livereload.changed]);
});

/*
 *  Runs the server.js file
 *  the server file is serving up demo/index.html, dist/, and src/
 *  Now in your index.html you can access the files by prepending a root slash
 *  Example: In order to load ./src/scripts/main.js you would put the following in demo/index.html
 *  - <script src="/scripts/main.js"></script>
 *
*/

// @NOTE 'serve' just runs the server.js and builds files
// @NOTE 'server' runs the serve task and opens the browser
gulp.task('serve',['demo', 'watch'], function(){
  server.run();
});
gulp.task('server', ['serve'], function(){
  return gulp.src( './demo/index.html' )
    .pipe( open("", {url: 'localhost:9000'} ));
});

//task to tell travis to run karma start and run in phantom.js
gulp.task('test', $.shell.task([
  'karma start karma.conf.js --browsers Firefox --single-run'
]));

gulp.task('demo', ['css', 'inject'])

// gulp.task('build', ['css', 'inject']);

// gulp.task('default', ['build']);
