# Claude Code 官方验证

本教程帮助您验证 Claude Code 通过 GQ API 网关的正常运行状态。

## 验证清单

### 1. 版本检查

```bash
claude --version
```

确认版本 >= 1.0.0

### 2. 认证验证

```bash
claude auth login
```

或直接验证 API Key 有效性：

```bash
curl -s https://api.gqchat.cn/v1/models \
  -H "Authorization: Bearer $ANTHROPIC_API_KEY" | head -c 200
```

### 3. 基础连通性测试

```bash
claude -p "回复 OK" --max-turns 1
```

预期输出应包含模型的正常响应。

### 4. 功能完整性验证

#### 代码读取测试

```bash
echo 'console.log("hello")' > /tmp/test.js
claude -p "读取 /tmp/test.js 并解释其功能"
```

#### 文件写入测试

```bash
claude -p "在 /tmp 目录创建 hello.txt 文件，内容为 Hello World"
cat /tmp/hello.txt
```

#### 工具调用测试

```bash
claude -p "使用 bash 工具执行 echo test"
```

### 5. 性能基准测试

测量首次响应时间（TTFT）：

```bash
time claude -p "说一个字"
```

记录耗时，正常应在 **3-10 秒**范围内（取决于网络）。

## 故障排查

<details>
<summary><b>认证失败 (401)</b></summary>

```bash
# 检查环境变量是否正确设置
echo $ANTHROPIC_API_KEY

# 确认 Base URL
echo $ANTHROPIC_BASE_URL
# 应输出: https://api.gqchat.cn
```

</details>

<details>
<summary><b>连接超时</b></summary>

```bash
# 测试网络连通性
curl -v https://api.gqchat.cn

# 如果超时，检查代理设置
echo $HTTPS_PROXY
```

</details>

<details>
<summary><b>模型不存在</b></summary>

确认使用的模型名称在 GQ API 的支持列表中：

```bash
curl https://api.gqchat.cn/v1/models \
  -H "Authorization: Bearer $ANTHROPIC_API_KEY" | jq '.data[].id'
```

</details>

## 验证通过标志

如果以下全部通过，说明配置完全就绪：

- [ ] `claude --version` 显示版本号
- [ ] API Key 认证成功（无 401 错误）
- [ ] 基础对话正常返回
- [ ] 文件读写功能正常
- [ ] Bash 工具执行正常
- [ ] TTFT 在合理范围
