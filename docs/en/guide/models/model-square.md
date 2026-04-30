# Model Square

GQ API provides access to a wide range of AI models from multiple providers, all through a unified interface.

## Model Categories

### 🧠 Claude Series (Anthropic)

| Model | Context | Best For |
|-------|---------|----------|
| `claude-opus-4-20250514` | 200K | Complex reasoning, analysis |
| `claude-sonnet-4-20250514` | 200K | Balanced performance & speed |
| `claude-haiku-4-20250514` | 200K | Fast responses, low cost |

### 🤖 GPT Series (OpenAI)

| Model | Context | Best For |
|-------|---------|----------|
| `gpt-4o` | 128K | Multimodal, general purpose |
| `gpt-4o-mini` | 128K | Cost-effective tasks |
| `o1` / `o3` | Variable | Complex reasoning |

### ✨ Gemini Series (Google)

| Model | Context | Best For |
|-------|---------|----------|
| `gemini-2.5-pro` | 1M+ | Long documents, deep analysis |
| `gemini-2.5-flash` | 1M+ | Fast, high-volume tasks |
| `gemini-2.0-flash` | 1M | Real-time interaction |

### 🎨 Image Generation Models

| Model | Description |
|-------|-------------|
| `nano-banana-pro` | Fast image generation |

## How to Use

All models use the same API format:

```bash
curl https://api.gqchat.cn/v1/chat/completions \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"model": "claude-sonnet-4-20250514", "messages": [...]}'
```

## Pricing

All models are billed per-token. Check the [pricing page](https://api.gqchat.cn/console) for current rates.
