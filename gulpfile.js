const gulp = require('gulp');
const gls = require('gulp-live-server');

gulp.task('default', () => {
  const server = gls('server/server.js', {env: {NODE_ENV: 'development'}}, 7777);
  server.start();

  // watch the assets
  gulp.watch(['public/**/*'], (file) => {
    console.log(`Changed asset: ${file}`);
    server.notify.apply(server, [file]);
  });
  
  // watch the client files
  gulp.watch(['client/**/**/*.js', 'client/**/**/*.html', 'client/**/**/*.css'], (file) => {
    console.log(`Changed client file: ${file.path}`);
    server.notify.apply(server, [file]);
  });

  // watch the server files
  gulp.watch(['server/**/*.js'], (file) => {
    console.log(`Changed server file: ${file.path}`);
    server.start.bind(server)();
  });
});