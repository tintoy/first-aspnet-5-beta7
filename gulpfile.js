/// <binding BeforeBuild="build" />

var gulp = require("gulp");
var plugins = require("gulp-load-plugins")();

var tsConfig = require("./src/app/tsconfig.json");

gulp.task("default", ["build"]);
gulp.task("build", ["build:scripts", "build:templates"]);

gulp.task("build:scripts", function () {
	// TODO: Build and stage styles / scripts

	return gulp.src("src/app/**/*.ts")
		.pipe(
			plugins.typescript(
				tsConfig.compilerOptions,
				plugins.typescript.reporter.longReporter()
			)
		)
		.pipe(
			gulp.dest("wwwroot/app")
		);
});

gulp.task("build:templates", function () {
	// TODO: Build and stage styles / scripts

	return gulp.src("src/app/**/*.html")
		.pipe(
			gulp.dest("wwwroot/app")
		);
});
