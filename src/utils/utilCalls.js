export const getCategorisedData = (videos, category) => {
  if (category === "All") {
    return [...videos];
  }
  return videos.filter((video) => video.category === category);
};

export const getShuffleArr = ([...arr]) => {
  var currentIndex = arr.length,
    tempValue,
    randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    tempValue = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = tempValue;
  }
  return arr;
};
