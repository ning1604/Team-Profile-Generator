class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // following returns user inputs
    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    // following returns role
    getRole() {
        return 'Employee';
    }
};

// exports Employee class
module.exports = Employee;