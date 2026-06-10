import { useState, useCallback } from 'react';

export interface Result {
  homeScore: number;
  awayScore: number;
}

type Results = Record<string, Result>;

const STORAGE_KEY = 'mundial2026_results';

function load(): Results {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  } catch {
    return {};
  }
}

export function useResults() {
  const [results, setResults] = useState<Results>(load);

  const setResult = useCallback((matchId: string, result: Result) => {
    setResults((prev) => {
      const next = { ...prev, [matchId]: result };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const clearResult = useCallback((matchId: string) => {
    setResults((prev) => {
      const next = { ...prev };
      delete next[matchId];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  return { results, setResult, clearResult };
}
