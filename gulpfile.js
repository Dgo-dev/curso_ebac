const packageGulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourceMaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const imageMin = require('gulp-imagemin');

function comprimeImg() {
    return packageGulp.src('./source/images/*')
        .pipe(imageMin())
        .pipe(packageGulp.dest('./build/images'))
}

function comprimeJs() {
    return packageGulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(packageGulp.dest('./build/scripts'))
}

function compiladorSass() {
    return packageGulp.src('./source/styles/main.scss')
        .pipe(sourceMaps.init())
            .pipe(sass({
                outputStyle: 'compressed'
            }))
            .pipe(sourceMaps.write('./maps'))
            .pipe(packageGulp.dest('./build/styles'))
}


exports.default = function() {
    packageGulp.watch('./source/styles/*.scss', { ignoreInit: false}, packageGulp.series(compiladorSass));
    packageGulp.watch('./source/scripts/*.js', { ignoreInit: false}, packageGulp.series(comprimeJs));
    packageGulp.watch('./source/images/*', { ignoreInit: false}, packageGulp.series(comprimeImg));
}