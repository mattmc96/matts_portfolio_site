const withTM = require('next-transpile-modules')
const withOptimizedImages = require('next-optimized-images')
const path = require('path')
const imagemin = require('imagemin')
const imageminOptipng = require('imagemin-optipng')

module.exports = withTM({
    transpileModules: ['lodash-es']
})
module.exports = withOptimizedImages({
    webpack(config) {
        config.resolve.alias.images = path.join(__dirname, 'images')
        return config
    }
});

(async () => {
    await imagemin(['images/*.png'], 'build/images', {
        use: [imageminOptipng()]
    })

    console.log('Images optimized!')
})()


