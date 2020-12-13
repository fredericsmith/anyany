import Sorting from "@/utils/Sorting.js";

class QuickSorting extends Sorting {
    constructor(history) {
        super(history);
    }
    sort(data) {
        this.quickSorting(data, 0, data.length - 1)
    }
    quickSorting(data, begin, end) {
        var left = begin + 1,
            right = end,
            temp;
        if (begin < end) {
            while (left < right) {
                while (left <= end) {
                    if (data[left] > data[begin]) {
                        break;
                    }
                    left++;
                }
                while (right >= begin + 1) {
                    if (data[right] <= data[begin]) {
                        break;
                    }
                    right--;
                }
                if (left < right) {
                    temp = data[left];
                    data[left] = data[right];
                    data[right] = temp;
                    this.addHistory([...data]);
                }
            }
            if (left >= right) {
                if (data[begin] > data[right]) {
                    temp = data[right];
                    data[right] = data[begin];
                    data[begin] = temp;
                }
                this.quickSorting(data, begin, right - 1);
                this.quickSorting(data, right + 1, end);
            }
        }

        this.addHistory([...data]);
    }

}
export default QuickSorting;