/**
 * 排序父类
 */
class Sorting {
    constructor(history) {
        this.historyHandle = history
    }

    addHistory(data) {
        this.historyHandle.push(data)
        return true
    }
}
export default Sorting;