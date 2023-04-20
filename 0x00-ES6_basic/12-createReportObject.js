export default function createReportObject(employeesList) {
  allEmployees = {};

  for (const [departmentName, employees] of object.entries(employeeList)) {
    allEmployees[departmentName] = [...employees];
  }

  return {
    allEmployees,
    getNumberOfDepartments() {
      return object.keys(employeeList);
    },
  };
}
