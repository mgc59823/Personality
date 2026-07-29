/* ==========================================================================
   Personality Test - Loading Screen Component
   ========================================================================== */

const LOADING_MESSAGES = [
  "당신의 창업 DNA를 심도 있게 분석 중입니다...",
  "해커톤 상황에서의 선택 답변을 계산하고 있어요...",
  "창업 캠프 멘토님의 피드백 반응을 분석 중입니다...",
  "나에게 딱 맞는 환상의 콤비 성향을 매칭하는 중..."
];

export function renderLoadingScreen({ onComplete }) {
  const container = document.createElement('div');
  container.className = 'loading-container animate-slide-up';

  container.innerHTML = `
    <div class="loading-spinner-box">
      <div class="loading-spinner-ring"></div>
      <div class="loading-icon">🚀</div>
    </div>

    <div>
      <h2 class="loading-title">창업 성향 분석 중</h2>
      <p id="loading-subtitle" class="loading-subtitle">${LOADING_MESSAGES[0]}</p>
    </div>
  `;

  let msgIndex = 0;
  const interval = setInterval(() => {
    msgIndex = (msgIndex + 1) % LOADING_MESSAGES.length;
    const sub = container.querySelector('#loading-subtitle');
    if (sub) {
      sub.style.opacity = '0';
      setTimeout(() => {
        sub.textContent = LOADING_MESSAGES[msgIndex];
        sub.style.opacity = '1';
      }, 150);
    }
  }, 750);

  setTimeout(() => {
    clearInterval(interval);
    onComplete();
  }, 2600);

  return container;
}
