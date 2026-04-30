# Claude Code Verification

This guide helps verify Claude Code is working correctly through GQ API.

## Verification Checklist

### 1. Version Check

```bash
claude --version
```

Confirm version >= 1.0.0

### 2. Authentication Test

```bash
claude auth login
```

Or directly test API Key validity:

```bash
curl -s https://api.gqchat.cn/v1/models \
  -H "Authorization: Bearer $ANTHROPIC_API_KEY" | head -c 200
```

### 3. Basic Connectivity Test

```bash
claude -p "Reply OK" --max-turns 1
```

Expected output should contain a normal model response.

### 4. Feature Completeness Tests

#### Code Reading Test

```bash
echo 'console.log("hello")' > /tmp/test.js
claude -p "Read /tmp/test.js and explain its function"
```

#### File Writing Test

```bash
claude -p "Create hello.txt in /tmp with content Hello World"
cat /tmp/hello.txt
```

#### Tool Execution Test

```bash
claude -p "Use bash tool to execute echo test"
```

### 5. Performance Benchmark

Measure Time To First Token (TTFT):

```bash
time claude -p "Say one word"
```

Normal range: **3–10 seconds** (depends on network).

## Troubleshooting

<details>
<summary>Auth Failure (401)</summary>

```bash
echo $ANTHROPIC_API_KEY
echo $ANTHROPIC_BASE_URL
# Should output: https://api.gqchat.cn
```

</details>

<details>
<summary>Connection Timeout</summary>

```bash
curl -v https://api.gqchat.cn
echo $HTTPS_PROXY
```

</details>

<details>
<summary>Model Not Found</summary>

Confirm the model name is in GQ API's support list:

```bash
curl https://api.gqchat.cn/v1/models \
  -H "Authorization: Bearer $ANTHROPIC_API_KEY" | jq '.data[].id'
```

</details>

## Verification Complete Checklist

If all pass below, configuration is fully ready:

- [ ] `claude --version` shows version number
- [ ] API Key auth succeeds (no 401 error)
- [ ] Basic chat returns normally
- [ ] File read/write works
- [ ] Bash tool executes properly
- [ ] TTFT within normal range
