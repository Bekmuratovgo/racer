export const generateRandomColor = () => {
  const colors = ['#FF5733', '#33FF57', '#5733FF', '#FF33D1', '#33D1FF', '#042e3c', '#ffa6c9', '#9000ff', '#e60d1a', '#1a1a1a'];
  return colors[Math.floor(Math.random() * colors.length)];
};