// Escolhe uma das opções de cores do array
export const stringToListColor = function (str: string): string {
  var colors = [
    // "#e51c23",
    // "#e91e63",
    // "#9c27b0",
    "#673ab7",
    "#3f51b5",
    "#5677fc",
    "#03a9f4",
    "#00bcd4",
    "#009688",
    "#259b24",
    "#8bc34a",
    "#afb42b",
    "#ff9800",
    // "#ff5722",
    "#795548",
    "#607d8b",
    "#80cbc4",
    "#81c784",
    "#4caf50",
    "#689f38",
    "#cddc39",
    "#ffee58",
    "#fbc02d",
    "#ffa726",
    "#ff7043",
    "#f06292",
    // "#e91e63",
    "#ce93d8",
    "#9c27b0",
    // "#673ab7",
    "#3f51b5",
    "#2196f3",
    "#00bcd4",
    "#009688",
    "#4db6ac",
  ];
  var hash = 0;

  if (str.length === 0) return "";
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
    hash = hash & hash;
  }
  hash = ((hash % colors.length) + colors.length) % colors.length;
  return colors[hash];
};

// Cores estilo random
export const stringToRandomColor = function (str: string) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  var colour = "#";
  for (var j = 0; j < 3; j++) {
    var value = (hash >> (j * 8)) & 0xff;
    colour += ("00" + value.toString(16)).substr(-2);
  }
  return colour;
};
