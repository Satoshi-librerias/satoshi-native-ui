#!/usr/bin/env bash
set -u
netstat -ano 2>/dev/null | grep ':6006.*LISTENING' | head -1
