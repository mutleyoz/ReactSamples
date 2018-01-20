// Allowing console cals below since this is a build file

/*eslint-disable no-console */
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import colors from 'colors';

process.env.NODE_ENV = 'production'; // assures the Babel dev config (for hot reloading) doesnt apply

console.log('Generating minified bundle for prouction via Webpack. this will take a momment...'.blue);

webpack(webpackConfig).run((err, stats) => {
        if(err) { // fatal error - stop here
            console.log(err.bold.red);
            return 1;
        }

        const jsonStats = stats.toJson();

        if(jsonStats.hasErrors) {
            return jsonStats.errors.map(error => console.log(error.red));
        }

        if(jsonStats.hasWarnings) {
            console.log('Webpack generated the following warnings: '.bold.yellow);
            jsonStats.warnings.map(warning => console.log(warning.yellow));
        }

        console.log(`Webpack stats:  ${stats}`);

        console.log('Your app has been compiled in production mode and written to /dist');
        return 0;
    }
);