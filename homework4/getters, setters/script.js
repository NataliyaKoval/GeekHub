const user = {
    firstName: 'Rintaro',
    secondName: 'Okabe',
    birthYear: 1991,
    get fullName() {
        return `${user.firstName} ${user.secondName}`;
    },
    set fullName(value) {

    },
    get age() {
        return new Date().getFullYear() - this.birthYear;
    },
    set age(value) {

    }
}
console.log(user.age);