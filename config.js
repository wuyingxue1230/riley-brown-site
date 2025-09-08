// Secure Configuration - Load from environment variables
const CONFIG = {
    firebase: {
        apiKey: import.meta.env.VITE_FIREBASE_API_KEY || process.env.FIREBASE_API_KEY,
        authDomain: "website-28dc5.firebaseapp.com",
        projectId: "website-28dc5",
        storageBucket: "website-28dc5.firebasestorage.app",
        messagingSenderId: "247226607208",
        appId: "1:247226607208:web:4a707d856efb1c7020bddd"
    },
    glm: {
        apiKey: import.meta.env.VITE_GLM_API_KEY || process.env.GLM_API_KEY,
        baseUrl: "https://open.bigmodel.cn/api/paas/v4/chat/completions"
    }
};

// Validate configuration
function validateConfig() {
    const missing = [];
    
    if (!CONFIG.firebase.apiKey) missing.push('FIREBASE_API_KEY');
    if (!CONFIG.glm.apiKey) missing.push('GLM_API_KEY');
    
    if (missing.length > 0) {
        console.error('Missing environment variables:', missing.join(', '));
        return false;
    }
    
    return true;
}

// Export configuration
window.APP_CONFIG = CONFIG;
window.validateConfig = validateConfig;