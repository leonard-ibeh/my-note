const useCreateDate = () => {
  const dateObj = new Date();
  let month = dateObj.getMonth();
  let monthName;
  switch (month) {
    case 0:
      monthName = "Jan";
      break;
    case 1:
      monthName = "Feb";
      break;
    case 2:
      monthName = "Mar";
      Break;
    case 3:
      monthName = "Apr";
      Break;
    case 4:
      monthName = "May";
      Break;
    case 5:
      monthName = "Jun";
      Break;
    case 6:
      monthName = "July";
      Break;
    case 7:
      monthName = "Aug";
      Break;
    case 8:
      monthName = "Sep";
      Break;
    case 9:
      monthName = "Oct";
      Break;
    case 10:
      monthName = "Nov";
      Break;
    case 11:
      monthName = "Dec";
  }

  const date = `${monthName} ${dateObj.getDate()}, ${dateObj.getFullYear()} [${dateObj.getHours()}: ${dateObj.getMinutes()}]`;
  return date;
};

export default useCreateDate;
