/**
 * 记录历史
 */
class History {
    constructor() {
        this.stack = []
    }

    push(item) {

        this.stack.push(item)
        return true;
    }

    shift() {
        return this.stack.shift();
    }

    getLength() {
        return this.stack.length;
    }
    
    clear() {
        this.stack = []
    }

}
export default History;