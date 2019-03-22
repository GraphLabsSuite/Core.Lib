import * as webpack from 'webpack';
import * as path from 'path';

const config: webpack.Configuration = {
    entry: './src/main.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [{
            test: /\.ts(x)/,      // Match any files that end with ".css"
            use: 'ts-loader', // Pipe these files through style-loader upon import
        }]
    },
};
