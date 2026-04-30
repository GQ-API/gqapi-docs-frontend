# OpenClaw Configuration

OpenClaw is a powerful AI tool integration platform that supports connecting multiple AI services.

## Installation

```bash
npm install -g openclaw
# or
brew install openclaw
```

## Configure GQ API as Backend

### Step 1: Initialize

```bash
openclaw init
```

### Step 2: Edit Config

Open `~/.openclaw/config.yaml`:

```yaml
providers:
  gq-api:
    name: GQ API
    base_url: https://api.gqchat.cn/v1
    api_key: ${GQ_API_KEY}
    models:
      - claude-sonnet-4
      - gpt-4o
      - gemini-2.5-pro

default_provider: gq-api
default_model: claude-sonnet-4
```

### Step 3: Set Environment Variables

```bash
export GQ_API_KEY="sk-your-gq-api-key"
```

## Usage

### Interactive Chat

```bash
openclaw chat
```

### Tool Calling Mode

OpenClaw supports letting AI call external tools:

```bash
openclaw run --tools "web_search,file_write,code_exec" "Research latest Vue3 features"
```

### Workflow Automation

Create `workflow.yaml`:

```yaml
name: code-review
steps:
  - name: analyze
    model: claude-sonnet-4
    prompt: "Analyze code quality and potential issues"
    input: "${git_diff}"
  
  - name: suggest
    model: gpt-4o
    prompt: "Suggest improvements based on analysis"
    depends_on: [analyze]
```

Run workflow:

```bash
openclaw workflow run workflow.yaml
```
