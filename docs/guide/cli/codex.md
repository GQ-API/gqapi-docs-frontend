# Codex 配置

OpenAI Codex 是强大的 AI 编程助手，支持通过 GQ API 网关使用。

## 安装 Codex

```bash
npm install -g @openai/codex
```

## 配置方法

### 环境变量配置

```bash
export OPENAI_API_KEY="sk-your-gq-api-key"
export OPENAI_BASE_URL="https://api.gqchat.cn/v1"
```

### 配置文件方式

编辑 `~/.codex/config.json`：

```json
{
  "model": "gpt-4o",
  "provider": {
    "name": "openai",
    "apiKey": "sk-your-gq-api-key",
    "baseURL": "https://api.gqchat.cn/v1"
  }
}
```

## 使用方式

### 交互模式

```bash
codex
```

### 非交互模式

```bash
codex "解释这段代码的逻辑" < main.py
```

### 全栈模式

```bash
codex --full-auto "为这个项目添加用户认证功能"
```

## 可用模型

| 模型 | 适用场景 |
|------|----------|
| `gpt-4o` | 通用编程任务 |
| `gpt-4o-mini` | 轻量快速任务 |
| `o3-mini` | 复杂推理任务 |
| `o4-mini` | 最新高性能模型 |

## 高级配置

### 自定义提示词模板

```json
{
  "instructions": "你是一个专业的全栈开发工程师，遵循 Clean Code 原则..."
}
```

### 权限控制

```json
{
  "approvalPolicy": {
    "permissions": {
      "allow": ["Read", "Write", "Bash(safe commands)"],
      "deny": ["Bash(rm -rf *)"]
    }
  }
}
```
