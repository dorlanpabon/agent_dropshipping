# Getting Started Guide

## Overview

The Autonomous Dropshipping Agent is an AI-powered system that automates the entire dropshipping business process, from domain purchase to sales optimization.

## Prerequisites

Before you begin, ensure you have:

1. **Node.js 22 or higher** installed
2. **API Keys** for:
   - OpenAI (required for AI features)
   - Shopify Partner account (for store creation)
   - Dropi (for product sourcing)
   - Domain provider (GoDaddy, Namecheap, etc.)
   - Marketing platforms (optional but recommended)

## Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/dorlanpabon/agent_dropshipping.git
cd agent_dropshipping
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Copy the example environment file:

```bash
cp .env.example .env
```

Edit `.env` and add your API keys:

```env
# Required
OPENAI_API_KEY=sk-...
SHOPIFY_API_KEY=...
SHOPIFY_API_SECRET=...
DROPI_API_KEY=...

# Recommended
DOMAIN_PROVIDER_API_KEY=...
FACEBOOK_ACCESS_TOKEN=...
TIKTOK_ACCESS_TOKEN=...

# Agent Configuration
AGENT_MODE=supervised
AUTO_APPROVE_PURCHASES=false
MAX_DAILY_AD_SPEND=50
```

### 4. Build the Project

```bash
npm run build
```

## First Run

### Supervised Mode (Recommended)

Start in supervised mode to review all actions before they're executed:

```bash
# Set in .env
AGENT_MODE=supervised
AUTO_APPROVE_PURCHASES=false

# Start the agent
npm run dev
```

The agent will:
1. Generate business name ideas
2. Search for available domains
3. Wait for your approval before purchasing
4. Create Shopify store
5. Source and analyze products
6. Set up marketing campaigns (paused initially)

### Understanding the Phases

The agent goes through these phases:

1. **Initialization**: Setting up the business foundation
2. **Setup**: Domain and store configuration
3. **Product Sourcing**: Finding and importing products
4. **Marketing**: Creating ad campaigns
5. **Optimization**: Continuous improvement
6. **Active**: Fully operational

## Monitoring

### Check Status

```bash
npx tsx src/cli.ts status
```

This shows:
- Current phase
- Products imported
- Active campaigns
- Sales data
- Any errors

### View Logs

Logs are written to:
- `logs/combined.log` - All logs
- `logs/error.log` - Only errors

## Next Steps

### 1. Review Initial Setup

After the first run, review:
- Domain purchased
- Store configuration
- Products imported
- Campaign settings

### 2. Configure Marketing

Adjust marketing settings:
- Daily ad budget
- Target audience
- Ad creatives

### 3. Enable Autonomous Mode (Optional)

Once comfortable, enable autonomous mode:

```env
AGENT_MODE=autonomous
AUTO_APPROVE_PURCHASES=true
```

⚠️ **Warning**: In autonomous mode, the agent will make purchases and optimize campaigns automatically.

### 4. Set Up Monitoring

Schedule regular status checks:

```bash
# Add to crontab
0 */4 * * * cd /path/to/agent_dropshipping && npx tsx src/cli.ts status >> logs/status.log
```

## Optimization

The agent runs optimization cycles based on `AGENT_CHECK_INTERVAL_MINUTES`.

During optimization, it:
1. Analyzes product performance
2. Reviews campaign metrics
3. Generates recommendations
4. Executes improvements (in autonomous mode)

### Manual Optimization

Trigger optimization manually:

```bash
npx tsx src/cli.ts optimize
```

## Troubleshooting

### Common Issues

**Issue**: "OpenAI API key not found"
- **Solution**: Ensure `OPENAI_API_KEY` is set in `.env`

**Issue**: "Failed to create store"
- **Solution**: Verify Shopify Partner credentials and permissions

**Issue**: "No products imported"
- **Solution**: Check Dropi API key and search criteria

### Getting Help

1. Check logs in `logs/` directory
2. Run status command for current state
3. Review configuration in `.env`
4. Open an issue on GitHub

## Best Practices

1. **Start in Supervised Mode**: Review actions before going autonomous
2. **Set Conservative Budgets**: Start with low ad spend
3. **Monitor Regularly**: Check status at least daily
4. **Review Analytics**: Use the analytics manager to understand performance
5. **Iterate Gradually**: Make small changes and measure impact

## Security

- Never commit `.env` file
- Keep API keys secure
- Use environment-specific configurations
- Review all automated purchases
- Monitor spending limits

## What's Next?

- Customize product search criteria
- Adjust marketing targeting
- Set up custom analytics
- Integrate additional marketing channels
- Scale successful campaigns

For more details, see the [API Documentation](./API.md).
