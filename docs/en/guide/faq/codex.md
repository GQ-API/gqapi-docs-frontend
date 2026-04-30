# Codex FAQ

## Installation & Setup

### Q: Which OS does Codex support?

Codex supports macOS, Linux, and Windows (WSL2).

### Q: Installation failed?

```bash
# Clear cache and retry
npm cache clean --force
npm install -g @openai/codex@latest
```

### Q: How to verify configuration?

```bash
codex doctor
```

This checks config, network, and auth status.

## Usage

### Q: What's the difference between Codex and ChatGPT?

Codex is **coding-focused** CLI tool specializing in:
- Code generation and modification
- Project understanding and refactoring
- Terminal-integrated workflows

ChatGPT is a general-purpose conversational assistant.

### Q: How to make Codex understand my whole project?

Run Codex from the project root. It automatically reads:
- `.gitignore` rules
- `package.json` / `requirements.txt`
- Project file structure

Or use:

```bash
codex "Read and understand this project" --context .
```

### Q: How to undo Codex changes?

Codex keeps operation history:

```bash
codex undo
codex history
```

## Compatibility

### Q: Can I use multiple backends?

Yes. Configure multiple providers in your config:

```json
{
  "providers": [
    { "name": "gq-api-primary", ... },
    { "name": "gq-api-backup", ... }
  ]
}
```

### Q: Which languages are supported best?

Codex has optimal support for:
- Python, JavaScript/TypeScript
- Go, Rust, Java
- C/C++, C#, Ruby
