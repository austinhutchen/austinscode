#!/bin/bash
{
  npm cache clean --force
  npm cache clear --force
 npm cache verify
npm install 
 rm -rf package-lock.json
  rm -rf node_modules
  npm run deploy
}&
