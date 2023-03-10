const {
    src,
    dest,
    watch
} = require("gulp");

const sass = require("gulp-sass")(require('sass'));

function css(done) {
    src('src/scss/app.scss') // Identificar el archivo de SASS
        .pipe(sass()) // Compilarlo
        .pipe(dest('build/css')); // Almacenarla en el disco duro 

    done(); // callback que avisa a Gulp cuando llegamos al final de la funcion
}

function dev(done) {
    watch('src/scss/app.scss', css)
    done();
}

exports.css = css;
exports.dev = dev;