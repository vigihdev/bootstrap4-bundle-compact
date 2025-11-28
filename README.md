# @vigihdev/bootstrap4-bundle-compact 🚀

**All-in-One Bootstrap 4 Solution** - A comprehensive bundle featuring essential components, custom themes, and streamlined build tools.

## ✨ Features

- ✅ **Bootstrap 4.6** - Full framework included
- ✅ **jQuery + Popper.js** - Essential dependencies
- ✅ **Custom Themes** - Pre-built theme system
- ✅ **Component Library** - Ready-to-use UI components
- ✅ **Build Tools** - Grunt-based build pipeline
- ✅ **Compact Size** - Optimized for production

## 🛠️ Installation

```bash
npm install @vigihdev/bootstrap4-bundle-compact
```

## 🚀 Quick Start

### HTML Usage:

```html
<!-- Include everything in two lines -->
<link
  href="node_modules/@vigihdev/bootstrap4-bundle-compact/builds/css/bootstrap-bundle.css"
  rel="stylesheet"
/>
<script src="node_modules/@vigihdev/bootstrap4-bundle-compact/builds/js/bootstrap-bundle.js"></script>
```

### Build System:

```bash
# Build everything
grunt bundle-bootstrap4:fresh

# Development watch mode
grunt bundle-bootstrap4:watch

# Build specific components
grunt bootstrap4:dist
grunt themes_styles:build
```

## 📁 Project Structure

```
bootstrap4-bundle-compact/
├── builds/                 # Production builds
├── assets/                # Build configuration
│   ├── bootstrap4/        # Core Bootstrap
│   ├── themes-bootstrap/  # Bootstrap themes
│   ├── themes-styles/     # Foundation styles
│   └── themes-components/ # UI components
└── libs/                  # Custom libraries
```

## 🔧 Available Tasks

```bash
# Main builds
grunt bundle-bootstrap4:fresh    # Clean + full rebuild
grunt bundle-bootstrap4:build    # Build final bundle

# Individual components
grunt bootstrap4:dist           # Build Bootstrap core
grunt themes_styles:build       # Build theme styles
grunt themes_components:build   # Build UI components

# Development
grunt bootstrap4:watch          # Watch Bootstrap files
grunt themes_styles:watch       # Watch theme files
```

## 🎨 Themes Included

- **Bootstrap Themes** - Enhanced Bootstrap components
- **Style Foundation** - Base styling system
- **UI Components** - Ready-to-use components

## 📦 What's Inside

- Bootstrap 4.6.0 + jQuery 3.7.1 + Popper.js
- Custom theme system (Sass/SCSS)
- Component library (JavaScript)
- Grunt build automation
- Production-optimized bundles

## 🔄 Build Pipeline

```
Clean → Compile (Sass) → Bundle (Concat) → Optimize → Final Bundle
```

## 📄 License

MIT © [Vigihdev](https://github.com/vigihdev)
