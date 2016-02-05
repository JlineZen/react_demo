var gulp = require('gulp');
var browserify = require('browserify');
var babel = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var concat = require('gulp-concat');
var lint = require('gulp-eslint');
var sourcemaps = require('gulp-sourcemaps');

var config = {
  paths: {
    js: './src/*.js',
    mainJs: './src/main.js',
    dist: './dist'
  }
};

gulp.task('bulid', function() {
  var bundler = browserify('./src/main.js', { debug: true }).transform(babel, {presets: ['es2015', 'react', 'stage-2']});
  function rebundle() {
    bundler.bundle()
          .on('error', console.error.bind(console))
          .pipe(source('bundle.js'))
          .pipe(buffer())
          .pipe(sourcemaps.init({ loadMaps: true }))
          .pipe(sourcemaps.write('./'))
          .pipe(gulp.dest(config.paths.dist))
  }

  rebundle();              
});

gulp.task('lint', function () {
    return gulp.src(config.paths.js)
        .pipe(lint({ config: 'eslint.config.json' }))
        .pipe(lint.format());
});

gulp.task('watch', function() {
  gulp.watch(config.paths.js, ['bulid', 'lint']);
});

gulp.task('default', ['bulid', 'lint', 'watch']);