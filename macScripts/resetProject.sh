{ rm -rf node_modules pnpm-lock.yaml;
pnpm install;
pnpm eslint . ;
pnpm webpack --config webpack.config.js ;}
