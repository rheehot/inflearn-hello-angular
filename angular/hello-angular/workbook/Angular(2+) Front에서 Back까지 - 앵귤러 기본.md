# Angular(2+) Front에서 Back까지 - 앵귤러 기본

<br/>

## 기본 용어

- Directives : 확장된 HTML로 custom 속성과 elements 태그 속성도 직접 정의할 수 있습니다.

- Expresions : 변수와 함수를 HTML 파일에서 출력해야할 때 사용합니다.

  ```html
  <p>hello {{name}}!</p>
  ```

- Module : Directives, Controller 이것들을 하나로 모아놓은 Container를 Module 이라고 합니다. (의존성 주입 가능)

- Controller : 비즈니스 로직을 구현하는데만 사용합니다. View에 비즈니스 로직을 다룰때만 사용해야함
  - 주의할 점
    - DOM을 조작하면 안됨
    - input, output을 조작하면 안됨

- Service : Controller와 다르게 재사용가능한 비즈니스 로직 (싱글톤으로 구현돼있다.) 어플리케이션의 데이터를 관리할 때 사용하면 좋다.

<br/>

## 개발 환경 구성

1. node 설치

2. Angular-cli 설치

   ```bash
   npm install -g @angular/cli
   ```

3. 설치 확인

   ```bash
   ng version
   ```

4. 프로젝트 생성

   ```bash
   ng new {프로젝트명}
   ```

<br/>

## 프로젝트 구조

- index.html : 사용자가 받는 파일 

- main.ts : 가장 먼저 실행되는 javascript 파일

- src/app/* : 가장 신경 써야하는 부분

- (app.module.ts) AppModule class를 module로 만들어주겠다라는 뜻!

  ```typescript
  @NgModule({
    declarations: [
      AppComponent
    ],
    imports: [ // 다른 모듈들이 들어옴
      BrowserModule,
      AppRoutingModule
    ],
    providers: [], // view가 아닌 service 로직
    bootstrap: [AppComponent] // 처음 실행할 컴포넌트 지정
  })
  export class AppModule { }
  ```

- app.componet.ts

  ```typescript
  @Component({ // 하나의 레고 조각
    selector: 'app-root', // 태그 네임
    templateUrl: './app.component.html', // 어떤 html 파일을 가지고 있는지
    styleUrls: ['./app.component.scss'] // css 값들이 들어감
  })
  export class AppComponent {
    title = 'front-end';
  }
  ```

- 파일 불리는 순서
  
  1. index.html - > main.ts -> app.module.ts -> app.component.ts

<br/>

## 실행하기

1. 에러 발생할 수 있음 (Cannot find angular/module)

   ```bash
   npm -i @angular-devkit/build-angular
   ```

2. 실행

   ```bash
   ng serve
   ```

<br/>

## Component 만들기

1. hello.component.ts

   ```
   import { Component } from '@angular/core';
   
   @Component({
       selector : 'hello',
       template : './hello.component.html',
       styleUrls : ['./hello.component.css']
   
   })
   export class HelloComponet {
       
   
   }
   ```

2. hello.component.html

   ```
   <div>
       안녕하세요!
   </div>
   ```

3. hello.component.css

   

   





