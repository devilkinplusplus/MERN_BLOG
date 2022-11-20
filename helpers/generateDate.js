const moment = require("moment");

module.exports = {
  genereteDate: (date, format) => {
    return moment(date).format(format);
  },
};
