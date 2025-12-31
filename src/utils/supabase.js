import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Créer le client Supabase seulement si les clés sont définies
export const supabase = supabaseUrl && supabaseKey
  ? createClient(supabaseUrl, supabaseKey)
  : null;

// Vérifier si Supabase est configuré
export function isSupabaseConfigured() {
  return supabase !== null;
}

// Récupérer le leaderboard (Top 20)
export async function getLeaderboard() {
  if (!supabase) {
    console.warn('Supabase non configuré');
    return { data: [], error: null };
  }

  const { data, error } = await supabase
    .from('scores')
    .select('*')
    .order('total_score', { ascending: false })
    .order('total_time', { ascending: true })
    .limit(20);

  return { data, error };
}

// Sauvegarder un score
export async function saveScore(scoreData) {
  if (!supabase) {
    console.warn('Supabase non configuré - score non sauvegardé');
    return { data: null, error: new Error('Supabase non configuré') };
  }

  const { data, error } = await supabase
    .from('scores')
    .insert([{
      username: scoreData.username,
      total_score: scoreData.totalScore,
      levels_completed: scoreData.levelsCompleted,
      total_time: scoreData.totalTime,
      easter_eggs_found: scoreData.easterEggsFound,
      total_attempts: scoreData.totalAttempts || 0
    }]);

  return { data, error };
}

// Obtenir le rang d'un score
export async function getScoreRank(score) {
  if (!supabase) {
    return { rank: null, error: new Error('Supabase non configuré') };
  }

  const { count, error } = await supabase
    .from('scores')
    .select('*', { count: 'exact', head: true })
    .gt('total_score', score);

  if (error) return { rank: null, error };

  return { rank: (count || 0) + 1, error: null };
}
