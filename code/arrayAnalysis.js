function arrayAnalysis(array) {
    return {
      average : array.reduce((tot, cur) => tot + cur, 0) / array.length,
      min: Math.min(...array),
      max: Math.max(...array),
      length : array.length
    }
  
  }

  module.exports = arrayAnalysis;