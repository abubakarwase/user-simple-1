exports.createUser = (user) => {
  localStorage.setItem(user.email, JSON.stringify(user));
  return true;
};

exports.updateUser = (user) => {
  localStorage.removeItem(user.email);
  localStorage.setItem(user.email, JSON.stringify(user));
  return true;
};

exports.getUser = (userId = "") => {
  return JSON.parse(localStorage.getItem(userId) || "{}");
};

exports.getUsers = () => {
  const items = { ...localStorage };
  let users = []; // getting all entries from local storage
  for (const [key, value] of Object.entries(items)) {
    users.push(JSON.parse(value)); // pushing them into the array for using in a list
  }
  return [...users];
};

exports.deleteUsers = (userId = "") => {
  localStorage.removeItem(userId);
  return true;
};
