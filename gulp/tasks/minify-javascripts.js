var gulp = require("gulp");
var uglify = require("gulp-uglify");
var del = require("del");
var config = require("../config.js");

gulp.task("minify-javascripts.clean", () => {
  return del("./javascripts/**/*", { cwd: config.path.output });
});

gulp.task("minify-javascripts", ["minify-javascripts.clean"], () => {
  gulp.src("./javascripts/**/*", { cwd: config.path.input })
    .pipe(uglify(config.uglify))
    .pipe(gulp.dest("./javascripts", { cwd: config.path.output }));
});
