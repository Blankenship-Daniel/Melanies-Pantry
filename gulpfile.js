var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('public/stylesheets/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('public/stylesheets/css/'));
});

// Watch task
gulp.task('default', function() {
    gulp.watch('public/stylesheets/sass/**/*.scss', ['styles']);
});
