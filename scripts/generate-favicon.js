const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function generateFavicons() {
  const logoPath = path.join(__dirname, '../public/images/logo.png');
  const appDir = path.join(__dirname, '../src/app');

  // Generate favicon.ico (32x32)
  await sharp(logoPath)
    .resize(32, 32, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png()
    .toFile(path.join(appDir, 'icon.png'));

  // Generate apple-icon (180x180)
  await sharp(logoPath)
    .resize(180, 180, { fit: 'contain', background: { r: 6, g: 39, b: 78, alpha: 1 } })
    .png()
    .toFile(path.join(appDir, 'apple-icon.png'));

  // Generate opengraph image (1200x630)
  const ogWidth = 1200;
  const ogHeight = 630;
  const logoSize = 300;

  // Create a background with the brand color
  const background = await sharp({
    create: {
      width: ogWidth,
      height: ogHeight,
      channels: 4,
      background: { r: 6, g: 39, b: 78, alpha: 1 } // primary-900 color
    }
  }).png().toBuffer();

  // Resize logo for OG image
  const resizedLogo = await sharp(logoPath)
    .resize(logoSize, logoSize, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  // Composite logo on background
  await sharp(background)
    .composite([{
      input: resizedLogo,
      left: Math.floor((ogWidth - logoSize) / 2),
      top: Math.floor((ogHeight - logoSize) / 2)
    }])
    .toFile(path.join(appDir, 'opengraph-image.png'));

  console.log('Favicons generated successfully!');
  console.log('- icon.png (32x32)');
  console.log('- apple-icon.png (180x180)');
  console.log('- opengraph-image.png (1200x630)');
}

generateFavicons().catch(console.error);
