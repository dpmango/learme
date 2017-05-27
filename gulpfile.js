// DECLARE VARIABLES
var gulp          = require('gulp');
var runSequence   = require('run-sequence');
var browserSync   = require('browser-sync').create();

// Default task
gulp.task('default', function (callback) {
  runSequence('watch',
    'browserSync',
    callback
  )
})

gulp.task('watch', function(){
  gulp.watch('./src/**/*', ['reload']);
})

gulp.task('reload', function () {
  browserSync.reload();
});

// hot reload
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'src'
    },
  })
})
