# Codex 常见问题

## 安装与配置

### Q: Codex 支持哪些操作系统？

Codex 支持 macOS、Linux 和 Windows (WSL2)。

### Q: 安装失败怎么办？

```bash
# 清除缓存后重试
npm cache clean --force
npm install -g @openai/codex@latest
```

### Q: 如何确认配置正确？

```bash
codex doctor
```

此命令会检查配置、网络连接和认证状态。

## 使用问题

### Q: Codex 和 ChatGPT 有什么区别？

Codex 是**编程专用**的 CLI 工具，专注于：
- 代码生成与修改
- 项目理解与重构
- 终端集成工作流

而 ChatGPT 是通用对话助手。

### Q: 如何让 Codex 理解整个项目？

在项目根目录运行 Codex，它会自动读取：

- `.gitignore` 规则
- `package.json` / `requirements.txt`
- 项目文件结构

也可以使用：

```bash
codex "阅读并理解这个项目" --context .
```

### Q: 如何撤销 Codex 的修改？

Codex 会记录操作历史：

```bash
codex undo
codex history
```

## 兼容性

### Q: 可以同时使用多个后端吗？

可以。在配置文件中配置多个 provider：

```json
{
  "providers": [
    { "name": "gq-api-primary", ... },
    { "name": "gq-api-backup", ... }
  ]
}
```

### Q: 支持哪些编程语言？

Codex 对以下语言有最佳支持：
- Python, JavaScript/TypeScript
- Go, Rust, Java
- C/C++, C#, Ruby
