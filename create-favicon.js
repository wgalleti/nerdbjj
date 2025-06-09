import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function createFavicon() {
  try {
    const inputPath = path.join(__dirname, 'src', 'assets', 'logo.svg');
    const outputDir = path.join(__dirname, 'public');
    
    // Check if input file exists
    if (!fs.existsSync(inputPath)) {
      console.error('❌ logo.svg not found in src/assets directory');
      return;
    }

    console.log('🎨 Creating favicons and ebook cover from SVG logo...');

    // Create different sizes for favicon
    const sizes = [16, 32, 48, 64, 128, 256];
    
    for (const size of sizes) {
      await sharp(inputPath)
        .resize(size, size, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 0 } // transparent background
        })
        .png()
        .toFile(path.join(outputDir, `favicon-${size}x${size}.png`));
      
      console.log(`✅ Created favicon-${size}x${size}.png`);
    }

    // Create the main favicon.png (32x32)
    await sharp(inputPath)
      .resize(32, 32, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .png()
      .toFile(path.join(outputDir, 'favicon.png'));

    // Create apple-touch-icon with rounded corners and background
    await sharp(inputPath)
      .resize(180, 180, {
        fit: 'contain',
        background: { r: 56, g: 56, b: 56, alpha: 1 } // dark background
      })
      .png()
      .toFile(path.join(outputDir, 'apple-touch-icon.png'));

    // Create new ebook cover (1600x2400 for good quality)
    const ebookCoverBuffer = await sharp(inputPath)
      .resize(1600, 2400, {
        fit: 'contain',
        background: { r: 40, g: 40, b: 40, alpha: 1 } // dark background for ebook
      })
      .jpeg({ quality: 90 })
      .toBuffer();

    await fs.promises.writeFile(path.join(outputDir, 'ebook-cover.jpeg'), ebookCoverBuffer);

    console.log('✅ Created favicon.png');
    console.log('✅ Created apple-touch-icon.png');
    console.log('✅ Created new ebook-cover.jpeg');
    console.log('🎉 Favicon and ebook cover generation completed!');
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