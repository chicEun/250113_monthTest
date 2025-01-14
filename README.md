# 250113_monthTest

피드백:

git 커밋 메세지가 명확하지 않음.  

학생 의견: 급했고 중간에 하다가 다 날리고 다시 시작했습니다.  

피드백:

교강사가 생각했을 때, 시간이 부족한게 티가 남.  

### routes/comment.route.js

1. controller를 활용하지 못함

```js
const {findAll, findOne, write, update, commentDelete} = require('../repository/comment.repository');
```

2. 1번을 감안하고서라도, service에서 require를 통해 모듈을 가져오는게 맞음

피드백:

1. 미들웨어 처리 코드나 미들웨어 디렉토리가 존재하지 않음 => 미들웨어 구현 못함.
2. 쿼리문 끝에 세미콜론 붙여야 합니다.

피드백: 

1. 메서드명 일관성 부족

```js
const commentDelete = async() => {
    const result = await commentRepository.commentDelete(data);
    return result;
}
```

동사가 붙음, 할거면 교강사의 개인적으로 지은 이름은 `destroy`

## 구현 순서

1. routes: 요청 URL 즉, 경로 처리

협업할 때, API 즉 요청 URL로 먼저 정리

router.get('/comment/like')
router.get('/comment/subscribe')

1-1. 이건뭐에요?
1-2. 기능(콜백 함수)는 언제까지 만들거에요?

즉 => 협업에 필요한 소통이 가능하다.

2. controller: 요청과 응답
3. service: 실질적인 코드
4. repository: 쿼리문

개인적으로, 교강사는 위의 순서를 추천하지만 익숙하지 않다면 역순으로 구현하는게  
학생분들에게는 매우 도움이 될 것임.