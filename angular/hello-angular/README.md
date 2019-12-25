# Angular(2+) Front에서 Back까지 - 앵귤러 기본

https://github.com/cicada0014/angular-lecture

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

<br/>

## Angular를 이해하기 위한 타입스크립트 지식

1. typescript 시작

   ```bash
   tcs -init
   ```

2. typescript에서 타입 지정

   ```typescript
   let num : number = 10;
   
   num.push(); // Error! -> 'number'로 지정했기 때문에!
   
   function testing() : string {
       return 10; // Error! -> 반환이 'string'이기 때문에!
   }
   ```

3. typescript class 가 javascript에서 

   ```typescript
   class AppComponent { 
   
   }	
   ```

4. javascript (ES 6)

   ```javascript
   var AppComponent = (function(){
   	function AppComponent(){
   	
   	}
   	return AppComponent;
   }());
   ```

   - ㅇ브라우저가 ES 6를 읽지 못한다해도 Typescript에서 tsconfig.json에서 버전만 바꿔주면 알아서 맞춰서 컴파일 해준다.


<br/>

기본적으로 ES6 보다 typesript의 class가 더 많은 기능을 갖고 있습니다.



5. 상속 기능

```javascript
class Parent {
    
}

class App extends Parent{
	
}
```

6. 인터페이스

```javascript
interface Person {
	name: string
	age: number
}

let kim: Person
```

7. 접근제한자 (ES6 에는 없다.)

```javascript
class Parent { 
	public one = 10;
	protected two = 10;
	private three = 10;
}

class Child extends Parent {
    constructor() {
        super();
        this.one
        this.two
    }
}

let p = new Parent();
p.one // one만 접근 가능!
```

8. 생성자

```javascript
class Car {
    //-- typescript만 가능
	constructor(public age: number) {
	}
    
    //-- 위와 같은 표현
    age
    constructor(age:number){
       this.age = age; 
    }
}

let car = new Car(10);
```

public을 붙이면 자동으로 Car의 멤버변수로 된다.

---

component 만드는 command

```bash
ng generate component {컴포넌트명}
ng g c {컴포넌트명}
```

다른 scss 파일 적용하기

```typescript
// {컴포넌트명}.component.ts

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'] // 원하는 scss 파일 추가시, style 적용 가능
})
```



#### 데이터 바인딩

time-display.component.ts

```typescript
export class TimeDisplayComponent implements OnInit {

  test = 1;

  constructor() { 
    setInterval(()=>{ // 1초마다 test 값 증가
      this.test++;
      }, 1000
    )
  }
  
  ngOnInit() { // 생명주기와 관련있으며, 추후 설명 예정
  }
}
```

time-display.component.html

```html
<p>
    {{test}} <!-- 데이터바인딩(단반향) ts -> html -->
</p>
```





### 이벤트 바인딩

buttons.component.html

```html
<button class="start-btn" (click)='test($event)' >
    시작
</button>
```

buttons.component.ts

```typescript
test($event:MouseEvent){
}
```





### 부모와 자식 간의 데이터 바인딩

앵귤러에선 event로 데이터를 받으려면 $event 로 받을 수 있다.

제네릭을 쓰게 되면 명시적으로 사용하도록 에러를 발생시킨다. (사용하지 않아도 됨)

<img src="./resources/data-binding-001.png" height=200>

### 1. buttons

buttos.component.html

```html
<p>
    <button class="start-btn" (click)="executeButton('start')"> 
        start
    </button>

    <button class="stop-btn" (click)="executeButton('stop')">
        stop
    </button>

    <button class="reset-btn" (click)="executeButton('reset')">
        reset
    </button>
</p>
```

buttos.component.ts

```typescript
@Output() clickEvent = new EventEmitter();

executeButton(command) {
    this.clickEvent.emit(command);
}
```

### 2. Section

section.compontent.html

```html
<div class="title">
    <div class="display">
        <app-time-display [inputData]="present" ></app-time-display>
        <app-buttons (clickEvent)="startTime($event)"></app-buttons>
    </div>
</div>
```

- [inputData] :   time-display의 @Input()과 바인딩

section.compontent.ts

```typescript
present = 'welcome';

startTime($event){
	this.present = $event;
}
```

### 3. time-display

time-display.component.html

```html
<div>
    <div class="time-text">
        <span>
            {{min}} : {{sec}}
        </span>
        <small>
            . {{ms}}
        </small>
    </div>
</div>
```

time-display.component.ts

```typescript
@Input() inputData:string;

min:number = 0; 
sec:number = 0;
ms:number = 0;

timeInterval;

timeStart(){
    this.timeInterval = setInterval(()=>{
        this.ms++;
    },10)
}

timeStop(){
    clearInterval(this.timeInterval)
}

timeReset(){
    this.timeStop();
    this.ms=0;

}

ngOnChanges(changes:SimpleChanges){ // 변화를 감지하는 함수
    console.log(changes)
    for(let propName in changes){
        if(propName == 'inputData'){
            switch (changes[propName].currentValue){
                case 'start':
                    this.timeStart();
                    break;
                case 'stop':
                    this.timeStop();
                    break;
                case 'reset':
                    this.timeReset()
                    break;
            }
        }
    }
}
```





COMMON JS 

AMD

