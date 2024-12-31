## MMM - My Money Manager
MMM, My Money Manager는 사용자가 가계부를 작성하면 해당 데이터를 기반으로 수입과 지출을 분석하는 서비스입니다. <br>
2024.12.31 현재 Front-end(HTML, CSS, JS) 부분 완성되었고, Database를 연결하는 과정에 있습니다. <br>
앞으로 개인 토이 프로젝트로 DB, BE 등도 연결하여 천천히 완성하고자 합니다. <br>
서비스 보러 가기 👉 https://hahyeong.github.io/mmm.github.io/html/index.html <br>
<br><br>
### 로그인 페이지
![image](https://github.com/user-attachments/assets/3f3dd528-1b62-45c6-a338-a301d9c83e15)
<br><br>
현재 데이터베이스가 연결되어있지 않아, JS로 임시 구현해뒀습니다. ID는 'hello', PW는 '12345'를 입력하면 로그인이 가능합니다.<br>
<br><br>
![image](https://github.com/user-attachments/assets/969189dc-24dd-41da-af7c-35e82e36a55b)
<br><br>
로그인에 실패하는 경우 로그인 창 아래에 메시지가 표시됩니다.<br>
<br><br><br>
### Dashboard 페이지
![image](https://github.com/user-attachments/assets/dabdeec8-5619-4910-ab3d-ef6425b23dbf)
<br><br>
로그인에 성공하는 경우 dashboard 페이지로 이동하게 됩니다. 여기에서는 오늘의 수입과 지출, 이번 달의 수입과 지출을 한 눈에 볼 수 있습니다. <br>
또한 왼쪽의 사이드 바를 통해 페이지 이동이 가능하며, 왼쪽 사이드 바의 경우 Login 페이지를 제외한 모든 페이지에 존재합니다.<br>
<br><br><br>
### 수입 및 지출 기록
![image](https://github.com/user-attachments/assets/e5780fb7-8555-4e8d-8216-0afc0764c65c)
<br><br>
거래 내역은 페이지 오른쪽 상단의 (+)버튼을 누르면 숨겨져있던 사이드 바가 나타나고 이를 통해 기록할 수 있습니다. <br>
기록 시에는 수입/지출, 날짜, 금액, 카테고리으로 분류하여 기록합니다. <br>
해당 사이드 바는 User 페이지와 Login 페이지를 제외한 모든 페이지에 존재합니다.<br>
<br><br><br>
### Calendar 페이지
![image](https://github.com/user-attachments/assets/073a1c30-51cb-41c4-be1b-da323ced23dc)
<br><br>
달력 모양의 UI로 월별 수입 및 지출을 한 눈에 볼 수 있는 Calendar 페이지입니다. <br>
달력 상단의 화살표 버튼으로 날짜를 변경할 수 있습니다. (JS로 구현)<br>
<br><br>
![image](https://github.com/user-attachments/assets/0ddfa91e-ae0d-45f8-9479-b141efeda9d7)
<br><br>
수입/지출 금액을 클릭하면 그 날의 수입/지출 내역이 오른쪽에 표시됩니다. <br>
<br><br><br>
### Monthly 페이지
![image](https://github.com/user-attachments/assets/b1126ea5-1f06-4ddb-90ad-ac03abf850f2)
<br><br>
이번 달의 수입/지출 내역을 카테고리 별로 분석하여 그래프로 표시한 페이지입니다. <br>
(날짜 변경 기능은 구현 중에 있습니다.)<br>
<br><br><br>
### Yearly 페이지
![image](https://github.com/user-attachments/assets/bff9ad24-5494-4096-ae6a-32baccc136bf)
<br><br>
이번 년도의 수입/지출 내역을 카테고리 별로 분석하여 그래프로 표시한 페이지입니다.<br>
<br><br><br>
### User 페이지
![image](https://github.com/user-attachments/assets/c2e1d947-cbcd-4b8e-bc9b-0d927f14db96)
<br><br>
왼쪽 사이드 바 하단의 User 아이콘 옆 화살표를 누르면 Profile 버튼과 LogOut 버튼이 표시됩니다. <br>
<br><br>
![image](https://github.com/user-attachments/assets/56678244-9ece-4c24-9fa1-355d71150417)
<br><br>
Profile 버튼을 누르면 My Page로 이동하고 여기에서는 User의 정보를 확인할 수 있습니다. (구현 중에 있습니다.) <br>
LogOut 버튼을 누르면 로그아웃 되어 다시 Login 페이지로 돌아갑니다.<br>
