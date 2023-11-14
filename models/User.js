class User {
    constructor(id, email, fullName, image, age, gender, tele1, tele2, city, address, country, status, type) {
        this.id = id;
        this.email = email;
        this.fullName = fullName;
        this.image = image;
        this.age = age;
        this.gender = gender;
        this.tele1 = tele1;
        this.tele2 = tele2;
        this.city = city;
        this.address = address;
        this.country = country;
        this.status = status;
        this.type = type;
    }
}

module.exports = User;