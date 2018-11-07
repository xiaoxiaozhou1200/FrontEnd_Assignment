var path = require('path');

module.exports = {
    mode: 'development',
    entry: ['./src/app.js','./src/AddSlide.js','./src/AddImage','./src/AddText'],
    resolve: {
        alias: {
            Root: path.resolve(__dirname, 'src/'),
            CSS: path.resolve(__dirname, 'css/'),
        }
    },
    output: {
        path: __dirname + "/dist",
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, '/dist'),
        historyApiFallback: true,
        inline: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ {
                    loader: "style-loader"
                },{
                    loader: "css-loader"
                }]
            }
        ]
    },
};