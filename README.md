# my-molu
- 언젠가 완성할 나만의 몰루 사이트
- 자바스크립트와 리액트 공부를 병행하면서 발전시킬 개인 프로젝트
- 언제가 될진 모르겠지만 이후 자체 백엔드 서버 추가까지가 목표
- 현재 진행 상황
  - 순수 자바스크립트와 HTML 이용
  - 버튼을 누르면 외부 API 에서 학생 이름과 이미지주소를 받아와서 렌더링
  - 현재 외부 API 의 페이징 설정으로 20명의 학생의 정보만 받아서 렌더링
- 2023.11.04 추가 사항
  - 내 페이지에서 외부 API 주소로 요청 보낼 페이지 숫자를 입력 후<br/>
  버튼을 누르면 입력한 페이지의 학생을 보여주도록 변경
  - 페이지당 10명의 학생 정보만 렌더링
  - 구현만 생각해서 대충 넘어갔던 에러처리
    - 입력값 없이 버튼을 누르면 기본값으로 1페이지 렌더링
    - 숫자 이외의 값 입력 시 기본 1페이지 렌더링
    - 숫자 입력 시 1 ~ 12 의 범위를 넘어선 페이지 입력 시 alert 창 띄움
    - 입력한 페이지에서 학생 수가 10명이 안되면 있는 만큼만 렌더링
    - catch 메서드로 에러처리하여 에러 발생 시 alert 창 띄움
- 2023.11.06 추가 사항 
  - 학교 전체 or 학교별로 필터링 기능 추가
    - 드롭다운 메뉴로 학교 선택 가능
    - 현재 전체, 트리니티, 밀레니엄, 게헨나, 아비도스 학생 필터 기능만 추가한 상태
- 다음 목표
  - 스프링을 이용한 간단한 자체 백엔드 서버로 외부 API 없이도 현재 구현된 기능까지 동작
  - 픽시브 크롤링하는 백엔드 서버와 연동하여 픽시브 짤 렌더링
