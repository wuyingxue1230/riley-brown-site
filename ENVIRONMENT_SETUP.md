# 环境变量设置指南

## 立即需要撤销的API密钥

### 1. Firebase API Key
- **当前暴露的密钥**: `AIzaSyCENIM80o_yE5ineisKjzUy3apgMt87T-k`
- **撤销步骤**:
  1. 访问 https://console.firebase.google.com/project/website-28dc5/settings/general/
  2. 找到 "Web API Key"
  3. 点击删除/撤销密钥
  4. 创建新的API密钥

### 2. GLM API Key
- **当前暴露的密钥**: `8bcff0a70a6b4044a91169e6a3285206.Ud3hh5YpMAkIa3wC`
- **撤销步骤**: 联系GLM API提供商撤销当前密钥并生成新的

## Vercel环境变量设置

### 方法1: 通过Vercel Dashboard
1. 访问 https://vercel.com/dashboard
2. 选择你的项目 `wuyingxue1230s-projects/riley-brown-site`
3. 点击 "Settings" → "Environment Variables"
4. 添加以下环境变量:
   - `FIREBASE_API_KEY`: 你的新Firebase API密钥
   - `GLM_API_KEY`: 你的新GLM API密钥
5. 确保选择 "Production", "Preview", "Development" 三个环境

### 方法2: 通过Vercel CLI
```bash
# 添加Firebase API密钥
vercel env add FIREBASE_API_KEY

# 添加GLM API密钥
vercel env add GLM_API_KEY
```

## 重要提醒

1. **立即撤销**暴露的API密钥
2. **生成新密钥**后立即添加到Vercel
3. **重新部署**应用程序以使环境变量生效
4. **验证**网站功能正常工作

## 安全最佳实践

- 永远不要在代码中硬编码API密钥
- 使用环境变量存储敏感信息
- 定期轮换API密钥
- 限制API密钥的权限范围