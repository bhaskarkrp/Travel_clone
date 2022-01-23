function findPiviot(arr){
    var high = arr.length -1;
    var low = 0;
    var ans = null;
    while(low <= high){
        var mid = Math.floor(low + (high - low)/2)
        if(arr[mid] > arr[high]){
            low = mid + 1;
        }
        else if(arr[mid] >= arr[low]){
            high = mid - 1
        }
        else if(arr[mid] < arr[high] && arr[mid] < arr[low]){
            return mid
        }
        
    }
    
    return low
}

var arr = [6, 7, 1,2,3]
console.log(findPiviot(arr))