# fe-no1-assignment

# 🎬 영화 검색 사이트 (TMDB API 기반)

TMDB(The Movie Database) API를 활용한 영화 검색 및 정보 조회 웹 애플리케이션입니다.  
인기 영화 목록을 불러오고, 원하는 영화 제목으로 검색하며, 각 영화의 상세 정보를 모달로 확인할 수 있습니다.

---

## ✅ 주요 기능

| 기능                  | 설명 |
|---------------------|------|
| 🔥 인기 영화 조회         | 사이트 로드시 TMDB 인기 영화 리스트를 자동 로딩합니다 |
| 🔍 영화 제목 검색        | 검색창에 영화 제목 입력 → 실시간 검색 결과 렌더링 |
| 🖼️ 영화 카드 UI         | 포스터, 제목, 간략 줄거리 포함 카드 형식으로 렌더링 |
| 📄 상세 정보 모달 창     | 카드 클릭 시 모달로 개봉일, 평점, 전체 줄거리 등 출력 |
| ❌ 모달 닫기 기능        | 모달 외부 클릭 또는 닫기 버튼으로 모달 종료 |

---

## 🛠️ 사용 기술

- HTML5 / CSS3
- Vanilla JavaScript (ES6 Module)
- TMDB API (`https://api.themoviedb.org`)
- Live Server (로컬 테스트용)

---

## 📁 프로젝트 구조
📦 project-root
├── index.html
├── index.css
├── key.js # TMDB API 키를 export하는 모듈 (별도 관리)
├── /js
│   ├── main.js # 앱 초기화 및 진입점
│   ├── api.js # TMDB API 호출 함수 정의
│   ├── render.js # 카드 및 모달 렌더링 함수
│   └── events.js # 이벤트 리스너 정의

<img width="1061" alt="스크린샷 2025-05-05 오전 12 45 06" src="https://github.com/user-attachments/assets/ba23acc6-331b-4857-8dbc-719cd736c436" />
<img width="1061" alt="스크린샷 2025-05-05 오전 12 45 17" src="https://github.com/user-attachments/assets/779b3192-3460-4d27-825f-9799e841b000" />


