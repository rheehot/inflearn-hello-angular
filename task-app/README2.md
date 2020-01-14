

1. 모듈 만들기 (page) -> 라우츠 밑에 생김

ng g ng-alain:module task



2. 모듈 안에 들어가는 리스트 만들기 (컴포넌트) -> 해당 모듈 밑에 생김

ng g ng-alain:list task-list -m=task



3. -> routes-routing.module.ts / LayoutDefaultComponent 에 명시!!

{ path: 'task', loadChildren: './task/task.module#TaskModule' }



4. task로 와도 task-list로 갈 수 있도록! 리다이렉트 시, 리스트로 갈 수 있도록!

{ path: '', redirectTo: 'task-list', pathMatch: 'full' },



5. App 하위에 model 선언



6. Ng 조로에서 리스트 사용법 확인하고 적용

6. 리스트에서 model 가져다가 뿌리기 (api) 
   - 이때, net에서 url 바꿔줘야함
7. 백엔드 켜고 테스트!





## package.json -> show nom script







- Start-up 바꿔주기 (메뉴 추가)
- url 추가





할 것! \

디렉토리 정리

CSR SSR

이 파일 다시 정리



어싱크와 서브스크라이브 차이