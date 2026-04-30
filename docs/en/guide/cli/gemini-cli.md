# Gemini CLI Configuration

Google Gemini CLI supports connecting to custom endpoints via GQ API.

## Installation

```bash
npm install -g @google/gemini-cli
```

## Configuration

### Step 1: Environment Variables

```bash
export GEMINI_API_KEY="sk-your-gq-api-key"
export GEMINI_BASE_URL="https://api.gqchat.cn"
```

### Step 2: Initialize

```bash
gemini init
```

Edit the generated config file to point to GQ API:

```yaml
model: gemini-2.5-pro
base_url: https://api.gqchat.cn
api_key: ${GEMINI_API_KEY}
```

### Step 3: Verify

```bash
gemini "What is 2+2?"
```

## Key Features of Gemini CLI

### Long Context Window

Gemini models support up to **1M+ tokens** context:

```bash
gemini --context-large "Analyze this entire codebase"
```

### Multimodal Input

```bash
gemini "Describe this image" screenshot.png
```

### Thinking Mode

Enable chain-of-thought reasoning:

```bash
gemini --thinking "Solve step by step: ..."
```

### Web Search

```bash
gemini --search "Latest Vue3 features"
```

## Model Recommendations

| Scenario | Recommended Model |
|----------|-------------------|
| Complex reasoning | Gemini 2.5 Pro |
| Fast coding | Gemini 2.5 Flash |
| Long documents | Gemini 2.5 Pro (1M context) |
| Real-time interaction | Gemini 2.0 Flash |
