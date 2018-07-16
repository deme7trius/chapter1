var gulp = require('gulp');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');


gulp.task('sass', function(){
  return gulp.src('src/scss/style.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('pub/css'))
});
gulp.task('imagemin', function(){
  return gulp.src('src/images/**/*.+(png|jpg|gif|svg)')
  .pipe(imagemin())
  .pipe(gulp.dest('pub/images'))
});


gulp.watch('src/scss/**/*.scss', ['sass']); 