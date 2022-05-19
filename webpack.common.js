const path = require('path');
const ManifestPlugin = require('webpack-manifest-plugin');
function root(file) {
  return path.resolve(__dirname, file);
}




module.exports = {
  entry: {
    'home':'./src/home/home.ts'
    // 'travel': './ext-web-components/travel/travel_imports.ts',
    // 'admin': './ext-web-components/admin/admin_imports.ts',
    // 'review': './ext-web-components/review/add-review.ts'
  },

  output: {
    path: root('build'),
  },

  resolve: {
    extensions: ['.ts', '.js'],
    // modules: ['node_modules']
  },

  plugins: [
    new ManifestPlugin()
  ],

  module: {
    rules: [
      {
        test: /\.ts?$/,
        exclude: [/node_modules/, /typings/],
        use: [{
          loader: "awesome-typescript-loader",
          options: {
            silent: true
          }
        }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: [
              '@babel/preset-env',
              "@babel/preset-flow",
            ],
            plugins: [
              '@babel/plugin-proposal-class-properties',
              ["@babel/plugin-transform-runtime",
                {
                  "regenerator": true
                }
              ],
              '@babel/plugin-syntax-dynamic-import'
            ]
          },
        }
      },
      {
        test: /\.css?$/,
        use: ['to-string-loader', 'css-loader'],

      },
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            minimize: true
          }
        }]
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)(\?.*)?$/,
        loader: 'file-loader?name=./assets/[name].[hash].[ext]'
      }
    ]
  }
}
