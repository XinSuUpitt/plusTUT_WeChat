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

function addClasses() {
  var values = [
    [1, "大埔天主教圣母圣心小学数学", "小学", "佟泽洲", "../../imgs/tony.jpg", 200, "由金牌教师佟老师主讲，分1到6年级小学数学，引入日本教育系统的强化记忆法帮助孩子尽快掌握数学知识。利用在线小游戏强化孩子对于数学的理解和记忆。"],
    [2, "HKAT乐思数学", "小学", "Brandon", "../../imgs/duke.png", 200, "由金牌数学教师Brandon主讲，通过HKAT香港学科测验中一入学前独家模拟试题，系统训练孩子在小学升入初中的数学考试中所需要掌握的数学技巧。"],
    [3, "大埔天主教圣母圣心小学语文", "小学", "佟泽洲", "../../imgs/tony.jpg", 200, "由金牌教师佟老师主讲，系统介绍小学语文知识，引入日本教育系统的强化记忆法帮助孩子快速记忆并强化记忆。"],
    [4, "HKAT乐思语文", "小学", "Brandon", "../../imgs/duke.png", 200, "由金牌数学教师Brandon主讲，通过HKAT香港学科测验中一入学前独家模拟试题，系统训练孩子在小学升入初中的语文考试中所需要掌握的语文知识和语文技巧。"],
    [5, "大埔天主教圣母圣心小学英语", "小学", "佟泽洲", "../../imgs/tony.jpg", 200, "由金牌教师佟老师主讲，由浅入深介绍英文单词、语法和日常会话，引入日本教育系统的强化记忆法帮助孩子快速记忆并强化记忆。"],
    [6, "HKAT乐思英语", "小学", "Brandon", "../../imgs/duke.png", 200, "由金牌数学教师Brandon主讲，通过HKAT香港学科测验中一入学前独家模拟试题，系统训练孩子在小学升入初中的英语考试中所需要掌握的英语语法和英语词汇。"],
    [7, "中学数学", "中学", "佟泽洲", "../../imgs/tony.jpg", 200, "由金牌数学教师佟老师主讲，由浅入深系统的讲述中学数学，包括基础计算、几何和代数，利用独家香港真题模拟孩子实战经验。"],
    [8, "中学语文", "中学", "佟泽洲", "../../imgs/tony.jpg", 200, "由金牌数学教师佟老师主讲，以独家香港真题为依托，用通俗易懂的方式讲述香港中学中所需要的语文知识。"],
    [9, "中学英语", "中学", "佟泽洲", "../../imgs/tony.jpg", 200, "由金牌数学教师佟老师主讲，利用其风趣幽默的讲课方式，以及强大的英语基本功，利用独家香港英语中学真题为辅助，快速帮助孩子掌握中学英语知识，提高孩子英语口语能力，提高孩子英语考试成绩。"]
  ];
  var insertSQL = "INSERT INTO classes(`id`, `class_name`, `class_type`, `teacher_name`, `teacher_avator_url`, `price`, `description`) VALUES ? ";
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

function addArticle() {
  var values = [
    [1, "气象铁塔的辐射大吗？", "George9", "../../imgs/tony.jpg", "我不知道那个铁塔的情况，不过气象铁塔上会有一些测太阳辐射的设备，如果说辐射的话，太阳辐射那么多，大家赶紧躲进地底下呀~~~~~要不然辐射量这么大，会变异的呀~~~~", "http://lessons.livecode.com/m/4071/l/7536-how-do-i-get-the-path-to-common-folders-on-my-computer", 0, 0],
    [2, "选择 Kindle 而不是纸质书的原因是什么？", "Wendy", "../../imgs/edward.png", "难道不明白纸质书更贵啊！！！ 若觉得kindle更贵，我觉得要么阅读量太少，那确实没有买kindle的必要。要么买的都是盗版的纸质书？我不清楚不加以评论。。。 另外，用kindle看小说的怎么真心不懂了...", "https://stackoverflow.com/questions/39960468/node-js-inserting-array-of-objects-to-mysql-database-when-using-transactions", 0, 0],
    [3, "如何评价周杰伦的「中文歌才是最屌的」的言论", "Tony", "../../imgs/wendy.png", "不知道题主是否是学音乐的。 音乐有公认的经典，也有明显的流行趋势没有错。但归根结底，音乐是一种艺术，艺术是很主观的东西。跟画作一个道理，毕加索是大家，但很多人看不懂他的话，甚至觉得很难看...", "http://blog.51cto.com/imysqldba/592068", 0, 0],
    [4, "PlusTuT 佳途教育简介", "苏昕", "../../imgs/tony.jpg", "深圳普拉斯图教育科技股份有限公司（PlusTuT）是一家综合型O2O科技教育培训机构。其成员由美国，香港，深圳，北京等地的教育及科技精英组建而成，致力为深港跨境学子提供一站式综合性学习提升及问题解决方案", "http://www.nba.com/players/stephen/curry/201939", 0, 0]
  ];
  var insertSQL = "INSERT INTO articles (`id`, `article_name`, `author_name`, `author_avator_url`, `description`, `article_url`, `browse_time`, `like_time`) VALUES ? ";
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

function deleteAllFromClasses() {
  var connection = getDb();
  var sql = "DELETE FROM classes WHERE id > 0";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
  });
  connection.end();
}

// addClasses();
// addTeachers();
// deleteAllFromClasses();
// addArticle();

