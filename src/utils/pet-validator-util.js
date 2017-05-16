const validatePetName = (petName) => {
  if (!/^([a-zA-Z]+\s)*[a-zA-Z]+$/.test(petName)) {
    return 'Nome com caracteres inválidos!';
  } else if (!petName || petName.length < 4) {
    return 'O nome é muito curto!';
  } else if (petName && petName.length > 20) {
    return 'O nome precisa ter menos caracteres!';
  }
  return '';
};

const validatePetType = (type) => {
  if (!['c', 'd'].includes(type)) {
    return 'Selecione o tipo do pet!';
  }
  return '';
};

const validatePetSize = (size) => {
  if (!['b', 'm', 's'].includes(size)) {
    return 'Selecione o porte do pet!';
  }
  return '';
};

const validatePetSex = (sex) => {
  if (!['m', 'f'].includes(sex)) {
    return ('Selecione o sexo do pet!');
  }
  return '';
};

const validatePet = (fields = {}) => {
  const errors = {
    name: validatePetName(fields.name),
    type: validatePetType(fields.type),
    size: validatePetSize(fields.size),
    sex: validatePetSex(fields.sex),
  };

  return errors;
};

module.exports = {
  validatePet,
};
