# Gemini 常见问题

## 基础问题

### Q: Gemini CLI 的优势是什么？

- **超长上下文**：支持 100 万+ Token 的上下文窗口
- **多模态**：原生支持图片、视频、音频输入
- **Google 生态**：与 Google 服务深度集成
- **免费额度**：部分模型有免费试用配额

### Q: 通过 GQ API 使用 Gemini 有什么好处？

1. **统一接口**：与其他模型使用相同的 OpenAI 格式
2. **统一计费**：一个账户管理所有模型的费用
3. **智能路由**：自动选择最优 Gemini 版本

## 配置问题

### Q: 报错 "API key not valid"

请确认：

```bash
echo $GEMINI_API_KEY
```

应显示以 `sk-` 开头的 GQ API API Key。

### Q: 如何使用 Gemini 的多模态功能？

```bash
gemini "描述这张图片" photo.jpg
gemini "分析这段视频的内容" video.mp4
```

### Q: Gemini CLI 支持搜索联网吗？

支持！使用 `--search` 标志：

```bash
gemini --search "最新的 Vue3 特性"
```

## 模型选择

### Q: Gemini 2.5 Pro 和 Flash 怎么选？

| 场景 | 推荐模型 |
|------|----------|
| 复杂推理/分析 | Gemini 2.5 Pro |
| 快速对话/编码 | Gemini 2.5 Flash |
| 长文档处理 | Gemini 2.5 Pro（1M 上下文） |
| 实时交互 | Gemini 2.0 Flash |

### Q: 如何启用思维链（Thinking）？

```bash
gemini --thinking "深入分析这个问题"
```

或指定思考预算：

```bash
gemini --thinking-budget 8192 "复杂推理任务"
```

## 已知限制

### Q: 输出长度有限制吗？

Gemini 2.5 Pro 单次最大输出约 64K Token，Flash 约 8K Token。
