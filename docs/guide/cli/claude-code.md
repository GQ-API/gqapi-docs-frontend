# Claude Code 配置

Claude Code 是 Anthropic 官方的 AI 编程助手，可以通过 GQ API 统一网关使用。

## 安装 Claude Code

```bash
npm install -g @anthropic-ai/claude-code
```

## 配置方法

### 方法一：环境变量（推荐）

将 GQ API 的 API Key 设置为 `ANTHROPIC_API_KEY`，并指定自定义 API Base URL：

```bash
export ANTHROPIC_API_KEY="sk-your-gq-api-key"
export ANTHROPIC_BASE_URL="https://api.gqchat.cn"
```

### 方法二：配置文件

创建或编辑 `~/.claude/settings.json`：

```json
{
  "apiKey": "sk-your-gq-api-key",
  "apiBaseUrl": "https://api.gqchat.cn"
}
```

## 使用示例

启动交互式会话：

```bash
claude
```

直接发送指令：

```bash
claude -p "帮我重构这个函数"
```

读取文件并处理：

```bash
claude --prompt-file instructions.md src/main.ts
```

## 可用模型

通过 GQ API，您可以使用以下 Claude 模型：

| 模型名称 | 说明 |
|----------|------|
| `claude-opus-4` | 最强性能模型 |
| `claude-sonnet-4` | 性能与速度平衡 |
| `claude-haiku-4` | 快速轻量模型 |
| `claude-3-5-sonnet` | 上代主力模型 |

切换模型：

```bash
claude --model claude-sonnet-4
```

## 常见问题

<details>
<summary>连接超时怎么办？</summary>

请检查：
1. 网络是否通畅（参考[环境检查](/guide/cli/env-check)）
2. API Base URL 是否正确
3. 是否需要配置代理

</details>

<details>
<summary>如何查看详细日志？</summary>

启用调试模式：

```bash
claude --debug
```

</details>
