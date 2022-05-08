#!/bin/bash

echo "Starting front end dev environment..."

gnome-terminal --tab --title FRONTEND -- npm run dev

echo "Starting back end dev environment..."

gnome-terminal --tab --title BACKEND -- npx nodemon ./server/server.js

echo "New tabs opened for FE and BE dev environments."

echo "Starting VS Code in project directory..."

code .

echo "Done."