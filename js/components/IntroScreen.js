/* ==========================================================================
   Personality Test - Intro Screen Component
   ========================================================================== */

export function renderIntroScreen({ onStart }) {
  const container = document.createElement('div');
  container.className = 'intro-container animate-slide-up';

  container.innerHTML = `
    <div class="intro-content">
      <div class="intro-badge">
        ✨ 2026 대학생 창업 캠프 공식 진단
      </div>

      <h1 class="intro-title">
        나의 창업 DNA는?<br>
        <span style="color: var(--color-primary);">창업 성향 테스트</span>
      </h1>

      <p class="intro-subtitle">
        3분 만에 알아보는 나만의 창업 강점과<br>
        환상의 팀원 조합 & 팀 빌딩 팁!
      </p>

      <div class="intro-hero-box">
        <div class="intro-hero-icon">🚀</div>
        <div class="intro-hero-tags">
          <span class="badge badge-visionary">💡 아이디어형</span>
          <span class="badge badge-maker">🛠️ 제작형</span>
          <span class="badge badge-strategist">📈 전략형</span>
          <span class="badge badge-connector">🤝 협업형</span>
          <span class="badge badge-analyst">📊 분석형</span>
          <span class="badge badge-action">🎯 실행형</span>
        </div>
      </div>
    </div>

    <div class="intro-footer">
      <button id="btn-start-test" class="btn btn-primary animate-pop">
        <span>🚀</span> 내 창업 성향 확인하기
      </button>

      <p class="intro-counter">
        현재까지 <span>1,420명</span>의 창업 캠프 참가자가 완료했어요!
      </p>
    </div>
  `;

  setTimeout(() => {
    const startBtn = container.querySelector('#btn-start-test');
    if (startBtn) {
      startBtn.addEventListener('click', onStart);
    }
  }, 0);

  return container;
}
