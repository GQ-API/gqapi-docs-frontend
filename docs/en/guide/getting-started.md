# Quick Start

Welcome to GQ API! This guide will help you get started quickly with our unified AI API gateway.

## Prerequisites

Before you begin, ensure you have:

- A registered GQ API account
- An API Key obtained from the console
- Basic command-line knowledge

## Getting Your API Key

1. Log in to the [GQ API Console](https://api.gqchat.cn/console)
2. Navigate to **Token Management**
3. Create a new API token
4. Copy and securely store your API Key

::: warning Security Notice
Never expose your API Key in public repositories or client-side code. Use environment variables or secret management services.
:::

## Verify Connection

Use `curl` to verify your API connection:

```bash
curl https://api.gqchat.cn/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{
    "model": "claude-sonnet-4-20250514",
    "messages": [{"role": "user", "content": "Hello!"}],
    "max_tokens": 100
  }'
```

If you receive a valid JSON response, your configuration is ready.

## Next Steps

Choose the configuration guide for your tool:

| Tool | Guide |
|------|-------|
| Claude Code | [Claude Code Setup](/en/guide/cli/claude-code) |
| OpenAI Codex | [Codex Setup](/en/guide/cli/codex) |
| Gemini CLI | [Gemini CLI Setup](/en/guide/cli/gemini-cli) |

## FAQ

<details>
<summary>Getting a 401 error?</summary>

Check:
- API Key was copied correctly (watch for leading/trailing spaces)
- API Key is activated
- Account has sufficient balance

</details>

<details>
<summary>How to check usage?</summary>

Log into the console and visit the **Usage Statistics** page for detailed call records and billing info.

</details>
