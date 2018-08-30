module.exports = [{
  question: '多选题',
  type: 'multi',
  order: '1',
  answerRange: ['357', '367', '36', '37', '3', '7', '2357', '2367', '236', '237', '23', '27', '1357', '1367', '136', '137', '13', '17'],
  answer: [{
    text: '咳嗽',
    value: '1'
  }, {
    text: '怕风怕冷',
    value: '2'
  }, {
      text: '清痰',
    value: '3'
    }, {
      text: '恶寒重',
      value: '4'
    }],
  result: [{
    resultRange: ['1', '3', '13', ''],
    result: '感冒咳嗽',
    symptomId: 'ganmaokesou'
  }, {
      resultRange: ['123', '23', '2', '12'],
      result: '受寒感冒初起',
      symptomId: 'shouhanganmaochuqi'
    }, {
      resultRange: ['4', '14', '24', '34', '134', '124', '234', '1234'],
      result: '风寒感冒',
      symptomId: 'fenghanganmao'
    }]
}, {
  question: '多选题',
  type: 'multi',
  order: '2',
    answerRange: ['358', '368', '467', '457', '38', '47', '2358', '2368', '2467', '2457', '238', '247', '1358', '1368', '1467', '1457', '138', '147'],
  answer: [{
    text: '咳嗽',
    value: '1'
  }, {
    text: '痰变黄',
    value: '2'
  }, {
    text: '怕风怕冷',
    value: '3'
  }],
    result: [{
      resultRange: ["1", "2", "3", "12", "13", "23", ''],
      result: '感冒寒包火',
      symptomId: 'ganmaohanbaohuo'
    }]
}, {
  question: '多选题',
  type: 'multi',
  order: '3',
    answerRange: ["458", "468", "48", "4", "8", "1458", "1468", "148", "14", "18", "2458", "2468", "248", "24", "28"],
  answer: [{
    text: '怕风怕冷',
    value: '1'
  }, {
    text: '高烧发热',
    value: '2'
  }, {
    text: '咳嗽剧烈',
    value: '3'
    }, {
      text: '不出汗',
      value: '4'
    }],
    result: [{
      resultRange: ["2", "12", "123", "23"],
      result: '风热感冒',
      symptomId: 'fengreganmao'
    }, {
        resultRange: ["1", "3", "4", "13", "14", "24", "34", "124", "134", "234", "1234", ''],
        result: '感冒寒包火',
        symptomId: 'ganmaohanbaohuo'
      }]
}, {
  question: '多选题',
  type: 'multi',
  order: '4',
    answerRange: ["5", "6", "15", "16", "25", "26"],
  answer: [{
    text: '怕风怕冷',
    value: '1'
  }, {
    text: '高烧发热',
    value: '2'
  }, {
    text: '咳嗽',
    value: '3'
    }, {
      text: '恶寒重',
      value: '4'
    }],
    result: [{
      resultRange: ["1", "13"],
      result: '风寒感冒初起',
      symptomId: 'shouhanganmaochuqi'
    }, {
        resultRange: ["14", "34", "4", "134"],
        result: '风寒感冒',
        symptomId: 'fenghanganmao'
      }, {
        resultRange: ["2", "12", "23"],
        result: '风热感冒',
        symptomId: 'fengreganmao'
      }, {
        resultRange: ["1234", "24", "234", "124", "123"],
        result: '感冒寒包火',
        symptomId: 'ganmaohanbaohuo'
      }, {
        resultRange: ["3"],
        result: '感冒咳嗽',
        symptomId: 'ganmaokesou'
      }, {
        resultRange: [''],
        result: '突发嗓子痛',
        symptomId: 'tufasangzitong'
      }]
}, {
  question: '多选题',
  type: 'multi',
  order: '5',
  answerRange: ["1", "2", ''],
  answer: [{
    text: '怕风怕冷',
    value: '1'
  }, {
    text: '高烧发热',
    value: '2'
  }, {
    text: '咳嗽',
    value: '3'
    }, {
      text: '恶寒重',
      value: '4'
    }],
    result: [{
      resultRange: ["1", "13"],
      result: '受寒感冒初起',
      symptomId: 'shouhanganmaochuqi'
    }, {
      resultRange: ["14", "34", "4", "134"],
      result: '风寒感冒',
      symptomId: 'fenghanganmao'
    }, {
        resultRange: ["2", "12", "23"],
      result: '风热感冒',
        symptomId: 'fengreganmao'
    }, {
      resultRange: ["1234", "234", "24", "124", "123"],
      result: '感冒寒包火',
        symptomId: 'ganmaohanbaohuo'
    }, {
      resultRange: ["3"],
      result: '感冒咳嗽',
        symptomId: 'ganmaokesou'
    }, {
      resultRange: [''],
      result: '本小程序不包含您的病症'
    }]
}]