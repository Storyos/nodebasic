const express = require ('express');
const path = require('path');
const router = express.Router();
const app = express();
const port = 3000;



app.get('/',(req,res)=>{
    const headers = req.headers;
    // res.send(headers);
    res.json({message : "Hello Node!"});
})

// 물음표로 들어온것은 query에서 받아서 처리
app.get('/contacts', (req,res)=>{
    const fullPath = path.join(__dirname,'data','example.txt');
    console.log(__dirname);
    res.sendFile(fullPath);
})

app.get(`/contacts/:id`,(req,res)=>{
    console.log(req.params.id);
    res.status(200).send(`View Contacts for ID : ${req.params.id}`)
});


app.put('/contacts/:id',(req,res)=>{
    console.log(req.params.id);
    res.status(200).send(`Update Contact for ID : ${req.params.id}`);
})

app.delete('/contacts/:id',(req,res)=>{
    console.log(req.params.id);
    res.status(200).send(`Delete Contact for ID : ${req.params.id}`);
})

app.post('/contacts',(req,res)=>{
    res.status(201).send("create contacts");
})

// Client의 동작을 듣는 것
app.listen(port,()=>{
    console.log(`${port}번 포트에서 서버 실행중`)
});

// Get 방법  & POST 방법
// GET 방식에서는 URL 뒤에 물음표로 값이 보여진다.

// 라우트 파라미터
// '/'를 요청 URL 뒤에 : 을 붙인 후 그뒤에 변수를 적어준다.
// /요청 URL/ :id

// res.download : 파일 다운로드
// res.end : 응답 프로세스 종료
// res.json : JSON 응답 전송
// res.jsonp : JSONP 지원을 통해 JSON 응답을 전송
// res.redirect : 요청 경로를 재지정하여 강제 이동.
// res.render : view 템플릿을 화면에 렌더링
// res.send : 괄호 안의 내용을 전송 ( 간단한 글자 정도 )
// res.sendFile : 지정한 경로의 파일을 읽어서 내용을 전송
// res.sendStatus : 상태 메시지와 함께 HTTP 상태 코드 전송
// res.status : 응답의 상태 코드 설정.