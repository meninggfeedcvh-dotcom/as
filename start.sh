#!/bin/bash
# Install dependencies if needed (though nixpacks should handle this)
# Start the Node.js server in the background
node server.js &
# Start the Python bot
python main.py
