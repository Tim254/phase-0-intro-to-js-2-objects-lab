const employee = {
    name: "cadeBane",
    streetAddress: "Duro",
};
function updateEmployeeWithKeyAndValue(employee, name, cadeBane){
    return {
        ...employee, [name]:cadeBane,
    };
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, cadeBane){
    
    employee[name] = cadeBane;
    return employee;

}
function destructivelyDeleteFromEmployeeByKey(employee, name) {
    delete employee.name;
    return employee;
}
function deleteFromEmployeeByKey(employee, name){
    const newEmployee = {...employee};
    delete newEmployee[name];
    return newEmployee;
}