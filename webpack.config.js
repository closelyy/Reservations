const path = require('path');

module.exports = {
  "mode": "development",
  "entry": "./client/index.jsx",
  "output": {
    "path": path.resolve(__dirname, 'public'),
    "filename": "bundle.js"
  },
  "module": {
    "rules": [
      {
        "enforce": "pre",
        "test": /\.(js|jsx)$/,
        "include": [
          path.resolve(__dirname, 'client')
        ],
        "exclude": [
          path.resolve(__dirname, 'node_modules')
        ],
        "use": "eslint-loader"
      },
      {
        "test": /\.(js|jsx)$/,
        "exclude": /node_modules/,
        "use": {
          "loader": "babel-loader",
          "options": {
            "presets": [
              '@babel/preset-env', 
              '@babel/preset-react'
            ]
          }
        }
      },
      {
        "test": /\.css$/,
        "use": [
          "style-loader",
          "css-loader"
        ]
      }
    ]
  }
}
