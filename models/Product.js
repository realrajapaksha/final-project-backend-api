class Product {
    constructor(pid, name, price, qty, description, timestamp, image, rate, tags, category) {
        this.pid = pid;
        this.name = name;
        this.price = price;
        this.qty = qty;
        this.description = description;
        this.timestamp = timestamp;
        this.image = image;
        this.rate = rate;
        this.tags = tags;
        this.category = category;
    }
}

module.exports = Product;