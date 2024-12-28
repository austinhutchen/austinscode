#!/bin/bash
{
  npm cache clean --force
  npm cache clear --force
 npm cache verify
  rm -rf package-lock.json
  rm -rf node_modules
npm install --registry=https://registry.npmjs.org/  
  npm run deploy
} &
