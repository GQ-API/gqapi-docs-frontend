# Nano Banana Pro

Nano Banana Pro is a fast image generation model available through GQ API.

## Quick Start

```bash
curl -X POST "https://api.gqchat.cn/v1/images/generations" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "nano-banana-pro",
    "prompt": "A serene mountain landscape at sunset",
    "n": 1,
    "size": "1024x1024"
  }'
```

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `prompt` | string | required | Image description |
| `n` | integer | 1 | Number of images to generate |
| `size` | string | `1024x1024` | Image dimensions |
| `quality` | string | `standard` | `standard` or `hd` |
| `style` | string | `vivid` | `vivid` or `natural` |

## Python SDK Example

```python
from openai import OpenAI

client = OpenAI(
    base_url="https://api.gqchat.cn/v1",
    api_key="sk-your-gq-api-key"
)

response = client.images.generate(
    model="nano-banana-pro",
    prompt="A futuristic city skyline",
    size="1024x1024"
)

image_url = response.data[0].url
print(f"Image URL: {image_url}")
```

## Tips for Better Results

- Be **specific** in your prompts — include style, lighting, composition
- Use **aspect ratios** that match your use case
- For photorealistic images, add details like camera settings or film type
