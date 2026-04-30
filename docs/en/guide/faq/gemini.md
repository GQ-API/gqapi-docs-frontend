# Gemini FAQ

## Basics

### Q: What are Gemini CLI's advantages?

- **Ultra-long context**: 1M+ token context window
- **Multimodal**: Native image, video, audio input support
- **Google ecosystem**: Deep integration with Google services
- **Free tier**: Some models have free trial quota

### Q: What are the benefits of using Gemini through GQ API?

1. **Unified interface** — Same OpenAI format as other models
2. **Unified billing** — One account manages all model costs
3. **Smart routing** — Auto-selects optimal Gemini version

## Configuration

### Q: Getting "API key not valid" error?

Verify:

```bash
echo $GEMINI_API_KEY
```

Should show a key starting with `sk-`.

### Q: How to use Gemini's multimodal features?

```bash
gemini "Describe this image" photo.jpg
gemini "Analyze video content" video.mp4
```

### Q: Does Gemini CLI support web search?

Yes! Use `--search` flag:

```bash
gemini --search "Latest Vue3 features"
```

## Model Selection

### Q: Gemini 2.5 Pro vs Flash?

| Scenario | Recommended Model |
|----------|-------------------|
| Complex reasoning/analysis | Gemini 2.5 Pro |
| Fast chat/coding | Gemini 2.5 Flash |
| Long document processing | Gemini 2.5 Pro (1M context) |
| Real-time interaction | Gemini 2.0 Flash |

### Q: How to enable chain-of-thought thinking?

```bash
gemini --thinking "Deep analysis of this problem"
```

Or specify thinking budget:

```bash
gemini --thinking-budget 8192 "Complex reasoning task"
```

## Known Limitations

### Q: Are there output length limits?

Gemini 2.5 Pro max output ~64K tokens; Flash ~8K tokens.
