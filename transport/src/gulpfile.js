var gulp         = require("gulp");
var sass         = require("gulp-sass"); // Sass
var plumber      = require("gulp-plumber"); //Продолжает работу при ошибках
var postcss      = require("gulp-postcss"); //Postcss
var autoprefixer = require("autoprefixer"); //Ставит префиксы
var server       = require("browser-sync"); //Server
var mqpacker     = require("css-mqpacker"); //Собирает и сортирует media в конце кода
var minify       = require("gulp-csso"); //Минификация css
var rename       = require("gulp-rename"); //Изменяет имя
var imagemin     = require("gulp-imagemin"); //Оптимизирует картинки

var run          = require("run-sequence"); //Поочереди запускает таски
var del          = require("del"); // Удаляет

gulp.task("style", function() {
  gulp.src("sass/style.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer({browsers: [
        "last 1 version",
        "last 2 Chrome versions",
        "last 2 Firefox versions",
        "last 2 Opera versions",
        "last 2 Edge versions"
      ]}),
      mqpacker({
        sort: true
      })
    ]))
    .pipe(server.reload({stream: true}))
    .pipe(gulp.dest("css"))
    .pipe(minify())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("css"));
});

gulp.task("serv", ["style"], function() {
  server.init({
    server: "."
  });

  gulp.watch("sass/**/*.scss", ["style"]);
  gulp.watch("*.html") .on("change", server.reload);
});

gulp.task("images", function() {
  return gulp.src("img/**/*.{png,jpg,gif}")
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.jpegtran({progressive: true})
    ]))
    .pipe(gulp.dest("img"));
});

gulp.task("symbols", function() {
  return gulp.src("img/icons/*.svg")
    .pipe(svgmin())
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename("symbols.svg"))
    .pipe(gulp.dest("img"));
});

gulp.task("copy", function() {
  return gulp.src([
    "fonts/**/*.{woff,woff2}",
    "img/**",
    "js/**",
    "*.html"
  ], {
    base: "."
  })
  .pipe(gulp.dest("../build"));
});

gulp.task("clean", function() {
  return del("build");
});

gulp.task("build", function(fn) {
  run(
    "clean",
    "copy",
    "style-build",
    "images-build",
    "symbols-build",
    fn
  );
});

gulp.task("style-build", function() {
  gulp.src("sass/style.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer({browsers: [
        "last 1 version",
        "last 2 Chrome versions",
        "last 2 Firefox versions",
        "last 2 Opera versions",
        "last 2 Edge versions"
      ]}),
      mqpacker({
        sort: true
      })
    ]))
    .pipe(server.reload({stream: true}))
    .pipe(gulp.dest("build/css"))
    .pipe(minify())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("build/css"));
});
