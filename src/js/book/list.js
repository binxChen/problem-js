function list() {
    this.listSize = 0;//列表的长度
    this.dataSize = [];//初始化一个空数组来存放列表元素
    this.append = append;
    this.find = find;
}

/**
 * 给列表添加元素
 * @param ele
 */
function append(ele) {
    this.dataSize[this.listSize++] = ele;
}

/**
 * 查找列表中的元素，返回下标，或者返回-1
 * @param ele
 * @returns {number}
 */
function find(ele) {
    for(let i =0;i<this.dataSize.length;i++){
        if(this.dataSize[i] == ele){
            return i
        }
    }
    return -1
}
