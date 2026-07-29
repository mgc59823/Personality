# 🎨 [Design System Guide] 대학생 창업 성향 테스트 UI/UX 디자인 가이드

> **작성자**: UI/UX 디자인 & 프론트엔드 개발 전문가  
> **기준 PRD**: [prd.md](file:///Users/Min/projects/Personality/prd.md) (v1.0)  
> **최종 수정일**: 2026년 7월 29일  
> **기술 사양**: Light Mode 전용 / Vanilla CSS & Custom Properties (`:root`) 기반 / Mobile-First Responsive Design  

---

## 1. 디자인 컨셉 & 원칙 (Design Concept & Principles)

### 1.1 디자인 핵심 컨셉: **Pop & Vibrant University Spirit**
2.0대 대학생 참가자들에게 **"재미있고, 경쾌하며, 기대감을 주는 경험"**을 전달하기 위해, 생동감 있는 비비드 컬러와 통통 튀는 인터랙션 요소, 시각적 카드 UI 구조를 결합합니다.

### 1.2 핵심 UX/UI 디자인 원칙
1. **Visual Clarity (명확성)**: 복잡한 텍스트보다 직관적인 카드형 컴포넌트 및 키워드 배지 중심 시각화.
2. **Interactive Delight (경쾌한 인터랙션)**: 버튼 클릭, 문항 선택, 결과 로딩 시 퐁퐁 튀는 마이크로 애니메이션으로 몰입도 극대화.
3. **Mobile-First Seamlessness (모바일 최적화)**: 모바일 단말기(카카오톡 링크 접속 등)에서 한 손으로 편하게 터치할 수 있도록 최소 48px 이상의 터치 영역(Touch Target) 제공.

---

## 2. 디자인 토큰 & 컬러 시스템 (Color System)

모든 컬러 및 디자인 토큰은 CSS 변수(`:root`)로 관리하여 개발 효율성과 유지보수성을 극대화합니다.

### 2.1 메인 컬러 팔레트 (Brand Palette)

| 구분 | Color Name | Hex Code | Usage & Application |
| :--- | :--- | :--- | :--- |
| **Primary** | Electric Indigo | `#4F46E5` | 메인 브랜드 컬러, CTA 버튼, 선택된 카드의 테두리 |
| **Primary Hover** | Deep Indigo | `#4338CA` | 버튼 Hover / Active 상태 |
| **Primary Soft** | Indigo Tint | `#EEF2FF` | 선택된 카드 배경, 인포 박스 배경 |
| **Secondary** | Pop Lime | `#84CC16` | 강점 배지, 강조 텍스트, 성공 상징 요소 |
| **Accent Yellow**| Sunny Yellow | `#FACC15` | 환상의 콤비 강조, 별점 및 칭찬 효과 |
| **Accent Coral** | Neon Coral | `#FF5757` | 상극 콤비 주의 표시, 강조 포인트 |

---

### 2.2 성향 유형별 테마 컬러 (Personality Theme Colors)

6가지 성향 카드가 각기 다른 개성을 나타낼 수 있도록 전용 테마 컬러를 부여합니다.

| 성향 유형 | Theme Name | Primary Hex | Soft Bg Hex | Badge Border |
| :--- | :--- | :--- | :--- | :--- |
| 💡 **아이디어형** | Cyber Purple | `#8B5CF6` | `#F5F3FF` | `#DDD6FE` |
| 🛠️ **제작형** | Tech Cyan | `#06B6D4` | `#ECFEFF` | `#A5F3FC` |
| 📈 **전략형** | Strategic Blue | `#2563EB` | `#EFF6FF` | `#BFDBFE` |
| 🤝 **협업형** | Warm Pink | `#EC4899` | `#FDF2F8` | `#FBCFE8` |
| 📊 **분석형** | Data Emerald | `#059669` | `#ECFDF5` | `#A7F3D0` |
| 🎯 **실행형** | Action Orange | `#F97316` | `#FFF7ED` | `#FED7AA` |

---

### 2.3 무채색 및 배경 팔레트 (Neutrals & Backgrounds)

| Color Name | Hex Code | Usage |
| :--- | :--- | :--- |
| `Background Base` | `#F8FAFC` | 웹 사이트 전체 배경 (Soft Off-White) |
| `Card Surface` | `#FFFFFF` | 문항/결과 컨테이너 카드 배경 |
| `Border Default` | `#E2E8F0` | 카드 기본 테두리, 구분선 |
| `Text Main` | `#0F172A` | 메인 헤드라인, 주요 텍스트 |
| `Text Sub` | `#475569` | 본문, 부설명, 문항 질문 텍스트 |
| `Text Muted` | `#94A3B8` | 미선택 선택지, 캡션, 힌트 |

---

## 3. 타이포그래피 (Typography System)

가독성이 뛰어나고 현대적인 **Pretendard** 폰트를 기본으로 사용합니다.

```css
font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif;
```

### 3.1 폰트 스케일 가이드

| Category | Size (px/rem) | Weight | Line Height | Letter Spacing | CSS Usage |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display Title** | `28px (1.75rem)` | Bold (700) | `1.3` | `-0.02em` | 인트로 메인 타이틀 |
| **Heading 1** | `22px (1.375rem)`| Bold (700) | `1.4` | `-0.01em` | 결과 유형 타이틀, Q1~Q12 질문 |
| **Heading 2** | `18px (1.125rem)`| SemiBold (600)| `1.4` | `-0.01em` | 결과 섹션 제목, 팀 빌딩 헤더 |
| **Body Large** | `16px (1.0rem)` | Medium (500) | `1.5` | `0` | 선택지 카드 텍스트 |
| **Body Base** | `14px (0.875rem)`| Regular (400)| `1.6` | `0` | 세부 설명, 성향 보완점 본문 |
| **Caption / Badge**| `12px (0.75rem)`| SemiBold (600)| `1.2` | `0.01em` | 진행률 표시, 성향 태그 배지 |

---

## 4. 레이아웃, 공백 및 그림자 (Layout & Shadows)

### 4.1 뷰포트 레이아웃 (Viewport Layout)
* **모바일 센트릭 프레임**: 데스크톱 화면 접속 시 중앙으로 몰입되는 모바일 카드 형태 레이아웃 유지.
  * `max-width`: `440px`
  * `margin`: `0 auto`
  * `min-height`: `100vh`
  * `padding`: `20px 16px`

```
  +-------------------------------------+
  |             Header & Progress       |
  +-------------------------------------+
  |                                     |
  |             Main Card               |
  |           (Q / Intro / Result)      |
  |                                     |
  +-------------------------------------+
  |             CTA Buttons             |
  +-------------------------------------+
```

### 4.2 그림자 & 모서리 라운딩 (Elevation & Border Radius)

```css
:root {
  /* Radius */
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 20px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-card: 0px 4px 16px rgba(15, 23, 42, 0.06);
  --shadow-pop: 0px 8px 24px rgba(79, 70, 229, 0.15);
  --shadow-button: 0px 4px 12px rgba(79, 70, 229, 0.3);
  --shadow-pressed: inset 0px 2px 4px rgba(0, 0, 0, 0.06);
}
```

---

## 5. UI 컴포넌트 세부 가이드 (Component Specs)

### 5.1 버튼 컴포넌트 (Buttons)

#### ① Primary CTA Button (`.btn-primary`)
* **역할**: "시작하기", "결과 확인하기", "링크 공유하기" 등 메인 행동 유도.
* **디자인 사양**:
  * Background: `var(--color-primary)` (`#4F46E5`)
  * Text Color: `#FFFFFF`
  * Border-Radius: `var(--radius-md)` (`14px`)
  * Height: `54px` (모바일 터치 최적화)
  * Shadow: `var(--shadow-button)`
* **인터랙션**:
  * Hover: Y축 -2px 이동 (`transform: translateY(-2px)`) + 밝기 105%
  * Active (클릭): `transform: scale(0.97)` (통통 튀는 압축 효과)

#### ② Secondary / Option Button (`.btn-secondary`)
* **역할**: "다시하기", "이전 문제로"
* **디자인 사양**:
  * Background: `var(--color-primary-soft)` (`#EEF2FF`)
  * Text Color: `var(--color-primary)` (`#4F46E5`)
  * Border: `1px solid #C7D2FE`

---

### 5.2 선택지 카드 컴포넌트 (Option Card Component)

문항의 4가지 선택지(A/B/C/D)는 클릭 가능한 서페이서 카드로 제공됩니다.

```
+----------------------------------------------------+
|  (A)  "와, 이런 신나는 아이디어는 어때?"             |
+----------------------------------------------------+
```

#### 상태별 디자인 스펙 (States)
* **Default (Idle)**:
  * Background: `#FFFFFF`
  * Border: `1.5px solid var(--color-border)` (`#E2E8F0`)
  * Color: `var(--color-text-main)`
* **Hover**:
  * Border: `1.5px solid var(--color-primary)` (`#4F46E5`)
  * Background: `#F8FAFC`
  * Cursor: `pointer`
* **Selected (선택됨)**:
  * Border: `2px solid var(--color-primary)` (`#4F46E5`)
  * Background: `var(--color-primary-soft)` (`#EEF2FF`)
  * Check Icon Badge: 우측에 나타남 (애니메이션 적용)

---

### 5.3 프로그레스 바 (Progress Bar)

* **구성**: 상단 `[ 진행률 텍스트 (예: 5/12) ]` + `[ 바 백그라운드 ]` + `[ 게이지 fill ]`
* **사양**:
  * Height: `8px`
  * Border-Radius: `var(--radius-full)`
  * Fill Color: `linear-gradient(90deg, #4F46E5 0%, #84CC16 100%)` (인디고에서 팝 라임으로 시원하게 차오르는 그라데이션)
  * Transition: `width 0.4s cubic-bezier(0.4, 0, 0.2, 1)`

---

### 5.4 결과 카드 컴포넌트 (Result Card UI)

1. **유형 배지 (Type Badge)**:
   * 텍스트: `💡 아이디어형 (Visionary Ideator)`
   * Style: 테마 컬러 배경 + 1px 파스텔 테두리 + 파스텔 Text
2. **팀 빌딩 콤비 추천 컴포넌트 (Combination Box)**:
   * **환상의 콤비 Box**: `Sunny Yellow (#FEF9C3)` 배경 + `Sunny Gold (#D97706)` 텍스트
   * **상극 콤비 Box**: `Light Coral (#FEE2E2)` 배경 + `Neon Coral (#DC2626)` 텍스트

---

## 6. 애니메이션 & 마이크로 인터랙션 (Animations)

경쾌하고 생동감 있는 사용성을 위해 아래 핵심 Keyframe 효과를 적용합니다.

### 6.1 통통 튀는 팝 효과 (`@keyframes popBounce`)
* **적용 대상**: CTA 버튼 마우스 호버, 선택지 카드 클릭 시, 결과 화면 전환 시

```css
@keyframes popBounce {
  0% { transform: scale(1); }
  40% { transform: scale(1.04); }
  70% { transform: scale(0.98); }
  100% { transform: scale(1); }
}

.pop-element:active {
  animation: popBounce 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

### 6.2 등장 페이드인 & 슬라이드 업 (`@keyframes slideUpFade`)
* **적용 대상**: 각 문항 진입 시, 결과 텍스트 등장 시

```css
@keyframes slideUpFade {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-up {
  animation: slideUpFade 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
```

### 6.3 펄스 광채 애니메이션 (`@keyframes pulseGlow`)
* **적용 대상**: 로딩 페이지의 분석 중 애니메이션 링

```css
@keyframes pulseGlow {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(79, 70, 229, 0.4);
  }
  50% {
    box-shadow: 0 0 0 16px rgba(79, 70, 229, 0);
  }
}
```

---

## 7. 실효성 프론트엔드 CSS 코드 (`index.css` 스니펫)

개발자가 그대로 적용할 수 있는 글로벌 스타일 가이드입니다.

```css
/* ==========================================================================
   Personality Test - Global Design System CSS Tokens
   ========================================================================== */

:root {
  /* Brand Colors */
  --color-primary: #4F46E5;
  --color-primary-hover: #4338CA;
  --color-primary-soft: #EEF2FF;
  
  --color-secondary: #84CC16;
  --color-accent-yellow: #FACC15;
  --color-accent-coral: #FF5757;

  /* Neutral Colors */
  --color-bg-base: #F8FAFC;
  --color-surface: #FFFFFF;
  --color-border: #E2E8F0;
  
  --color-text-main: #0F172A;
  --color-text-sub: #475569;
  --color-text-muted: #94A3B8;

  /* Radii & Shadows */
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 20px;
  --radius-full: 9999px;

  --shadow-card: 0px 4px 16px rgba(15, 23, 42, 0.06);
  --shadow-button: 0px 4px 12px rgba(79, 70, 229, 0.25);
  
  /* Font Family */
  --font-main: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
}

/* Base Body Styles */
body {
  margin: 0;
  padding: 0;
  background-color: var(--color-bg-base);
  color: var(--color-text-main);
  font-family: var(--font-main);
  -webkit-font-smoothing: antialiased;
}

/* Mobile Centric Container */
.app-container {
  max-width: 440px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 20px 16px;
  box-sizing: border-box;
  background-color: var(--color-bg-base);
  display: flex;
  flex-direction: column;
}

/* Card Base */
.ui-card {
  background-color: var(--color-surface);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-card);
  padding: 24px 20px;
  box-sizing: border-box;
}

/* Primary Button */
.btn-primary {
  width: 100%;
  height: 54px;
  background-color: var(--color-primary);
  color: #ffffff;
  font-size: 1.0rem;
  font-weight: 700;
  border: none;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-button);
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.btn-primary:hover {
  background-color: var(--color-primary-hover);
  transform: translateY(-2px);
}

.btn-primary:active {
  transform: scale(0.98);
}
```

---

## 9. 디자인 화면 시각화 (UI Screen Mockups)

`design.md` 가이드를 바탕으로 디자인한 메인 인트로, 질문 진행, 결과 상세 화면의 실제 UI 목업입니다.

````carousel
![메인 인트로 화면 목업](/Users/Min/.gemini/antigravity-ide/brain/31d29aa5-2174-4eee-b32b-13a77612f193/main_screen_ui_1785307722462.png)
<!-- slide -->
![질문 진행 화면 목업](/Users/Min/.gemini/antigravity-ide/brain/31d29aa5-2174-4eee-b32b-13a77612f193/question_screen_ui_1785307734330.png)
<!-- slide -->
![결과 상세 화면 목업](/Users/Min/.gemini/antigravity-ide/brain/31d29aa5-2174-4eee-b32b-13a77612f193/result_screen_ui_1785307747008.png)
````

---

## 10. 디자인 품질 체크리스트 (QA Checklist)

* [ ] 모바일(375px 너비)부터 데스크톱 해상도까지 수평 스크롤 없이 깨끗하게 출력되는가?
* [ ] 모든 버튼 및 선택지 카드의 클릭/터치 높이가 최소 48px 이상인가?
* [ ] 문항을 변경하거나 선택할 때 0.3초 이내의 부드러운 애니메이션이 구동되는가?
* [ ] 성향별 테마 컬러 및 환상의/상극 콤비 배지가 시각적으로 명확히 대비되는가?

