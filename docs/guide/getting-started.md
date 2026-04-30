# 快速开始

欢迎使用 GQ API！本指南将帮助您快速上手使用我们的统一 AI API 网关服务。

## 前置条件

在开始之前，请确保您具备以下条件：

- 已注册 GQ API 账户
- 已获取 API 密钥（API Key）
- 基本的命令行操作能力

## 获取 API 密钥

1. 登录 [GQ API 控制台](https://api.gqchat.cn/console)
2. 进入 **令牌管理** 页面
3. 创建新的 API 令牌
4. 复制并妥善保存您的 API Key

::: warning 安全提示
请勿将 API Key 暴露在公开的代码仓库或客户端代码中。建议通过环境变量或密钥管理服务存储。
:::

## 验证连接

您可以使用 `curl` 快速验证 API 连接是否正常：

```bash
curl https://api.gqchat.cn/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{
    "model": "claude-sonnet-4-20250514",
    "messages": [{"role": "user", "content": "Hello!"}],
    "max_tokens": 100
  }'
```

如果返回正常的 JSON 响应，说明您的配置已就绪。

## 下一步

根据您使用的工具，选择对应的配置教程：

| 工具 | 配置指南 |
|------|----------|
| Claude Code | [Claude Code 配置](/guide/cli/claude-code) |
| OpenAI Codex | [Codex 配置](/guide/cli/codex) |
| Gemini CLI | [Gemini CLI 配置](/guide/cli/gemini-cli) |

## 常见问题

<details>
<summary>API 调用返回 401 错误？</summary>

请检查：
- API Key 是否正确复制（注意前后空格）
- API Key 是否已激活
- 账户余额是否充足

</details>

<details>
<summary>如何查看调用用量？</summary>

登录控制台后，进入 **用量统计** 页面即可查看详细的调用记录和费用明细。

</details>
