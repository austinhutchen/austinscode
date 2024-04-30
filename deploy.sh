{ git add .; git commit -m 'predeploy'; git pull; git push; pnpm run predeploy; vercel --prod; pnpm run deploy; } || { echo "Deployment failed"; exit 1; }
