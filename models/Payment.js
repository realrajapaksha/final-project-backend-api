class Payment {
    constructor(payId, proId, uid, timestamp, method, note) {
        this.payId = payId;
        this.proId = proId;
        this.uid = uid;
        this.timestamp = timestamp;
        this.method = method;
        this.timestamp = timestamp;
        this.note = note;
    }
}

module.exports = Payment;