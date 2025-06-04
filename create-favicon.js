import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function createFavicon() {
  try {
    const inputPath = path.join(__dirname, 'public', 'ebook-cover.jpeg');
    const outputDir = path.join(__dirname, 'public');
    
    // Check if input file exists
    if (!fs.existsSync(inputPath)) {
      console.error('❌ ebook-cover.jpeg not found in public directory');
      return;
    }

    console.log('🎨 Creating favicon from ebook cover...');

    // Create different sizes for favicon
    const sizes = [16, 32, 48, 64, 128, 256];
    
    for (const size of sizes) {
      await sharp(inputPath)
        .resize(size, size, {
          fit: 'cover',
          position: 'center'
        })
        .png()
        .toFile(path.join(outputDir, `favicon-${size}x${size}.png`));
      
      console.log(`✅ Created favicon-${size}x${size}.png`);
    }

    // Create the main favicon.ico (32x32)
    await sharp(inputPath)
      .resize(32, 32, {
        fit: 'cover',
        position: 'center'
      })
      .png()
      .toFile(path.join(outputDir, 'favicon.png'));

    // Create apple-touch-icon
    await sharp(inputPath)
      .resize(180, 180, {
        fit: 'cover',
        position: 'center'
      })
      .png()
      .toFile(path.join(outputDir, 'apple-touch-icon.png'));

    console.log('✅ Created favicon.png');
    console.log('✅ Created apple-touch-icon.png');
    console.log('🎉 Favicon generation completed!');
    console.log('\n📝 Add these lines to your HTML head:');
    console.log('<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">');
    console.log('<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">');
    console.log('<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">');
    console.log('<link rel="icon" href="/favicon.png">');

  } catch (error) {
    console.error('❌ Error creating favicon:', error.message);
    console.log('\n💡 Make sure to install sharp first:');
    console.log('npm install sharp');
  }
}

createFavicon(); 