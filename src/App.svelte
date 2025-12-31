<script>
  import { onMount } from 'svelte';
  import Header from './lib/layout/Header.svelte';
  import Footer from './lib/layout/Footer.svelte';
  import GameSection from './lib/layout/GameSection.svelte';
  import SidebarHints from './lib/layout/SidebarHints.svelte';
  import NotificationToast from './lib/components/NotificationToast.svelte';
  import Button from './lib/ui/Button.svelte';
  import Card from './lib/ui/Card.svelte';
  import Title from './lib/ui/Title.svelte';
  import Paragraph from './lib/ui/Paragraph.svelte';
  import Input from './lib/ui/Input.svelte';
  import GlitchText from './lib/ui/GlitchText.svelte';

  import { levels, getLevelById, validateAnswer } from './utils/levels.js';
  import {
    currentLevel,
    attemptsRemaining,
    attemptsMade,
    score,
    gameStatus,
    timer,
    timerRunning,
    canPlay,
    feedbackMessage,
    feedbackType,
    resetLevel,
    nextLevel,
    addScore,
    deductScore
  } from './stores/gameState.js';
  import {
    userProgress,
    loadProgress,
    saveProgress,
    completeLevel,
    setUsername,
    addEasterEgg
  } from './stores/userProgress.js';

  // État local
  let gameScreen = 'welcome'; // welcome, playing, victory
  let userAnswer = '';
  let username = '';
  let currentLevelData = null;
  let notificationVisible = false;
  let startTime = 0;

  // Timer interval
  let timerInterval;

  // Charger la progression au démarrage
  onMount(() => {
    const saved = loadProgress();
    if (saved && saved.username) {
      username = saved.username;
      gameScreen = 'playing';
      loadCurrentLevel();
      startTimer();
    }

    return () => {
      if (timerInterval) clearInterval(timerInterval);
    };
  });

  // Démarrer le timer
  function startTimer() {
    timerRunning.set(true);
    timerInterval = setInterval(() => {
      if ($timerRunning) {
        timer.update(n => n + 1);
      }
    }, 1000);
  }

  // Arrêter le timer
  function stopTimer() {
    timerRunning.set(false);
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
  }

  // Charger le niveau actuel
  function loadCurrentLevel() {
    currentLevelData = getLevelById($currentLevel);
    if (currentLevelData) {
      resetLevel(currentLevelData.maxAttempts);
      startTime = Date.now();
    }
  }

  // Démarrer le jeu
  function startGame() {
    if (!username.trim()) {
      showNotification('Veuillez entrer un pseudo !', 'error');
      return;
    }

    setUsername(username.trim());
    gameScreen = 'playing';
    currentLevel.set(1);
    score.set(0);
    timer.set(0);
    startTimer();
    loadCurrentLevel();
  }

  // Soumettre une réponse
  function submitAnswer() {
    if (!userAnswer.trim() || !$canPlay) return;

    const result = validateAnswer($currentLevel, userAnswer);

    // Easter Egg trouvé
    if (result.isEasterEgg) {
      showNotification(result.easterEgg.message, 'easter-egg');
      addScore(result.easterEgg.bonus);
      addEasterEgg(`${$currentLevel}-${result.easterEgg.trigger}`);
      userAnswer = '';
      return;
    }

    // Réponse correcte
    if (result.valid) {
      handleCorrectAnswer();
    } else {
      handleWrongAnswer();
    }
  }

  // Réponse correcte
  function handleCorrectAnswer() {
    const timeSpent = Math.floor((Date.now() - startTime) / 1000);
    let earnedPoints = currentLevelData.basePoints;

    // Bonus de vitesse
    if (currentLevelData.timeLimit) {
      if (timeSpent < currentLevelData.timeLimit * 0.3) {
        earnedPoints += Math.floor(currentLevelData.basePoints * 0.5);
        showNotification(`🚀 ULTRA RAPIDE ! +50% de bonus !`, 'success');
      } else if (timeSpent < currentLevelData.timeLimit * 0.6) {
        earnedPoints += Math.floor(currentLevelData.basePoints * 0.25);
        showNotification(`⚡ Rapide ! +25% de bonus !`, 'success');
      }
    }

    // Bonus de tentatives
    if ($attemptsMade < 3) {
      earnedPoints += 50;
    }

    addScore(earnedPoints);
    completeLevel($currentLevel, earnedPoints, timeSpent);

    showNotification(
      `✓ Niveau ${$currentLevel} complété ! +${earnedPoints} points`,
      'success'
    );

    userAnswer = '';

    // Passer au niveau suivant ou victoire
    setTimeout(() => {
      if ($currentLevel < 10) {
        currentLevel.update(n => n + 1);
        loadCurrentLevel();
      } else {
        // Victoire totale !
        gameScreen = 'victory';
        stopTimer();
        gameStatus.set('completed');
      }
    }, 2000);
  }

  // Réponse incorrecte
  function handleWrongAnswer() {
    attemptsRemaining.update(n => n - 1);
    attemptsMade.update(n => n + 1);
    deductScore(10);

    if ($attemptsRemaining <= 0) {
      showNotification('❌ Plus de tentatives ! Niveau échoué.', 'error');
      gameStatus.set('lost');
      setTimeout(() => {
        resetLevel(currentLevelData.maxAttempts);
      }, 2000);
    } else {
      showNotification(
        `❌ Mauvaise réponse ! -10 points. ${$attemptsRemaining} tentatives restantes.`,
        'error'
      );
    }

    userAnswer = '';
  }

  // Afficher une notification
  function showNotification(message, type = 'info') {
    feedbackMessage.set(message);
    feedbackType.set(type);
    notificationVisible = true;

    setTimeout(() => {
      notificationVisible = false;
    }, 4000);
  }

  // Réinitialiser le jeu
  function resetGame() {
    gameScreen = 'welcome';
    username = '';
    currentLevel.set(1);
    score.set(0);
    timer.set(0);
    stopTimer();
    userAnswer = '';
  }

  // Mettre à jour le niveau actuel quand il change
  $: if ($currentLevel && gameScreen === 'playing') {
    currentLevelData = getLevelById($currentLevel);
  }
</script>

<div class="min-h-screen flex flex-col bg-ctos-dark crt-screen">
  <NotificationToast
    message={$feedbackMessage}
    type={$feedbackType}
    visible={notificationVisible}
  />

  {#if gameScreen === 'welcome'}
    <!-- Écran d'accueil -->
    <main class="flex-1 flex items-center justify-center p-8">
      <Card glowing={true} borderAnimate={true}>
        <div class="max-w-md text-center">
          <Title level={1} glitch={true}>
            <GlitchText text="ctOS" intensity="high" />
          </Title>

          <Paragraph size="lg" color="primary">
            Mini-Jeu de Devinettes
          </Paragraph>

          <div class="my-8">
            <Paragraph color="light">
              Bienvenue dans le système ctOS. Résolvez 10 énigmes de difficulté croissante inspirées de l'univers Watch Dogs.
            </Paragraph>
          </div>

          <div class="mb-6">
            <Input
              bind:value={username}
              placeholder="Entrez votre pseudo..."
              autofocus={true}
              on:keydown={(e) => e.key === 'Enter' && startGame()}
            />
          </div>

          <Button variant="primary" size="lg" onClick={startGame}>
            <i class="fas fa-play mr-2"></i>
            Commencer
          </Button>

          <div class="mt-8 space-y-2">
            <Paragraph size="sm" color="light">
              <i class="fas fa-trophy"></i> 10 niveaux - Difficulté croissante
            </Paragraph>
            <Paragraph size="sm" color="light">
              <i class="fas fa-clock"></i> Mode Speedrun activé
            </Paragraph>
            <Paragraph size="sm" color="light">
              <i class="fas fa-gift"></i> Easter eggs cachés
            </Paragraph>
          </div>
        </div>
      </Card>
    </main>

  {:else if gameScreen === 'playing'}
    <!-- Écran de jeu -->
    <Header score={$score} timerSeconds={$timer} timerRunning={$timerRunning} />

    <main class="flex-1">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        <!-- Zone de jeu principale -->
        <div class="lg:col-span-2">
          <GameSection
            level={currentLevelData}
            bind:userAnswer
            attemptsRemaining={$attemptsRemaining}
            onSubmit={submitAnswer}
            canPlay={$canPlay}
          />
        </div>

        <!-- Sidebar d'indices -->
        <div class="lg:col-span-1">
          <SidebarHints
            level={currentLevelData}
            attemptsMade={$attemptsMade}
          />
        </div>
      </div>
    </main>

    <Footer />

  {:else if gameScreen === 'victory'}
    <!-- Écran de victoire -->
    <main class="flex-1 flex items-center justify-center p-8">
      <Card glowing={true} borderAnimate={true}>
        <div class="max-w-2xl text-center">
          <Title level={1} color="success">
            <GlitchText text="/// VICTOIRE ///" intensity="high" />
          </Title>

          <div class="my-8 space-y-4">
            <Paragraph size="lg" color="primary">
              Félicitations {$userProgress.username} !
            </Paragraph>

            <Paragraph color="light">
              Vous avez complété les 10 niveaux du système ctOS.
            </Paragraph>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <Card>
                <div class="text-center">
                  <i class="fas fa-trophy text-4xl text-ctos-accent mb-2"></i>
                  <Paragraph size="sm" color="light">Score Final</Paragraph>
                  <Title level={3} color="primary">{$score}</Title>
                </div>
              </Card>

              <Card>
                <div class="text-center">
                  <i class="fas fa-clock text-4xl text-ctos-primary mb-2"></i>
                  <Paragraph size="sm" color="light">Temps Total</Paragraph>
                  <Title level={3} color="primary">
                    {Math.floor($timer / 60)}:{($timer % 60).toString().padStart(2, '0')}
                  </Title>
                </div>
              </Card>

              <Card>
                <div class="text-center">
                  <i class="fas fa-gift text-4xl text-ctos-success mb-2"></i>
                  <Paragraph size="sm" color="light">Easter Eggs</Paragraph>
                  <Title level={3} color="primary">{$userProgress.easterEggsFound.length}</Title>
                </div>
              </Card>
            </div>
          </div>

          <div class="flex gap-4 justify-center flex-wrap">
            <Button variant="primary" onClick={resetGame}>
              <i class="fas fa-redo mr-2"></i>
              Rejouer
            </Button>
          </div>
        </div>
      </Card>
    </main>
  {/if}
</div>
