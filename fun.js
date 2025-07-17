let person = {
    ID : 2204,
    Name : "VK",
    Designation : "PAT",
    address : {
        City : "Nellore",
        Pin : 524366,
        State : "AP"
    },
    details : function(){
        return `Name : ${this.Name}, Id : ${this.ID}, City : ${this.address.City}`;

    }


}
console.log(`Name : ${person.Name}, Id : ${person.ID}, City : ${person.address.City}`);
console.log(person.details());