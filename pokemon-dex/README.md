# 포켓몬 도감

## 프로젝트 개요

- React와 Redux를 활용한 포켓몬 도감 웹 애플리케이션입니다.
- <b>배포</b>: [Pokemon Dex](https://sohxxny-pokemon-dex.vercel.app/)

<br>

## 주요 페이지 및 기능

- <b>홈 페이지</b>
  - 도감 페이지로 이동
- <b>도감 페이지</b>
  - 포켓몬 목록 표시
  - 대시보드에 포켓몬 선택 및 삭제 가능
- <b>상세 페이지</b>
  - 포켓몬 상세 정보 표시

<br>

## 기술 스택

### 메인 개발 환경

<img src="https://img.shields.io/static/v1?label=React&message=18.3&color=61DAFB"> <img src="https://img.shields.io/static/v1?label=JavaScript&message=ES6&color=F7DF1E"> <img src="https://img.shields.io/static/v1?label=vite&message=6.0&color=646CFF">

### 상태 관리

- <b>Redux Toolkit (RTK)</b> - 전역 상태 관리
- <b>Redux Persist</b> - Redux 환경에서 로컬 스토리지 사용

### 라우팅

- <b>React Router Dom</b> - 클라이언트 사이드 라우팅 구현

### 스타일링

- <b>Styled Components</b> - CSS-in-JS 컴포넌트 스타일링
- <b>React Icons</b> - 아이콘 사용
- <b>React Toastify</b> - 토스트 메시지 알림

### 배포

- <b>Vercel</b>

<br>

## 프로젝트 폴더 구조

```
src/
 ├─ assets/
 │  └─ types/
 ├─ components/
 ├─ data/
 ├─ hooks/
 ├─ pages/
 ├─ redux/
 │  ├─ config/
 │  └─ slices/
 ├─ shared/
 └─ styles/
    └─ components/
```

<br>

## 화면 구성

<p align = "center">
<img width="500" alt="home page" src="https://github.com/user-attachments/assets/b01a00fe-e6f3-4be7-9d64-2aed09ed237d" /> 
<img width="500" alt="dex page" src="https://github.com/user-attachments/assets/2b3056f2-fddb-46dd-9ba4-5a1f4cfd3dad" /><br><br>
<img width="500" alt="detail page" src="https://github.com/user-attachments/assets/6ab9d94e-cae5-478c-971e-67f5dd88006f" /> 
<img width="500" alt="404 page" src="https://github.com/user-attachments/assets/c911ea91-0e28-49f3-ae38-3632cdc2712c" />
</p>
