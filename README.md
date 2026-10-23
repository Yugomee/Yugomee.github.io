# Personal Homepage (GitHub Pages)

순수 HTML/CSS/JS 한 장짜리 연구자 홈페이지. 빌드 과정 없음.

## 파일 구조

| 파일 | 역할 |
|---|---|
| `index.html` | 메인 페이지. `[대괄호]` 플레이스홀더를 채우면 됨 |
| `publications.js` | **논문 목록 데이터.** 논문 추가 = 객체 하나 추가 |
| `style.css` | 디자인. 포인트 컬러는 `--accent` 변수 하나만 바꾸면 전체 적용 |
| `lab.html` | 🥚 이스터에그 페이지 (푸터의 🐾 클릭) |
| `main.js` | 연도 갱신 + 콘솔 이스터에그 |
| `assets/` | 사진 넣는 곳 (아래 참고) |

## 채워야 할 것

1. **`index.html`**: 이름/소속/소개/뉴스, 그리고 Scholar·GitHub·LinkedIn URL (`YOUR_ID`, `YOUR_GITHUB`, `YOUR_LINKEDIN` 검색해서 교체)
2. **`publications.js`**: 예시 2개를 지우고 실제 논문으로 교체. `ME` 상수에 영문 이름 (저자 볼드 처리용)
3. **`assets/` 사진 3장**:
   - `profile.jpg` — 프로필 사진 (정사각형 권장)
   - `cat.jpg` — 첫째 고양이 🐱
   - `cat2.jpg` — 둘째 고양이 🐈
   - `baby.jpg` — 아기 👶
   - 사진이 없어도 페이지는 깨지지 않음 (이모지 placeholder로 대체됨)

## 배포 (GitHub Pages)

```bash
# 1. GitHub에서 "<유저명>.github.io" 라는 이름의 public 레포 생성 후:
cd homepage
git init
git add -A
git commit -m "Initial homepage"
git remote add origin git@github.com:<유저명>/<유저명>.github.io.git
git push -u origin main
```

푸시하면 몇 분 안에 `https://<유저명>.github.io` 에서 접속 가능.
(레포 Settings → Pages 에서 Source가 `main` 브랜치인지 확인)

## 로컬 미리보기

```bash
python3 -m http.server 8000 --directory homepage
```

→ http://localhost:8000

## 이스터에그

- 푸터 오른쪽 구석의 흐릿한 🐾 (hover 시 진해짐) → `lab.html`
- 개발자도구 콘솔에 ASCII 고양이
