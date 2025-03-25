const STORAGE_KEY = 'logiadaptFormData';

export const saveFormData = (data) => {
  try {
    const currentData = getFormData();
    const updatedData = { ...currentData, ...data };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedData));
    return true;
  } catch (error) {
    console.error('Error saving form data:', error);
    return false;
  }
};

export const getFormData = () => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  } catch (error) {
    console.error('Error retrieving form data:', error);
    return {};
  }
};

export const clearFormData = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
    return true;
  } catch (error) {
    console.error('Error clearing form data:', error);
    return false;
  }
}; 