# Claude Code Configuration

Claude Code is Anthropic's official terminal-based AI coding assistant. This guide shows how to configure it with GQ API.

## Installation

```bash
npm install -g @anthropic-ai/claude-code
```

## Configuration Method 1: Environment Variables (Recommended)

```bash
export ANTHROPIC_API_KEY="sk-your-gq-api-key"
export ANTHROPIC_BASE_URL="https://api.gqchat.cn"
```

Add these lines to your shell profile (`~/.bashrc`, `~/.zshrc`, or `~/.profile`).

## Configuration Method 2: Settings File

Create or edit `~/.claude/settings.json`:

```json
{
  "apiBaseUrl": "https://api.gqchat.cn",
  "apiKey": "sk-your-gq-api-key"
}
```

## Verification

```bash
claude -p "Reply OK" --max-turns 1
```

If you see a normal model response, configuration is successful!

## Common Usage Examples

### Interactive Mode

```bash
claude
```

### Non-interactive Mode

```bash
claude -p "Explain this codebase"
```

### Permission Flags

```bash
claude --dangerously-skip-permissions
```

## Troubleshooting

<details>
<summary>401 Unauthorized Error</summary>

Check:
1. `echo $ANTHROPIC_API_KEY` shows correct value
2. API Key starts with `sk-`
3. Account balance is sufficient

</details>

<details>
<summary>Connection Timeout</summary>

Try setting a proxy:

```bash
export HTTPS_PROXY=http://127.0.0.1:7890
```

</details>
