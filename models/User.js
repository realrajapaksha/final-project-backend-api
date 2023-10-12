class User {
    constructor(id, email, fullName, image, age, gender, mobile, telephone, city, province, country, address) {
        this.id = id;
        this.email = email;
        this.fullName = fullName;
        this.image = image;
        this.age = age;
        this.gender = gender;
        this.mobile = mobile;
        this.telephone = telephone;
        this.city = city;
        this.province = province;
        this.country = country;
        this.address = address;
    }
}

module.exports = User;