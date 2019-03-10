module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/sites/my-site-with-vue.js/'
        : '/'
}
