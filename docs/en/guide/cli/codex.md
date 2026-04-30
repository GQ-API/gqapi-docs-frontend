# Codex Configuration

OpenAI Codex is a powerful CLI coding agent. Here's how to connect it to GQ API.

## Installation

```bash
npm install -g @openai/codex
```

## Configuration

### Step 1: Set Environment Variables

```bash
export OPENAI_API_KEY="sk-your-gq-api-key"
export OPENAI_BASE_URL="https://api.gqchat.cn/v1"
```

### Step 2: Create Config File

Create `~/.codex/config.json`:

```json
{
  "model": "gpt-4o",
  "provider": "openai",
  "baseURL": "https://api.gqchat.cn/v1",
  "apiKey": "sk-your-gq-api-key"
}
```

### Step 3: Verify

```bash
codex "Say hello"
```

## Usage

### Chat Mode

```bash
codex chat
```

### Full Auto Mode

```bash
codex --full-auto "Refactor this function"
```

### Edit Specific File

```bash
codex "Fix the bug in src/utils.ts"
```

## Advanced Options

| Flag | Description |
|------|-------------|
| `--model` | Specify model (e.g., `gpt-4o`) |
| `--approval-mode` | `full-auto`, `suggest`, or `edit` |
| `--quiet` | Reduce verbose output |

## Tips

- Always run Codex from your project root directory
- Use `.gitignore` patterns to control which files it can read
- Review changes before accepting auto-edits
