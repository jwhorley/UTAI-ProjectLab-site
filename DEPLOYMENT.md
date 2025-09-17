# Deployment Guide

## Surge.sh Deployment

This project is configured for easy deployment to Surge.sh with password protection for testing.

### Quick Deploy Commands

```bash
# Deploy without password protection
npm run deploy:surge

# Deploy to specific domain (recommended)
npm run deploy:surge:protected
```

### First Time Setup

1. **Install Surge globally** (if not already installed):
   ```bash
   npm install -g surge
   ```

2. **Create Surge account** (one-time setup):
   ```bash
   surge login
   ```
   - Enter your email and create a password
   - This creates your Surge account

### Password Protection Setup

Surge.sh uses HTTP Basic Authentication. To set up password protection:

1. **Deploy your site first**:
   ```bash
   npm run deploy:surge:protected
   ```

2. **Add password protection** using Surge CLI:
   ```bash
   surge login
   surge list
   surge plus msai-studio-demo.surge.sh
   ```

3. **Set up Basic Auth**:
   ```bash
   surge plus msai-studio-demo.surge.sh --auth
   ```
   - Enter username (e.g., `tester`)
   - Enter password (your shared testing password)

### Alternative: Manual Password Protection

If you prefer manual setup:

1. Create a `.htaccess` file in your `dist` folder before deploying
2. Or use Surge's web interface at surge.sh to enable password protection

### Sharing with Testers

After deployment with password protection:
- **URL**: `https://msai-studio-demo.surge.sh`
- **Username**: The username you set
- **Password**: The password you set

### Custom Domain

To use a custom domain, edit the `CNAME` file:
```
your-custom-domain.surge.sh
```

### File Optimization

The `.surgeignore` file excludes unnecessary files from upload:
- Source files (`src/`)
- Config files
- Node modules
- Documentation

This makes deployments faster and cleaner.

### Updating the Site

To update your deployed site:
1. Make your changes
2. Run `npm run deploy:surge:protected` again
3. Password protection settings persist

### Troubleshooting

- **Domain taken**: Choose a different subdomain in CNAME
- **Auth issues**: Run `surge logout` then `surge login`
- **Build errors**: Run `npm run build` first to check for issues
- **Password protection**: Use `surge plus` command after initial deployment