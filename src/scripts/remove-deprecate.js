#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function removeDeprecateMixin(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');

        // Regex untuk hapus @include deprecate yang spesifik untuk size()
        const regex = /@include deprecate\("`size\(\)`", "v4\.3\.0", "v5"\);\s*/g;

        const newContent = content.replace(regex, '');

        if (content !== newContent) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log(`✅ Updated: ${filePath}`);
            return true;
        } else {
            console.log(`⏩ No changes: ${filePath}`);
            return false;
        }

    } catch (error) {
        console.error(`❌ Error processing ${filePath}:`, error.message);
        return false;
    }
}

const fileSize = path.resolve(process.env.PWD, 'node_modules', 'bootstrap', 'scss', 'mixins', '_size.scss');
if (fs.existsSync(fileSize)) {
    return removeDeprecateMixin(fileSize)
}
console.log(`❌ File not found ${fileSize}`);
