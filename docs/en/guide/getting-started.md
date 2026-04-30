# Quick Start

Welcome to GQ API! This guide will help you get started quickly with our unified AI API gateway service.

## 1. Register Account

### 1.1 GitHub Registration

1. If you already have a GitHub account, log in directly. (Requires network access to GitHub — it may be slow in some regions)
2. If you don't have a GitHub account, register one first.
3. After registration, log in with your GitHub account.

![GitHub Registration](/pictures/register/register-0.png)

### 1.2 Username Registration

1. Visit https://api.gqchat.cn/register to start registration.
2. Enter your username
3. Set a password (8–20 characters)
4. Enter your email address and click "Get Verification Code"
5. Enter the verification code
6. Check "I have read and agree to the User Agreement and Privacy Policy"
7. Click "Register"

![Username Registration](/pictures/register/register-1.png)

::: tip Tip
Please keep your login credentials safe. We recommend using a strong password.
:::

## 2. Log In

### GitHub Login

1. Click the "Log in with GitHub" button.
2. Log in with your GitHub account.

![GitHub Login](/pictures/login/login-0.png)

### Username Login

1. Visit https://api.gqchat.cn/login to log in.
2. Enter the username or email used during registration
3. Enter your password
4. Click "Continue"
![Username Login](/pictures/login/login-1.png)
![Username Login](/pictures/login/login-2.png)

## 3. Top Up Balance

GQ API uses a prepaid balance system, priced in CNY (Chinese Yuan).

![Wallet Management](/pictures/wallet/wallet-0.png)

After logging in, click **Wallet Management** in the left sidebar, or visit https://api.gqchat.cn/console/topup.

- Balance is priced in CNY (Chinese Yuan)
- Different models have different rates — see Model Square for details
- API calls will stop responding when balance is depleted — please top up promptly
- You can view current balance and usage history on the console homepage

::: tip Transparent Billing
Every API call is logged in real-time in the usage logs. You can review detailed consumption records at any time.
:::

## 4. Create API Token

API Tokens are your credentials for calling GQ API.

After logging in, click **Token Management** in the left sidebar, or visit https://api.gqchat.cn/console/token.

1. Click **Add Token** in the top-right corner
2. Enter a token name (e.g., `claude-code`, `codex`, etc.)
3. Select a token group (different groups can access different models — see [Token Groups](/en/guide/models/token-groups))
4. Set a spending limit (optional; leave blank for unlimited)
5. Set an expiration time (optional)
6. Click **Submit** to create the token

![Create API Token](/pictures/apikey/apikey-0.png)

Tokens use the `sk-` prefix format, compatible with OpenAI API Key format.

::: warning Security Warning
- Copy and securely save the token immediately after creation — it is displayed in full only once
- Never share tokens with others or commit them to public repositories
- If a token is compromised, delete it immediately in the console and create a new one
- Create separate tokens for different purposes for easier management and tracking
:::

::: warning Security Notice
Never expose API Keys in public repositories or client-side code. Use environment variables or secret management services.
:::

## 5. Configure CLI Tools

GQ API is compatible with OpenAI API format and works directly with various AI CLI tools.

| Tool | Description | Guide |
|------|-------------|-------|
| Claude Code | Anthropic's official coding assistant | [Claude Code Setup](/en/guide/cli/claude-code) |
| OpenAI Codex | OpenAI coding assistant CLI | [Codex Setup](/en/guide/cli/codex) |
| Gemini CLI | Google Gemini command-line tool | [Gemini CLI Setup](/en/guide/cli/gemini-cli) |

::: tip One Token, Multiple Tools
If your token group includes all required models, you can use the same token for multiple tools. However, we recommend creating separate tokens for each tool for easier usage tracking.
:::

#### General Steps:

1. Ensure your development environment meets requirements → [Environment Check](/en/guide/cli/env-check)
2. Create an API token with the appropriate group on GQ API (see Step 4 above)
3. Follow each tool's configuration guide to set environment variables or config files
4. Test that the connection works

## Prerequisites

Before you begin, ensure you have:

- A registered GQ API account
- An obtained API Key
- Basic command-line knowledge

## Verify Connection

Use `curl` to quickly verify your API connection:

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

## FAQ

<details>
<summary>Getting a 401 error?</summary>

Please check:
- API Key was copied correctly (watch for leading/trailing spaces)
- API Key is activated
- Account has sufficient balance

</details>

<details>
<summary>How to check usage?</summary>

Log into the console and visit the **Usage Statistics** page for detailed call records and billing info.

</details>

<details>
<summary>Why are your prices so low?</summary>

GQ API provides cost-effective AI model services to meet diverse needs. Through deep collaboration with suppliers, we can obtain AI model services at lower costs while ensuring service stability and reliability.
</details>
