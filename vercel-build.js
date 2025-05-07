// Este archivo es para que Vercel sepa cómo construir tu aplicación
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Establece las variables de entorno necesarias
process.env.NODE_OPTIONS = '--openssl-legacy-provider';
process.env.PUBLIC_URL = '/';

try {
  // Ejecuta el comando de construcción
  console.log('Iniciando proceso de build con NODE_OPTIONS y PUBLIC_URL configurados');
  execSync('npm run build', { stdio: 'inherit' });
  
  // Verifica que se haya creado el directorio build y el archivo index.html
  const buildDir = path.join(__dirname, 'build');
  const indexPath = path.join(buildDir, 'index.html');
  
  if (fs.existsSync(indexPath)) {
    console.log('Build completado exitosamente. El archivo index.html existe.');
  } else {
    console.error('Error: No se encontró el archivo index.html en la carpeta build.');
    process.exit(1);
  }
} catch (error) {
  console.error('Error durante la construcción:', error);
  process.exit(1);
}
