# 💝 Valentine's Day QR Code Project

Un projet interactif pour demander à quelqu'un d'être votre Valentine avec un QR code!

## 🎯 Fonctionnalités

- Message romantique "Would you be my Valentine?" 💕
- Deux boutons: **Yes** et **No**
- Le bouton "No" rétrécit à chaque clic
- Le bouton "Yes" s'agrandit à chaque fois que "No" est cliqué
- Animation de confettis quand "Yes" est cliqué
- Messages amusants qui changent quand on clique sur "No"
- Design responsive et élégant
- Générateur de QR Code inclus

## 📁 Structure du Projet

```
project/
│
├── index.html          # Page principale avec la question Valentine
├── style.css           # Styles et animations
├── script.js           # Logique interactive
├── qr-generator.html   # Générateur de QR Code
└── README.md           # Ce fichier
```

## 🚀 Comment utiliser

### Option 1: Test Local

1. Ouvrez `index.html` dans votre navigateur
2. Testez l'interaction avec les boutons!

### Option 2: Déploiement et QR Code

1. **Hébergez votre site** sur une plateforme gratuite:
   - **GitHub Pages** (recommandé):
     - Créez un repo GitHub
     - Uploadez tous les fichiers
     - Activez GitHub Pages dans Settings
   - **Netlify**: Glissez-déposez le dossier
   - **Vercel**: Connectez votre repo GitHub
   - **Surge.sh**: `npm install -g surge` puis `surge`

2. **Générez le QR Code**:
   - Ouvrez `qr-generator.html` dans votre navigateur
   - Collez l'URL de votre site hébergé
   - Cliquez sur "Générer QR Code"
   - Téléchargez l'image du QR Code

3. **Partagez**:
   - Envoyez le QR Code à votre Valentine
   - Attendez la réponse! 💖

## 🎨 Personnalisation

### Modifier le message
Dans `index.html`, changez la ligne:
```html
<h1 class="question">Would you be my Valentine? 💕</h1>
```

### Modifier les couleurs
Dans `style.css`, changez les gradients:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Modifier les messages "No"
Dans `script.js`, modifiez le tableau `messages`:
```javascript
const messages = [
    "Are you sure? 🥺",
    "Really? Please reconsider! 💕",
    // Ajoutez vos propres messages ici
];
```

## 🎥 Démonstration

1. Ouvrez la page via le QR Code
2. Cliquez sur "No" → Le bouton rétrécit et "Yes" grandit
3. Continuez à cliquer sur "No" → Messages amusants apparaissent
4. Cliquez sur "Yes" → Célébration avec confettis! 🎉

## 🛠️ Technologies utilisées

- HTML5
- CSS3 (animations, gradients, flexbox)
- JavaScript (Vanilla JS)
- QRCode.js (pour le générateur de QR Code)

## 📱 Responsive

Le design s'adapte automatiquement aux mobiles, tablettes et ordinateurs.

## 💡 Astuces

- Testez la page avant de générer le QR Code
- Utilisez une URL courte pour un QR Code plus simple
- Personnalisez les couleurs selon les préférences de votre Valentine
- Ajoutez de la musique de fond (nécessite interaction utilisateur)

## 🎊 Bon courage!

J'espère que votre Valentine dira "Yes!" 💖

---

Créé avec ❤️ pour la Saint-Valentin
