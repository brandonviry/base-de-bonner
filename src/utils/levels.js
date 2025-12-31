// Configuration des 10 niveaux du jeu
export const levels = [
  // NIVEAU 1
  {
    id: 1,
    name: "Initiation ctOS",
    difficulty: "easy",
    enigma: "Bienvenue dans le système ctOS. Dans quelle ville ce système a-t-il été déployé pour la première fois ?",
    password: "chicago",
    hints: [
      { unlockAfter: 0, text: "💡 La ville des vents..." },
      { unlockAfter: 3, text: "💡 Illinois, États-Unis" },
      { unlockAfter: 6, text: "💡 CH_ _ _ _ _" }
    ],
    maxAttempts: 10,
    basePoints: 100,
    timeLimit: null,
    easterEgg: {
      trigger: "aiden",
      effect: "glitch-screen",
      bonus: 50,
      message: "/// BIENVENUE AIDEN PEARCE /// ACCÈS VIGILANTE ACCORDÉ ///"
    }
  },

  // NIVEAU 2
  {
    id: 2,
    name: "Langage Binaire",
    difficulty: "easy",
    enigma: "Décodez ce message binaire :\n01001000 01000001 01000011 01001011",
    password: "hack",
    hints: [
      { unlockAfter: 0, text: "💡 8 bits = 1 caractère ASCII" },
      { unlockAfter: 3, text: "💡 Utilisez un convertisseur binaire-texte" },
      { unlockAfter: 6, text: "💡 H_C_" }
    ],
    maxAttempts: 10,
    basePoints: 150,
    timeLimit: null,
    easterEgg: {
      trigger: "01001000",
      effect: "matrix-rain",
      bonus: 75,
      message: "/// CODE BINAIRE RECONNU /// NIVEAU HACKER +1 ///"
    }
  },

  // NIVEAU 3
  {
    id: 3,
    name: "Profiler",
    difficulty: "easy",
    enigma: "Elle était la meilleure amie d'Aiden, experte en technologie et artiste urbaine. Son nom ?",
    password: "clara",
    hints: [
      { unlockAfter: 0, text: "💡 Elle porte un bonnet rose" },
      { unlockAfter: 3, text: "💡 Clara _____" },
      { unlockAfter: 7, text: "💡 5 lettres, commence par C" }
    ],
    maxAttempts: 12,
    basePoints: 200,
    timeLimit: null,
    easterEgg: {
      trigger: "badboy17",
      effect: "graffiti-flash",
      bonus: 100,
      message: "/// TAG BADBOY17 DÉTECTÉ /// HOMMAGE À CLARA ///"
    }
  },

  // NIVEAU 4
  {
    id: 4,
    name: "Chiffrement César",
    difficulty: "medium",
    enigma: "Déchiffrez ce message (Décalage de 3) :\nEODFNRXW",
    password: "blackout",
    hints: [
      { unlockAfter: 0, text: "💡 Chiffrement César, décalage de 3 lettres" },
      { unlockAfter: 4, text: "💡 B devient E, L devient O..." },
      { unlockAfter: 8, text: "💡 B L A C K _ _ _" }
    ],
    maxAttempts: 15,
    basePoints: 300,
    timeLimit: 180,
    easterEgg: {
      trigger: "caesar",
      effect: "roman-numerals",
      bonus: 150,
      message: "/// AVE CAESAR /// CRYPTOGRAPHE RECONNU ///"
    }
  },

  // NIVEAU 5
  {
    id: 5,
    name: "Fréquences Radio",
    difficulty: "medium",
    enigma: "Quelle fréquence radio est utilisée par la police de Chicago dans le jeu ?\n(Format: XXX.X)",
    password: "851.9",
    hints: [
      { unlockAfter: 0, text: "💡 Entre 800 et 900 MHz" },
      { unlockAfter: 5, text: "💡 85_._ MHz" },
      { unlockAfter: 10, text: "💡 851.9 MHz" }
    ],
    maxAttempts: 20,
    basePoints: 350,
    timeLimit: 240,
    easterEgg: {
      trigger: "scanner",
      effect: "radio-static",
      bonus: 175,
      message: "/// SCANNER POLICE ACTIVÉ /// ÉCOUTE EN COURS ///"
    }
  },

  // NIVEAU 6
  {
    id: 6,
    name: "Code Morse",
    difficulty: "medium",
    enigma: "Décodez ce message morse :\n..-. --- -..- -.. . -.",
    password: "foxden",
    hints: [
      { unlockAfter: 0, text: "💡 Morse : . = court, - = long" },
      { unlockAfter: 6, text: "💡 Le repaire du renard..." },
      { unlockAfter: 12, text: "💡 FOX___" }
    ],
    maxAttempts: 20,
    basePoints: 400,
    timeLimit: 300,
    easterEgg: {
      trigger: "sos",
      effect: "distress-signal",
      bonus: 200,
      message: "/// S.O.S REÇU /// SIGNAL DE DÉTRESSE ///"
    }
  },

  // NIVEAU 7
  {
    id: 7,
    name: "Base64 Decode",
    difficulty: "hard",
    enigma: "Décodez cette chaîne Base64 :\nZGVmYWx0",
    password: "defalt",
    hints: [
      { unlockAfter: 0, text: "💡 Encodage Base64" },
      { unlockAfter: 8, text: "💡 Utilisez un décodeur Base64 en ligne" },
      { unlockAfter: 15, text: "💡 Attention à l'orthographe... (faute volontaire)" }
    ],
    maxAttempts: 25,
    basePoints: 500,
    timeLimit: 360,
    easterEgg: {
      trigger: "default",
      effect: "typo-correct",
      bonus: 250,
      message: "/// ORTHOGRAPHE CORRIGÉE /// MAIS CE N'EST PAS LA RÉPONSE ///"
    }
  },

  // NIVEAU 8
  {
    id: 8,
    name: "Code Hexadécimal",
    difficulty: "hard",
    enigma: "Convertissez cette valeur hexadécimale en texte :\n56 49 47 49 4C 41 4E 54 45",
    password: "vigilante",
    hints: [
      { unlockAfter: 0, text: "💡 Hexadécimal vers ASCII" },
      { unlockAfter: 10, text: "💡 56 = V, 49 = I..." },
      { unlockAfter: 18, text: "💡 VIGIL____" }
    ],
    maxAttempts: 30,
    basePoints: 600,
    timeLimit: 420,
    easterEgg: {
      trigger: "0x56",
      effect: "hex-matrix",
      bonus: 300,
      message: "/// HEXADÉCIMAL MASTERY /// HACKER NIVEAU 8 ///"
    }
  },

  // NIVEAU 9
  {
    id: 9,
    name: "Chiffre de Vigenère",
    difficulty: "hard",
    enigma: "Déchiffrez avec la clé 'CTOS' :\nQVWKQYS",
    password: "overthrow",
    hints: [
      { unlockAfter: 0, text: "💡 Chiffre de Vigenère, clé = CTOS" },
      { unlockAfter: 12, text: "💡 Utilisez un déchiffreur Vigenère en ligne" },
      { unlockAfter: 22, text: "💡 Renverser le système..." }
    ],
    maxAttempts: 35,
    basePoints: 750,
    timeLimit: 480,
    easterEgg: {
      trigger: "revolution",
      effect: "system-takeover",
      bonus: 400,
      message: "/// RÉVOLUTION DÉTECTÉE /// OVERTHROW IMMINENT ///"
    }
  },

  // NIVEAU 10 - L'IMPOSSIBLE
  {
    id: 10,
    name: "/// ACCÈS RESTREINT ///",
    difficulty: "expert",
    enigma: `███████████████████████████████
██ NIVEAU FINAL CTÓS         ██
██ CLASSIFICATION: ████████  ██
██ AUTORISATION REQUISE      ██
███████████████████████████████

Le mot de passe se cache là où vous ne regardez pas.
Les yeux voient, mais l'esprit ignore.
Cherchez ce qui ne devrait pas être.`,
    password: "thevigilante",
    hints: [
      { unlockAfter: 0, text: "💡 La réponse est devant vos yeux depuis le début" },
      { unlockAfter: 15, text: "💡 Inspectez chaque élément de l'interface" },
      { unlockAfter: 30, text: "💡 Le footer... regardez le footer..." },
      { unlockAfter: 50, text: "💡 Survolez les éléments invisibles" },
      { unlockAfter: 75, text: "💡 Opacity: 0.01 != Inexistant" }
    ],
    maxAttempts: 100,
    basePoints: 1000,
    timeLimit: 600,
    easterEgg: {
      trigger: "konami",
      effect: "ultimate-unlock",
      bonus: 5000,
      message: `╔═══════════════════════════════════╗
║  /// KONAMI CODE DÉTECTÉ ///     ║
║  ULTIMATE HACKER STATUS           ║
║  TOUS LES SECRETS DÉBLOQUÉS       ║
║  BONUS MASSIF: +5000 POINTS       ║
╚═══════════════════════════════════╝`
    }
  }
];

// Fonction pour obtenir un niveau par ID
export function getLevelById(id) {
  return levels.find(level => level.id === id);
}

// Fonction pour valider une réponse
export function validateAnswer(levelId, userAnswer) {
  const level = getLevelById(levelId);
  if (!level) return { valid: false, isEasterEgg: false };

  const normalizedAnswer = userAnswer.trim().toLowerCase();
  const normalizedPassword = level.password.toLowerCase();

  // Vérifier la réponse correcte
  if (normalizedAnswer === normalizedPassword) {
    return { valid: true, isEasterEgg: false };
  }

  // Vérifier l'easter egg
  if (level.easterEgg && normalizedAnswer === level.easterEgg.trigger.toLowerCase()) {
    return {
      valid: false,
      isEasterEgg: true,
      easterEgg: level.easterEgg
    };
  }

  return { valid: false, isEasterEgg: false };
}
