#!/usr/bin/env node
'use strict';

// replace-bootstrap-imports.js
const fs = require('fs');
const path = require('path');

function replaceBootstrapImports(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');

        // Regex untuk match old path dan replace dengan new path
        const oldPathRegex = /@import "\.\.\/\.\.\/\.\.\/bootstrap4-bundle\/node_modules\/bootstrap\/scss\/([^"]+)";/g;
        const newPath = '@import "../../../../bootstrap/scss/$1";';

        const newContent = content.replace(oldPathRegex, newPath);

        if (content !== newContent) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log(`✅ UPDATED: ${path.relative(process.cwd(), filePath)}`);
            return true;
        } else {
            console.log(`⏩ NO CHANGE: ${path.relative(process.cwd(), filePath)}`);
            return false;
        }

    } catch (error) {
        console.error(`❌ ERROR: ${filePath} - ${error.message}`);
        return false;
    }
}

// Process semua file SCSS
function processSCSSFiles(directory) {
    let processedCount = 0;
    let updatedCount = 0;

    function scanDirectory(dir) {
        if (!fs.existsSync(dir)) {
            console.log(`❌ Directory not found: ${dir}`);
            return;
        }

        const items = fs.readdirSync(dir);

        items.forEach(item => {
            // Skip node_modules dan hidden folders
            if (item === 'node_modules' || item.startsWith('.')) return;

            const fullPath = path.join(dir, item);
            const stat = fs.statSync(fullPath);

            if (stat.isDirectory()) {
                scanDirectory(fullPath);
            } else if (item.endsWith('.scss')) {
                processedCount++;
                if (replaceBootstrapImports(fullPath)) {
                    updatedCount++;
                }
            }
        });
    }

    console.log('🔍 Scanning for SCSS files with old bootstrap imports...\n');
    scanDirectory(directory);

    console.log(`\n📊 RESULTS:`);
    console.log(`   Files scanned: ${processedCount}`);
    console.log(`   Files updated: ${updatedCount}`);
    console.log(`   No changes: ${processedCount - updatedCount}`);
}


// Run untuk directories yang mungkin ada SCSS files
const directories = [
    './libs/parent-themes-styles',
    './node_modules/@vigihdev/bootstrap4-bundle-compact/libs/parent-themes-styles',
];

directories.forEach(dir => {
    if (fs.existsSync(dir)) {
        processSCSSFiles(dir);
    }
});