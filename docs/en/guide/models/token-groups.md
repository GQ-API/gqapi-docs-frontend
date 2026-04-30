# Token Groups

GQ API uses token groups to organize models by access level and pricing tier.

## Overview

Token groups allow you to:
- Manage different model access levels with separate API keys
- Set per-group rate limits and spending caps
- Organize billing by team or project

## Creating Token Groups

1. Log in to the [GQ API Console](https://api.gqchat.cn/console)
2. Navigate to **Token Groups**
3. Click **Create Group**
4. Select which models to include in this group
5. Set rate limits and budget caps (optional)
6. Generate an API key for this group

## Example: Separate Keys for Development & Production

**Development Group:**
- Models: `gpt-4o-mini`, `claude-haiku-4`
- Rate limit: 60 RPM
- Budget cap: $50/month

**Production Group:**
- Models: All available
- Rate limit: 300 RPM
- Budget cap: Custom

## Using Group-Specific Keys

Each token group generates its own API key:

```bash
# Development key
export OPENAI_API_KEY="sk-dev-xxx..."

# Production key
export OPENAI_API_KEY="sk-prod-xxx..."
```

## Rate Limits by Tier

| Tier | RPM | TPM |
|------|-----|-----|
| Basic | 60 | 100K |
| Pro | 300 | 500K |
| Enterprise | Custom | Custom |
