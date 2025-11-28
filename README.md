# @vigihdev/bootstrap4-bundle-compact

A comprehensive Bootstrap 4 component bundle with enhanced plugins and utilities for modern web development.

## 📦 Installation

```bash
npm install @vigihdev/bootstrap4-bundle-compact
```

## 🚀 Quick Start

```javascript
// Import the bundle
import "@vigihdev/bootstrap4-bundle-compact/dist/css/bootstrap-bundle.css";
import "@vigihdev/bootstrap4-bundle-compact/dist/js/bootstrap-bundle.js";

// Or include via CDN (coming soon)
```

## 📋 Included Components & Plugins

### Core Framework

- **Bootstrap 4.6.0** - Complete CSS framework
- **jQuery 3.7.1** - JavaScript library
- **Popper.js** & **@popperjs/core** - Tooltip and popover positioning

### UI Components

- **Owl Carousel 2.3.4** - Responsive carousel slider
- **Select2 4.1.0** - Enhanced select boxes
- **Lightbox2 2.11.5** - Image lightbox gallery
- **BS5 Lightbox 1.8.3** - Bootstrap 5 lightbox component

### Utilities

- **Tempus Dominus 6.9.11** - DateTime picker
- **Moment.js 2.30.1** - Date manipulation library
- **Handlebars 4.7.7** - Templating engine
- **Clipboard 2.0.11** - Copy to clipboard functionality
- **EasyTimer.js 4.6.0** - Timer and countdown utility
- **Infinite Scroll 4.0.1** - Infinite scrolling functionality
- **Typeahead.js 0.11.1** - Autocomplete functionality

## 🛠️ Build Commands

### Development

```bash
# Start development server with nodemon
npm run dev

# Run all bootstrap4 grunt tasks
npm run grunt:bs4

# Clean build directories
npm run grunt:bs4:clean

# Fresh build (clean + build)
npm run grunt:bs4:fresh

# Build distribution files
npm run grunt:bs4:dist

# Build bundle only
npm run grunt:bs4:build
```

### Production Build

```bash
# Complete production build
npm run grunt:bs4:dist

# Or step by step
npm run grunt:bs4:clean
npm run grunt:bs4:build
```

## 📁 Project Structure

```
bootstrap4-bundle-compact/
├── src/
│   ├── scripts/
│   │   └── grunt.sh          # Grunt task runner
│   ├── grunt/
│   │   └── bootstrap4-grunt.js # Grunt configuration
│   └── config/
│       └── dotEnv.js         # Environment configuration
├── builds/                   # Temporary build files
├── dist/                    # Final distribution files
│   ├── css/
│   │   └── bootstrap-bundle.css
│   └── js/
│       └── bootstrap-bundle.js
└── index.js                 # Main entry point
```

## 🔧 Grunt Tasks

The project uses Grunt for automated builds with the following tasks:

- **concat_css** - Combine CSS files
- **concat** - Combine JavaScript files
- **sass** - Compile Sass to CSS
- **copy** - Copy files to build directory
- **stripCssComments** - Remove CSS comments for production
- **cssmin** - Minify CSS files
- **uglify** - Minify JavaScript files

## 🎯 Usage Examples

### DateTime Picker

```javascript
// Initialize Tempus Dominus
new tempusDominus.TempusDominus(document.getElementById("datetimepicker"), {
  // configuration options
});
```

### Carousel

```javascript
// Initialize Owl Carousel
$(".owl-carousel").owlCarousel({
  items: 1,
  loop: true,
  nav: true,
});
```

### Select2

```javascript
// Enhanced select boxes
$(".select2").select2();
```

## 🌟 Features

- ✅ **Optimized Bundles** - Combined and minified assets
- ✅ **Tree Shaking Ready** - ES6 module support
- ✅ **Production Ready** - Optimized for deployment
- ✅ **Developer Friendly** - Comprehensive build system
- ✅ **Plugin Integration** - Seamless plugin interoperability

## 📄 License

MIT © Vigihdev

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For support and questions, please open an issue on the GitHub repository.

---

**Version:** 0.1.0-dev  
**Last Updated:** November 2024

---

<div align="center">
  
Made with ❤️ by [Vigihdev](https://github.com/vigihdev)

</div>
