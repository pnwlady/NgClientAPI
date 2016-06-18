const gulp = require('gulp');
const webpack = require('webpack-stream');
const KarmaServer = require('karma').Server;


gulp.task('webpack:dev', () => {
  return gulp.src('app/js/entry.js')
    .pipe(webpack({
      devtools: 'source-map',
      output: {
        filename: 'bundle.js'
      }
    }))
    .pipe(gulp.dest('./build'));
});

gulp.task('static:dev', () => {
  gulp.src(['app/**/*.html'])
    .pipe(gulp.dest('./build'));
});

gulp.task('webpack:test', () => {
  gulp.src('test/test_entry.js')
  .pipe(webpack({
    devtool: 'source-map',
    output: {
      filename: 'test_bundle.js'
    }
  }))
  .pipe(gulp.dest('test'));
});

gulp.task('karma', ['webpack:test'], (done) => {
  new KarmaServer({
    configFile: __dirname + '/karma.conf.js'
  }, done).start();
});

gulp.task('default', ['webpack:dev', 'static:dev']);
