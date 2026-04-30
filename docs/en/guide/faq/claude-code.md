# Claude Code FAQ

## General

### Q: What's the difference between Claude Code and regular API calls?

Claude Code is Anthropic's official terminal AI assistant. Beyond conversation, it can:
- Directly read and edit your code files
- Execute shell commands
- Understand project context
- Perform multi-turn iterative development

### Q: Does using GQ API affect functionality?

No. GQ API is fully compatible with the Anthropic API — all native features work normally.

## Configuration

### Q: How to switch models?

```bash
claude --model claude-opus-4
```

Or type `/model <name>` in interactive mode.

### Q: Which Claude models are supported?

| Model | GQ API Name |
|-------|-------------|
| Claude Opus 4 | `claude-opus-4-20250514` |
| Claude Sonnet 4 | `claude-sonnet-4-20250514` |
| Claude Haiku 4 | `claude-haiku-4-20250514` |

### Q: How to configure a proxy?

```bash
export HTTPS_PROXY=http://127.0.0.1:7890
claude
```

## Performance

### Q: Responses are slow?

1. Check network connectivity (see [Environment Check](/en/guide/cli/env-check))
2. Try a faster model (like Haiku)
3. Reduce context length

### Q: Are there rate limits?

Yes, limits depend on your plan tier. Check your dashboard for current quotas.

## Billing

### Q: How to check usage?

```bash
# Check in console, or via API
curl https://api.gqchat.cn/v1/usage \
  -H "Authorization: Bearer $ANTHROPIC_API_KEY"
```

### Q: How are tokens calculated?

Each Claude Code call consumes tokens (input + output). Long conversations accumulate more input tokens.
