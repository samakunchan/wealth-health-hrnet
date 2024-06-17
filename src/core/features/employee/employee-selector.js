/**
 * Récupère la liste des employées.
 * @param state
 * @return {[]|*}
 */
export const selectListEmployees = state => state.employeeStore.employees;

/**
 * Récupère le status
 * @param state
 */
export const selectEmployeeFormStatus = state => state.employeeStore.status;
