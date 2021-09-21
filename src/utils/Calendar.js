function getDaysInMonth(cur) {
    const curMonth = cur.getMonth() + 1;
  
    const numOfDays = new Date(cur.getFullYear(), curMonth, 0).getDate();
  
    return Array.apply(null, Array(numOfDays)).map((x, i) => i + 1);
  }
  
  function getMonthName(month) {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
  
    return monthNames[month];
  }
  
  function getWeeks(cur) {
    const firstOfTheMonth = new Date(cur.getFullYear(), cur.getMonth(), 1);
  
    const curMonth = cur.getMonth() + 1;
  
    const numDays = new Date(cur.getFullYear(), curMonth, 0).getDate();
  
    let fOMonth = firstOfTheMonth.getUTCDay();
  
    let numWeeks =
      (numDays < 29 && fOMonth > 0) ||
      (numDays === 30 && fOMonth > 5) ||
      (numDays === 31 && fOMonth > 4)
        ? Math.ceil(numDays / 7) + 1
        : Math.ceil(numDays / 7);
  
    switch (fOMonth) {
      case 0:
        return Array.apply(null, Array(numWeeks)).map((x, i) => {
          let pointer = i * 7;
          return Array.apply(null, Array(7)).map((z, j) => {
            return j + 1 + pointer > numDays ? 0 : j + 1 + pointer;
          });
        });
        break;
  
      case 1:
        return Array.apply(null, Array(numWeeks)).map((x, i) => {
          let pointer = i * 7;
          return Array.apply(null, Array(7)).map((z, j) => {
            return i === 0 && j < fOMonth
              ? 0
              : j + pointer > numDays
              ? 0
              : j + pointer;
          });
        });
        break;
  
      case 2:
        return Array.apply(null, Array(numWeeks)).map((x, i) => {
          let pointer = i * 7;
          return Array.apply(null, Array(7)).map((z, j) => {
            return i === 0 && j < fOMonth
              ? 0
              : j - 1 + pointer > numDays
              ? 0
              : j - 1 + pointer;
          });
        });
        break;
  
      case 3:
        return Array.apply(null, Array(numWeeks)).map((x, i) => {
          let pointer = i * 7;
          return Array.apply(null, Array(7)).map((z, j) => {
            return i === 0 && j < fOMonth
              ? 0
              : j - 2 + pointer > numDays
              ? 0
              : j - 2 + pointer;
          });
        });
        break;
  
      case 4:
        return Array.apply(null, Array(numWeeks)).map((x, i) => {
          let pointer = i * 7;
          return Array.apply(null, Array(7)).map((z, j) => {
            return i === 0 && j < fOMonth
              ? 0
              : j - 3 + pointer > numDays
              ? 0
              : j - 3 + pointer;
          });
        });
        break;
  
      case 5:
        return Array.apply(null, Array(numWeeks)).map((x, i) => {
          let pointer = i * 7;
          return Array.apply(null, Array(7)).map((z, j) => {
            return i === 0 && j < fOMonth
              ? 0
              : j - 4 + pointer > numDays
              ? 0
              : j - 4 + pointer;
          });
        });
        break;
  
      case 6:
        return Array.apply(null, Array(numWeeks)).map((x, i) => {
          let pointer = i * 7;
          return Array.apply(null, Array(7)).map((z, j) => {
            return i === 0 && j < fOMonth
              ? 0
              : j - 5 + pointer > numDays
              ? 0
              : j - 5 + pointer;
          });
        });
        break;
    }
  }
  
  function getDayNames() {
    return ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  }
  
  export default function Calendar(date) {
    if (date === undefined) {
      date = new Date();
    }
  
    const daysInMonth = getDaysInMonth(date);
  
    const days = getDaysInMonth(date);
  
    const dayNames = getDayNames();
  
    const year = date.getFullYear();
  
    const month = date.getMonth() + 1;
  
    const monthName = getMonthName(date.getMonth());
  
    const weeks = getWeeks(date);
  
    return {
      Calendar: {
        days: days,
        day_names: dayNames,
        weeks: weeks,
        month: month,
        month_name: monthName,
        year: year
      }
    };
  }
  