import Sorting from "@/utils/Sorting.js";

class SelectSorting extends Sorting {
    constructor(history) {
        super(history);
    }

    sort(data) {
        this.selectSorting(data)
    }

    selectSorting(data) {
        let minIndex, temp;
        for (let i = 0; i < data.length; i++) {
            minIndex = i;
            for (let j = i + 1; j < data.length; j++) {
                if (data[minIndex] > data[j]) {
                    minIndex = j;
                }
            }
            if (minIndex != i) {
                temp = data[i];
                data[i] = data[minIndex];
                data[minIndex] = temp;
            }
            this.addHistory([...data]);
        }
    }
}
export default SelectSorting;