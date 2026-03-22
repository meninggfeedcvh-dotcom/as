#!/bin/bash
# Start the Python bot in the background
python main.py &
# Start the Node.js server in the foreground
node server.js
