import { writable, derived } from 'svelte/store';

// État actuel du niveau
export const currentLevel = writable(1);

// Tentatives restantes pour le niveau actuel
export const attemptsRemaining = writable(10);

// Score actuel
export const score = writable(0);

// Indices débloqués (nombre de tentatives effectuées)
export const attemptsMade = writable(0);

// Status du jeu
export const gameStatus = writable('playing'); // playing, won, lost, completed

// Timer (en secondes)
export const timer = writable(0);
export const timerRunning = writable(false);

// Est-ce qu'on peut encore jouer ?
export const canPlay = derived(
  [attemptsRemaining, gameStatus],
  ([$attemptsRemaining, $gameStatus]) =>
    $attemptsRemaining > 0 && $gameStatus === 'playing'
);

// Message de feedback
export const feedbackMessage = writable('');
export const feedbackType = writable(''); // success, error, info, easter-egg

// Easter eggs trouvés
export const easterEggsFound = writable([]);

// Fonction pour réinitialiser le niveau
export function resetLevel(maxAttempts) {
  attemptsRemaining.set(maxAttempts);
  attemptsMade.set(0);
  gameStatus.set('playing');
  feedbackMessage.set('');
  feedbackType.set('');
  timer.set(0);
}

// Fonction pour passer au niveau suivant
export function nextLevel(newMaxAttempts) {
  currentLevel.update(n => n + 1);
  resetLevel(newMaxAttempts);
}

// Fonction pour ajouter des points
export function addScore(points) {
  score.update(n => n + points);
}

// Fonction pour déduire des points
export function deductScore(points) {
  score.update(n => Math.max(0, n - points));
}
