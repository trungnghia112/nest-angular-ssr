export default class Libs {
  static unsigned(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
    str = str.replace(/đ/g, 'd');
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A');
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E');
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I');
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O');
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U');
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y');
    str = str.replace(/Đ/g, 'D');
    return str;
  }

  static convertMinutesToDatetime(date, value) {
    const dateTime = new Date(date);

    const hours = (value / 60);
    const rhours = Math.floor(hours);
    const minutes = (hours - rhours) * 60;
    const rminutes = Math.round(minutes);

    dateTime.setHours(rhours, rminutes, 0, 0);
    return dateTime;
  }

  static convertDatetimeToYYYYMMDD(datetime: Date, literals: string = '-') {
    const dateString =
      datetime.getFullYear() +
      literals +
      (((datetime.getMonth() + 1) < 10) ? '0' : '') + (datetime.getMonth() + 1) +
      literals +
      ((datetime.getDate() < 10) ? '0' : '') + datetime.getDate();
    return dateString;
  }


  static convertDatetimeToDDMMYYYY(datetime: Date, literals: string = '-') {
    const dateString =
      ((datetime.getDate() < 10) ? '0' : '') + datetime.getDate() +
      literals +
      (((datetime.getMonth() + 1) < 10) ? '0' : '') + (datetime.getMonth() + 1) +
      literals +
      datetime.getFullYear();
    return dateString;
  }

  // Usage
  // var dates = getDates(new Date(2013,10,22), new Date(2013,11,25));
  // dates.forEach(function(date) {
  //  console.log(date);
  // });
  // Returns an array of dates between the two dates
  static getDatesBetweenTwoDates(startDate: Date, endDate: Date) {
    const dates = [];
    let currentDate = startDate;
    const addDays = function(days) {
      const date = new Date(this.valueOf());
      date.setDate(date.getDate() + days);
      return date;
    };
    while (currentDate <= endDate) {
      dates.push(currentDate);
      currentDate = addDays.call(currentDate, 1);
    }
    return dates;
  }
}
