# Claude Code 常见问题

## 通用问题

### Q: Claude Code 和普通 API 调用有什么区别？

Claude Code 是 Anthropic 官方的终端 AI 助手，它不仅支持对话，还能：
- 直接读取和编辑您的代码文件
- 执行 shell 命令
- 理解项目上下文
- 进行多轮迭代开发

### Q: 通过 GQ API 使用会影响功能吗？

不会。GQ API 完全兼容 Anthropic API，所有原生功能均可正常使用。

## 配置相关

### Q: 如何切换模型？

```bash
claude --model claude-opus-4
```

或在交互模式中输入 `/model <name>`。

### Q: 支持哪些 Claude 模型？

| 模型 | GQ API 中的名称 |
|------|------------------|
| Claude Opus 4 | `claude-opus-4-20250514` |
| Claude Sonnet 4 | `claude-sonnet-4-20250514` |
| Claude Haiku 4 | `claude-haiku-4-20250514` |

### Q: 如何配置代理？

```bash
export HTTPS_PROXY=http://127.0.0.1:7890
claude
```

## 性能相关

### Q: 响应很慢怎么办？

1. 检查网络连接（参考[环境检查](/guide/cli/env-check)）
2. 尝试使用更快的模型（如 Haiku）
3. 减少上下文长度

### Q: 有速率限制吗？

是的，具体限制取决于您的套餐等级。可以在控制台查看当前限额。

## 计费相关

### Q: 如何查看用量？

```bash
# 在控制台查看，或通过 API
curl https://api.gqchat.cn/v1/usage \
  -H "Authorization: Bearer $ANTHROPIC_API_KEY"
```

### Q: Token 消耗如何计算？

Claude Code 的每次调用都会消耗 Token（输入 + 输出）。长对话会累积较多输入 Token。
