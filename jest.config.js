export default {
  testEnvironment: "jsdom",  // Utilise jsdom pour le DOM
  transform: {
    "^.+\\.js$": "babel-jest"  // Transforme les fichiers JS avec babel-jest
  },
  coverageDirectory: "coverage",  // Spécifie le dossier de couverture
  collectCoverage: true,          // Active la collecte de couverture
  collectCoverageFrom: [
    "src/**/*.js",                // Précise les fichiers à inclure dans la couverture
    "!**/node_modules/**"
  ]
};