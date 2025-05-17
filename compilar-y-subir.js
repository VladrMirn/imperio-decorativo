const { exec } = require("child_process");

console.log("🚀 Compilando Tailwind...");

exec(`npx tailwindcss -i ./src/input.css -o ./src/output.css --minify`, (err, stdout, stderr) => {
  if (err) {
    console.error("❌ Falló la compilación:", stderr);
    return;
  }
  console.log("✅ Tailwind compilado correctamente.");

  console.log("📦 Subiendo a GitHub...");
  exec(`git add ./src/output.css && git commit -m "🚀 Update: nuevo output.css de Tailwind v3" && git push origin main`, (err2, stdout2, stderr2) => {
    if (err2) {
      console.error("❌ Falló el push:", stderr2);
    } else {
      console.log("✅ ¡Push exitoso! El CSS está en GitHub.");
    }
  });
});
