@echo off
echo Inicializando repositorio Git...
git init

echo.
echo Añadiendo archivos al repositorio...
git add .

echo.
echo Realizando commit inicial...
git commit -m "Primer commit - Matias Cell Repair"

echo.
echo Ahora puedes conectar este repositorio a GitHub con los siguientes comandos:
echo git remote add origin URL_DEL_REPOSITORIO
echo git push -u origin master

echo.
echo Recuerda reemplazar URL_DEL_REPOSITORIO con la URL de tu repositorio en GitHub.