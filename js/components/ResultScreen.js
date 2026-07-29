/* ==========================================================================
   Personality Test - Result Screen Component
   ========================================================================== */

export function renderResultScreen({ resultData, onRestart, onShare }) {
  const container = document.createElement('div');
  container.className = 'result-container animate-slide-up';

  const tagsHtml = resultData.tags.map(t => `<span class="badge badge-tag">${t}</span>`).join('');
  const strengthsHtml = resultData.strengths.map(s => `
    <div class="analysis-item">
      <span class="analysis-bullet">✓</span>
      <span>${s}</span>
    </div>
  `).join('');

  const improvementsHtml = resultData.improvements.map(i => `
    <div class="analysis-item">
      <span class="analysis-bullet" style="color: var(--color-accent-coral);">!</span>
      <span>${i}</span>
    </div>
  `).join('');

  container.innerHTML = `
    <!-- Result Header Card -->
    <div class="result-header-card ui-card" style="background-color: ${resultData.themeBg}; border-color: ${resultData.themePrimary};">
      <div class="result-subtitle">당신의 창업 DNA 결과</div>
      
      <span class="badge ${resultData.themeClass}">
        ${resultData.title}
      </span>

      <div class="result-character-box" style="background-color: var(--color-surface);">
        ${resultData.icon}
      </div>

      <div class="result-one-liner">
        "${resultData.oneLiner}"
      </div>

      <div class="result-tags">
        ${tagsHtml}
      </div>
    </div>

    <!-- Detailed Analysis Card -->
    <div class="ui-card">
      <div class="section-title">
        <span>💪</span> 내 핵심 창업 강점
      </div>
      <div class="analysis-list">
        ${strengthsHtml}
      </div>

      <div class="section-title" style="margin-top: 20px;">
        <span>🎯</span> 신경 쓰면 좋은 보완 포인트
      </div>
      <div class="analysis-list">
        ${improvementsHtml}
      </div>
    </div>

    <!-- ⭐ Team Building Combination Grid -->
    <div class="combi-grid">
      <div class="combi-card best">
        <div class="combi-header">
          <span>✨</span> 환상의 콤비
        </div>
        <div class="combi-target">${resultData.bestCombo.title}</div>
        <div class="combi-desc">${resultData.bestCombo.desc}</div>
      </div>

      <div class="combi-card worst">
        <div class="combi-header">
          <span>⚡</span> 상극/보완 콤비
        </div>
        <div class="combi-target">${resultData.worstCombo.title}</div>
        <div class="combi-desc">${resultData.worstCombo.desc}</div>
      </div>
    </div>

    <!-- Team Building Tips Box -->
    <div class="tip-box">
      <strong style="display: block; margin-bottom: 4px;">🤝 캠프 현장 팀원 찾기 팁</strong>
      ${resultData.teamTip}
    </div>

    <!-- Action Buttons -->
    <div class="result-footer-actions">
      <button id="btn-share-result" class="btn btn-primary animate-pop">
        <span>🔗</span> 결과 링크 복사하기
      </button>

      <button id="btn-restart-test" class="btn btn-secondary">
        <span>🔄</span> 테스트 다시하기
      </button>
    </div>
  `;

  setTimeout(() => {
    const shareBtn = container.querySelector('#btn-share-result');
    if (shareBtn) {
      shareBtn.addEventListener('click', onShare);
    }

    const restartBtn = container.querySelector('#btn-restart-test');
    if (restartBtn) {
      restartBtn.addEventListener('click', onRestart);
    }
  }, 0);

  return container;
}
