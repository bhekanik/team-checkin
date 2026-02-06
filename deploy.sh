#!/bin/bash

# Team Check-in Generator - Deploy Script
# Deploys to all domains and updates git

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}  Team Check-in Generator - Deploy${NC}"
echo -e "${BLUE}========================================${NC}"
echo ""

# Check if we're in the right directory
if [ ! -f "index.html" ] || [ ! -f "script.js" ]; then
    echo -e "${RED}Error: Not in the project root directory${NC}"
    echo "Please run this script from the project root"
    exit 1
fi

# Git operations
echo -e "${YELLOW}📦 Checking git status...${NC}"

# Check if git repo exists
if [ ! -d ".git" ]; then
    echo -e "${RED}Error: Not a git repository${NC}"
    exit 1
fi

# Check for changes
if [ -n "$(git status --porcelain)" ]; then
    echo -e "${YELLOW}📝 Uncommitted changes found${NC}"
    
    # Add all changes
    git add -A
    
    # Get commit message from user or use default
    if [ -z "$1" ]; then
        COMMIT_MSG="Update and deploy - $(date '+%Y-%m-%d %H:%M')"
    else
        COMMIT_MSG="$1"
    fi
    
    echo -e "${BLUE}💬 Commit message: ${COMMIT_MSG}${NC}"
    
    # Commit
    git commit -m "$COMMIT_MSG"
    echo -e "${GREEN}✅ Changes committed${NC}"
else
    echo -e "${GREEN}✓ No uncommitted changes${NC}"
fi

# Push to GitHub
echo ""
echo -e "${YELLOW}🚀 Pushing to GitHub...${NC}"
if git push origin main; then
    echo -e "${GREEN}✅ Pushed to GitHub successfully${NC}"
else
    echo -e "${RED}❌ Failed to push to GitHub${NC}"
    exit 1
fi

# Deploy to Surge domains
echo ""
echo -e "${YELLOW}🌐 Deploying to Surge...${NC}"

DOMAINS=(
    "checkin.planetaryescape.co.za"
    "checkin.planetaryescape.cloud"
    "team-checkin.surge.sh"
)

for domain in "${DOMAINS[@]}"; do
    echo -e "${BLUE}  → Deploying to ${domain}...${NC}"
    if printf "\n" | npx surge --project . --domain "$domain" > /dev/null 2>&1; then
        echo -e "${GREEN}    ✅ ${domain}${NC}"
    else
        # Try with local surge
        if printf "\n" | ./node_modules/.bin/surge --project . --domain "$domain" > /dev/null 2>&1; then
            echo -e "${GREEN}    ✅ ${domain}${NC}"
        else
            echo -e "${RED}    ❌ ${domain} (failed)${NC}"
        fi
    fi
done

echo ""
echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}  ✅ Deployment Complete!${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""
echo -e "${BLUE}Live URLs:${NC}"
echo -e "  • ${YELLOW}https://checkin.planetaryescape.co.za/${NC}"
echo -e "  • ${YELLOW}https://checkin.planetaryescape.cloud/${NC}"
echo -e "  • ${YELLOW}https://team-checkin.surge.sh/${NC}"
echo -e "  • ${YELLOW}https://github.com/bhekanik/team-checkin${NC}"
echo ""
