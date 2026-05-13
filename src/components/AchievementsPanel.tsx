import { useAchievements } from '../hooks/useAchievements';
import { useI18n } from '../hooks/useI18n';

export function AchievementsPanel() {
  const achievements = useAchievements();
  const { t } = useI18n();
  const unlocked = achievements.filter(a => a.unlocked);
  const locked = achievements.filter(a => !a.unlocked);

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-5 text-white flex items-center gap-4">
        <span className="text-5xl">🏆</span>
        <div>
          <div className="text-3xl font-black">{unlocked.length} / {achievements.length}</div>
          <div className="text-amber-100 text-sm">{t.achievementsTitle}</div>
        </div>
        {/* Progress bar */}
        <div className="flex-1 ml-2">
          <div className="h-3 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-white rounded-full transition-all duration-500"
              style={{ width: `${achievements.length > 0 ? unlocked.length / achievements.length * 100 : 0}%` }}
            />
          </div>
          <div className="text-xs text-amber-200 mt-1 text-right">
            {Math.round(achievements.length > 0 ? unlocked.length / achievements.length * 100 : 0)}%
          </div>
        </div>
      </div>

      {/* Unlocked */}
      {unlocked.length > 0 && (
        <div>
          <h3 className="text-sm font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-3">
            ✅ {t.achievementsUnlocked} ({unlocked.length})
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {unlocked.map(a => (
              <div key={a.id} className="bg-white dark:bg-slate-800 border-2 border-amber-300 dark:border-amber-600 rounded-2xl p-4 flex items-center gap-3 shadow-sm">
                <span className="text-4xl flex-shrink-0">{a.emoji}</span>
                <div>
                  <div className="font-bold text-slate-800 dark:text-slate-100 text-sm">{a.title}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">{a.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Locked */}
      {locked.length > 0 && (
        <div>
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">
            🔒 {t.achievementsLocked} ({locked.length})
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {locked.map(a => (
              <div key={a.id} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 opacity-60">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl grayscale">{a.emoji}</span>
                  <div>
                    <div className="font-semibold text-slate-600 dark:text-slate-400 text-sm">{a.title}</div>
                    <div className="text-xs text-slate-400">{a.desc}</div>
                  </div>
                </div>
                {a.progress !== undefined && (
                  <div>
                    <div className="h-1.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-amber-400 rounded-full transition-all duration-500"
                        style={{ width: `${a.progress}%` }}
                      />
                    </div>
                    <div className="text-xs text-slate-400 mt-1">{a.progressText}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {achievements.length === 0 && (
        <p className="text-center text-slate-400 py-10">Oceń pierwsze piwo żeby zdobyć odznakę!</p>
      )}
    </div>
  );
}
