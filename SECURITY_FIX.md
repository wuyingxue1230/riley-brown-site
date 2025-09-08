# API Keys Security Fix

## 暴露的API密钥
当前代码中硬编码了以下敏感信息：
- Firebase API Key: `AIzaSyCENIM80o_yE5ineisKjzUy3apgMt87T-k`
- GLM API Key: `8bcff0a70a6b4044a91169e6a3285206.Ud3hh5YpMAkIa3wC`

## 解决方案

### 1. 立即撤销暴露的密钥
- Firebase Console: Project Settings > General > Web API Key
- GLM API: 联系API提供商撤销当前密钥

### 2. 使用环境变量
在Vercel中设置环境变量：
```
FIREBASE_API_KEY=your_new_firebase_api_key
GLM_API_KEY=your_new_glm_api_key
```

### 3. 更新代码
将硬编码的密钥替换为环境变量引用。