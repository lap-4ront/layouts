const { src, dest, watch, series, parallel, lastRun } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

const browserSync = require("browser-sync");
const server = browserSync.create();

const PATHS = {
  bootstrapSass: "./src/styles/sass/bootstrap.scss",
  mainSass: "./src/styles/sass/main.scss",
  html: "./src/index.html"
};

const BOOTSTRAP = () =>
  src(PATHS.bootstrapSass, { since: lastRun(HTML) })
    .pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))
    .pipe(dest("./dist/css"))
    .pipe(server.stream());

exports.BOOTSTRAP = BOOTSTRAP;

const SASS = () =>
  src(PATHS.mainSass)
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(dest("./dist/css"))
    .pipe(server.stream());

exports.SASS = SASS;

const HTML = () =>
  src(PATHS.html, { since: lastRun(HTML) })
    .pipe(dest("./dist"))
    .pipe(server.stream());

exports.HTML = HTML;

const serve = () => {
  server.init({
    server: {
      baseDir: "dist"
    }
  });
  watch(PATHS.html, { usePolling: true }, HTML);
  watch(
    "./src/styles/sass/**/*.scss",
    { usePolling: true },
    series(BOOTSTRAP, SASS)
  );
};

exports.default = series(HTML, BOOTSTRAP, SASS, serve);
