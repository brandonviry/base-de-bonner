import { writable, derived } from 'svelte/store';

// Progression de l'utilisateur
export const userProgress = writable({
  username: '',
  levelsCompleted: [],
  totalScore: 0,
  easterEggsFound: [],
  totalTime: 0,
  startTime: null,
  bestTimes: {}
});

// Sauvegarder dans localStorage
export function saveProgress() {
  userProgress.subscribe(value => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('ctosGameProgress', JSON.stringify(value));
    }
  })();
}

// Charger depuis localStorage
export function loadProgress() {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('ctosGameProgress');
    if (saved) {
      try {
        const data = JSON.parse(saved);
        userProgress.set(data);
        return data;
      } catch (e) {
        console.error('Erreur lors du chargement de la progression', e);
      }
    }
  }
  return null;
}

// Réinitialiser la progression
export function resetProgress() {
  const defaultProgress = {
    username: '',
    levelsCompleted: [],
    totalScore: 0,
    easterEggsFound: [],
    totalTime: 0,
    startTime: null,
    bestTimes: {}
  };
  userProgress.set(defaultProgress);
  if (typeof window !== 'undefined') {
    localStorage.removeItem('ctosGameProgress');
  }
}

// Marquer un niveau comme complété
export function completeLevel(levelId, scoreEarned, timeSpent) {
  userProgress.update(progress => {
    const updated = { ...progress };

    if (!updated.levelsCompleted.includes(levelId)) {
      updated.levelsCompleted.push(levelId);
    }

    updated.totalScore += scoreEarned;
    updated.totalTime += timeSpent;

    // Enregistrer le meilleur temps pour ce niveau
    if (!updated.bestTimes[levelId] || timeSpent < updated.bestTimes[levelId]) {
      updated.bestTimes[levelId] = timeSpent;
    }

    return updated;
  });

  saveProgress();
}

// Ajouter un easter egg trouvé
export function addEasterEgg(easterEggId) {
  userProgress.update(progress => {
    const updated = { ...progress };
    if (!updated.easterEggsFound.includes(easterEggId)) {
      updated.easterEggsFound.push(easterEggId);
    }
    return updated;
  });

  saveProgress();
}

// Définir le username
export function setUsername(name) {
  userProgress.update(progress => ({
    ...progress,
    username: name,
    startTime: Date.now()
  }));

  saveProgress();
}

// Derived store : progression en pourcentage
export const progressPercentage = derived(
  userProgress,
  $userProgress => ($userProgress.levelsCompleted.length / 10) * 100
);
