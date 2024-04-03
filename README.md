# Installer les dépendances

Assurez vous d'avoir localement installé le gestionnaire de paquets "npm"
Les dépendances sont inscrites dans le fichier package.json, pour toutes les installer : 
### `npm install`


## Lancer l'application

A la racine du projet, lancez l'application avec

### `npm start`

## Problèmes de CORS

Pour tous problèmes liés au CORS, lancez une version de Chrome ayant le CORS désactivé 

Windows : ###"C:\Program Files\Google\Chrome\Application\chrome.exe" --disable-web-security --disable-gpu --user-data-dir=%LOCALAPPDATA%\Google\chromeTemp

OSX: ###open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security


