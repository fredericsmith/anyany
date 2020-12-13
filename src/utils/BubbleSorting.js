import Sorting from "@/utils/Sorting.js";

class BubbleSorting extends Sorting {
    constructor(history) {
        super(history);
    }

    sort(data) {
        this.bubbleSortting(data)
    }
    
    bubbleSortting(data) {
        let temp;
        for (let i = 0; i < data.length - 1; i++) {
            for (let j = 0; j < data.length - 1 - i; j++) {
                if (data[j] > data[j + 1]) {
                    temp = data[j + 1];
                    data[j + 1] = data[j];
                    data[j] = temp;

                    this.addHistory([...data]);
                }
            }
        }
    }
}
export default BubbleSorting;