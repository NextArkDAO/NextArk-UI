export const saveProgress = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const loadProgress = (key) => {
  const val = localStorage.getItem(key);
  return val ? JSON.parse(val) : null;
};
