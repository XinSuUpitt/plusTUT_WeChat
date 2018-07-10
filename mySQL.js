//创建数据库连接对象
const mysql = require('mysql');

function getDb() {
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'catherine100529',
    database: 'plusTuT',
    multipleStatements: true
  });
  connection.connect();
  return connection;
}

function addTeachers() {
  var values = [
    [1, "佟泽洲", "Tony", "男", "Plustut全科金牌导师，本科毕业于香港理工大学，原阿里巴巴（香港）商务分析师及企业培训师，致力于为跨境学童学习提供综合性解决提升方案，整合知识体系，提升学习效率，短时间内提高学生学业成绩。"],
    [2, "任婉瑄", "Wendy", "女", "英语金牌讲师。毕业于新加坡国立大学，英语专业八级，同声传译，新东方在线题库主要编辑。致力于整合多方英语资源，从专业视角为英文科学习提供一站式解决方案。"],
    [3, "刘肖凡", "Edward", "男", "数学金牌讲师，本科毕业于香港理工大学，金融与数学双学士。多年致力于数学理论体系研究，并为学子短时间内让学子掌握数学思想，提高应试成绩。"],
    [4, "杨开翼", "Duke", "男", "中文金牌讲师，本科毕业于香港理工大学。具有丰富写作阅读教学经验，极大提升学子语文兴趣，提升语文对文章 的分析及理解能力"]
  ];
  var insertSQL = "INSERT INTO teachers(`id`, `name`, `english_name`, `gender`, `description`) VALUES ? ";
  var connection = getDb();
  connection.query(insertSQL, [values], function (err, rows, fields) {
    if (err) {
      console.log('INSERT ERROR - ', err.message);
      return;
    }
    console.log("INSERT SUCCESS");
  });
  connection.end();
}

function addElementaryClasses() {
  var values = [
    [1, "皇家小学英语一年级", "佟泽洲", 200, "《剑桥少儿英语》教材图文并茂,注重培养孩子们的学习兴趣和交际能力,让孩子们在轻松愉快的氛围中掌握最基本的交际用语。匹配剑桥大学考试委员会特别为测试4-12岁少儿的英语水平而设计的剑桥少儿英语考试(CYLE)。剑桥一级到三级教材的新增单词量分别为682、1150和666,学完剑桥少儿英语三级所掌握的词汇量为2500左右。"],
    [2, "皇家小学英语二年级", "任婉瑄", 150, "乐学英语1-3级课程相当于剑桥英语1-3级课程的加强版，知识结构一样,难度相当，但根据各年级学员的特点,在剑桥少儿英语基础上,补充了绘本故事、自然拼音小常识、短篇阅读等内容。学习此课程无需购买教材，使用配套讲义就可以。课程按照暑期班、秋季班、寒假班、春季班四期课程顺序逐步上线。"],
    [3, "小学英语三年级", "佟泽洲", 250, "《剑桥少儿英语》教材图文并茂,注重培养孩子们的学习兴趣和交际能力,让孩子们在轻松愉快的氛围中掌握最基本的交际用语。匹配剑桥大学考试委员会特别为测试4-12岁少儿的英语水平而设计的剑桥少儿英语考试(CYLE)。剑桥一级到三级教材的新增单词量分别为682、1150和666,学完剑桥少儿英语三级所掌握的词汇量为2500左右。"]
  ];
  var insertSQL = "INSERT INTO elementaryClasses(`id`, `class_name`, `teacher_name`, `price`, `description`) VALUES ? ";
  var connection = getDb();
  connection.query(insertSQL, [values], function (err, rows, fields) {
    if (err) {
      console.log('INSERT ERROR - ', err.message);
      return;
    }
    console.log("INSERT SUCCESS");
  });
  connection.end();
}

// addElementaryClasses();

