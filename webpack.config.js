const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  //donde esta todo el codigo inicial
  entry: './src/index.js',
  //donde vamos a poner el entry ya compilado
  output: {
    //a donde llegan todos los archivos, se crea la carpeta dist
    path: path.resolve(__dirname, 'dist'),
    //como se llamara el archivo que se genera
    filename: 'main.js',
  },
  //extensiones
  resolve: {
    extensions: ['.js']
  },
  //reglas de babel
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        inject: true,
        template: './public/index.html',
        filename: './index.html'
      }
    ),
    new CopyWebpackPlugin({
      patterns: [{
        from: './src/styles/styles.css',
        to: ''
      }]
    })
  ]
}