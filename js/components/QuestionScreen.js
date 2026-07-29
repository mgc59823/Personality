/* ==========================================================================
   Personality Test - Question Screen Component
   ========================================================================== */

export function renderQuestionScreen({ question, selectedOption, onSelect, onPrev, isFirst }) {
  const container = document.createElement('div');
  container.className = 'question-container animate-slide-up';

  const optionsHtml = question.options.map((opt) => {
    const isSelected = selectedOption && selectedOption.label === opt.label;
    return `
      <div class="option-card ${isSelected ? 'selected' : ''}" data-label="${opt.label}" data-type="${opt.type}">
        <div class="option-label">${opt.label}</div>
        <div class="option-text">${opt.text}</div>
        ${isSelected ? '<div class="option-checkmark">✓</div>' : ''}
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <div class="question-card-wrapper">
      <div class="question-badge">Q${question.id}. 상황 몰입 질문</div>
      <h2 class="question-title">${question.title}</h2>
      
      <div class="option-list">
        ${optionsHtml}
      </div>
    </div>

    <div class="question-actions">
      ${!isFirst ? `
        <button id="btn-prev-question" class="btn btn-outline btn-prev">
          ← 이전
        </button>
      ` : ''}
    </div>
  `;

  setTimeout(() => {
    // Option Click Handlers
    const optionCards = container.querySelectorAll('.option-card');
    optionCards.forEach(card => {
      card.addEventListener('click', () => {
        const label = card.getAttribute('data-label');
        const type = card.getAttribute('data-type');
        const chosen = question.options.find(o => o.label === label);
        if (chosen) {
          onSelect(chosen);
        }
      });
    });

    // Prev Button Handler
    const prevBtn = container.querySelector('#btn-prev-question');
    if (prevBtn) {
      prevBtn.addEventListener('click', onPrev);
    }
  }, 0);

  return container;
}
