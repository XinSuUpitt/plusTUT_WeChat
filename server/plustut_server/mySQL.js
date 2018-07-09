//创建数据库连接对象
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'catherine100529',
  database: 'plusTuT',
  multipleStatements: true
})

var values = [
  [1, "佟泽洲", "Tony", "男", "Plustut全科金牌导师，本科毕业于香港理工大学，原阿里巴巴（香港）商务分析师及企业培训师，致力于为跨境学童学习提供综合性解决提升方案，整合知识体系，提升学习效率，短时间内提高学生学业成绩。"],
  [2, "任婉瑄", "Wendy", "女", "英语金牌讲师。毕业于新加坡国立大学，英语专业八级，同声传译，新东方在线题库主要编辑。致力于整合多方英语资源，从专业视角为英文科学习提供一站式解决方案。"],
  [3, "刘肖凡", "Edward", "男", "数学金牌讲师，本科毕业于香港理工大学，金融与数学双学士。多年致力于数学理论体系研究，并为学子短时间内让学子掌握数学思想，提高应试成绩。"],
  [4, "杨开翼", "Duke", "男", "中文金牌讲师，本科毕业于香港理工大学。具有丰富写作阅读教学经验，极大提升学子语文兴趣，提升语文对文章 的分析及理解能力"]
];
var insertSQL = "INSERT INTO teachers(`id`, `name`, `english_name`, `gender`, `description`) VALUES ? ";

connection.connect();

connection.query(insertSQL, [values], function (err, rows, fields) {
  if (err) {
    console.log('INSERT ERROR - ', err.message);
    return;
  }
  console.log("INSERT SUCCESS");
});

connection.end();