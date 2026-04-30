# Environment Check (Universal Steps)

This guide covers common environment checks that apply to all CLI tools when using GQ API.

## Checklist

### Network Connectivity

```bash
# Test connectivity to GQ API
curl -I https://api.gqchat.cn
```

Expected output should include `HTTP/2 200` or similar success status.

### DNS Resolution

```bash
# Verify DNS resolution
nslookup api.gqchat.cn
```

### Proxy Settings (if applicable)

If you are behind a proxy or firewall:

```bash
# Linux/macOS
export https_proxy=http://127.0.0.1:7890
export http_proxy=http://127.0.0.1:7890

# PowerShell
$env:HTTPS_PROXY="http://127.0.0.1:7890"
$env:HTTP_PROXY="http://127.0.0.1:7890"
```

## Environment Variables

Set up your API keys as environment variables:

```bash
# Linux/macOS (add to ~/.bashrc or ~/.zshrc)
export ANTHROPIC_API_KEY="your-gq-api-key"
export OPENAI_API_KEY="your-gq-api-key"
export GEMINI_API_KEY="your-gq-api-key"

# PowerShell (add to $PROFILE)
$env:ANTHROPIC_API_KEY="your-gq-api-key"
$env:OPENAI_API_KEY="your-gq-api-key"
$env:GEMINI_API_KEY="your-gq-api-key"
```

Verify they're set:

```bash
echo $ANTHROPIC_API_KEY
```

## Node.js & Package Managers

Most AI CLI tools require Node.js:

```bash
node --version   # Should be >= 18
npm --version
pnpm --version
yarn --version
```

## Python & pip

Some tools require Python:

```bash
python3 --version
pip --version
```

## Git Version Control

```bash
git --version
```
