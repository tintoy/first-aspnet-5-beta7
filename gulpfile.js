/// <binding BeforeBuild="build" />

var gulp = require("gulp");
var plugins = require("gulp-load-plugins")();

var tsConfig = require("./scripts/app/tsconfig.json");

gulp.task("default", ["build"]);

gulp.task("build", function () {
	// TODO: Build and stage styles / scripts

	return gulp.src("scripts/app/**/*.ts")
		.pipe(
			plugins.typescript(
				tsConfig.compilerOptions,
				plugins.typescript.reporter.longReporter()
			)
		)
		.pipe(
			gulp.dest("wwwroot/scripts/app")
		);
});
