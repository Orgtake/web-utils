class SepDate {
  constructor(targetCurDate, ISO, year, month, day) {
    this._date = targetCurDate
      ? new Date()
      : ISO?.enabled
      ? new Date(ISO.text)
      : new Date(year, month-1, day)
    ;
  }
  get date() {
    return this._date;
  }
  getMonth() {
    return this._date.getMonth()+1;
  }
}
const webutilsdate = {
  daysUntil(day) {
    const dayd = new Date().getDate();
    return Math.abs(dayd - day);
  },
  SepDate
}
