const camelCase = text => {
  const name = text.split('-');

  for (let i = 0; i < name.length; i += 1) {
    name[i] = name[i].charAt(0).toUpperCase() + name[i].substr(1);
  }
  return name.join('');
};

export default camelCase;
