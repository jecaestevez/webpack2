
module.exports = {
    entry: {
        app: './src/app.js',
        vendor: [
            'angular',
        ]
    },
    output:{
        filename:'dist/[name]_bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: 'raw-loader',
            },
        ]
    },
    devServer:{
        port:8080,
    }
};