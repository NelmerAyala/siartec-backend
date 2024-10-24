const ENTITIES_EMAILS_TEMPLATES_NAME_ORDER = Object.freeze({
  RESET_PASSWORD: {
    id: 1,
    code: 'resetPassword',
  },
  UPDATE_CALCULATION_FACTOR: {
    id: 2,
    code: 'updateCalculationFactor',
  },
});
const ENTITIES_EMAILS_TEMPLATES_ID_ORDER = Object.freeze(
  Object.keys(ENTITIES_EMAILS_TEMPLATES_NAME_ORDER).reduce((acc, k) => {
    const element = ENTITIES_EMAILS_TEMPLATES_NAME_ORDER[k];
    const id = `id${element.id}`;
    acc[id] = element;
    return acc;
  }, {}),
);
const getEmail_TemplateById = (id) => {
  return ENTITIES_EMAILS_TEMPLATES_ID_ORDER[`id${id}`];
};
const getEmail_TemplateByName = (name) => {
  return ENTITIES_EMAILS_TEMPLATES_NAME_ORDER[name];
};

const EMAILS_TEMPLATES = ENTITIES_EMAILS_TEMPLATES_NAME_ORDER;

module.exports = {
  EMAILS_TEMPLATES,
  getEmail_TemplateById,
  getEmail_TemplateByName,
};
