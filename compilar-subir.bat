@echo off
cd /d "%~dp0"

:: COMPILAR
npx tailwindcss -i ./src/input.css -o ./src/css/output.css --minify

:: AGREGAR AL GIT Y SUBIR
git add src/css/output.css
git commit -m "🔥 Actualización automática de output.css"
git push origin main

echo ================================
echo ✅ ¡Todo subido a GitHub!
echo ================================
pause
