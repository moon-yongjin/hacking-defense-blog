# 🔒 Base is under attack - 보안 블로그 포트폴리오

현대 사회에서 점점 더 심각해지는 해킹 위협에 대응하는 방법을 다루는 보안 블로그입니다.

## 📋 프로젝트 소개

이 프로젝트는 디지털 보안의 중요성을 알리고, 일반 사용자들이 일상에서 실천할 수 있는 보안 팁을 제공하는 블로그 포트폴리오입니다.

### 주요 기능
- 반응형 웹 디자인
- 부드러운 스크롤 네비게이션
- 인터랙티브 애니메이션 효과
- 문의 폼 기능
- 모던한 UI/UX

### 기술 스택
- HTML5
- CSS3 (Grid, Flexbox, 애니메이션)
- JavaScript (ES6+)
- Google Fonts (Noto Sans KR)

## 🚀 배포 방법

### GitHub Pages를 통한 배포

1. GitHub에 새 저장소 생성
2. 이 파일들을 저장소에 업로드
3. Settings > Pages에서 Source를 "Deploy from a branch"로 설정
4. Branch를 "main"으로 선택
5. Save 클릭

### 로컬에서 실행

```bash
# 웹 서버 실행 (Python 3)
python -m http.server 8000

# 또는 Node.js live-server 사용
npx live-server
```

## 📁 파일 구조

```
├── index.html          # 메인 페이지
├── styles.css          # 스타일시트
├── script.js           # 자바스크립트 기능
└── README.md           # 프로젝트 설명서
```

## 🎨 디자인 특징

- **색상**: 보라색 그라데이션 (#667eea → #764ba2)
- **폰트**: Noto Sans KR (한글 최적화)
- **레이아웃**: CSS Grid와 Flexbox 활용
- **애니메이션**: CSS transitions와 JavaScript 인터랙션

## 📱 반응형 지원

- 데스크톱 (1200px+)
- 태블릿 (768px - 1199px)
- 모바일 (480px - 767px)
- 소형 모바일 (480px 미만)

## 🔧 커스터마이징

### 색상 변경
`styles.css`에서 다음 변수들을 수정하세요:

```css
/* 메인 그라데이션 */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* 액센트 색상 */
color: #ffd700;
```

### 콘텐츠 수정
`index.html`에서 블로그 포스트, 연락처 정보, 소개 내용을 수정하세요.

## 📞 연락처

- 이메일: security.blog@example.com
- 전화: 010-1234-5678

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

---

© 2024 Base is under attack. 모든 권리 보유. 