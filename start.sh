#!/bin/bash

# Open fresh terminal tab and start hot-reloading frontend dev server.
echo "Starting front end dev environment..."

gnome-terminal --tab --title FRONTEND -- npm run dev

# Open fresh terminal tab and start hot-reloading backend dev server.
echo "Starting back end dev environment..."

gnome-terminal --tab --title BACKEND -- npx nodemon ./server/server.js

echo "New tabs opened for FE and BE dev environments."

# Open VS Code in project directory.
echo "Starting VS Code in project directory..."

code .

# Sleep 1 second to wait for server startup.
sleep 1

# Open firefox on frontend dev server.
echo "Starting firefox at http://localhost:3000..."

firefox http://localhost:3000 &

echo "Done."