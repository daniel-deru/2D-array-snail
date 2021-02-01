


const snail2 = [[1,2], //forwards  2**2
                [4,3],] //reverse patern2: 2,1,1


const snail3 = [[1,2,3], //forwards  3**2
                [8,9,4], 
                [7,6,5]] //reverse patern2: 3,2,2,1,1



const snail4 = [[1, 2, 3, 4], //forwards
                [12,13,14,5],
                [11,16,15,6],
                [10, 9, 8,7]] //reverse patern2: 4,3,3,2,2,1,1

const snail5 = [[1, 2, 3, 4, 5],// forwards
                [16,17,18,19,6],
                [15,24,25,20,7],
                [14,23,22,21,8],
                [13,12,11,10,9]]//reverse patern2: 5,4,4,3,3,2,2,1,1

const snail6 = [[1, 2, 3, 4, 5, 6],
                [20,21,22,23,24,7],
                [19,32,33,34,25,8],
                [18,31,36,35,26,9],
                [17,30,29,28,27,10],
                [16,15,14,13,12,11]]


/*
1. loop through the fist array and remove all the elements and put in snail array
2. collect the last element from all the arrays in the middle and put in snail array .
3. loop throug the last array in reverse and remove all elements and put in snail array
4. collect all the elements from the beginning of the middle arrays and put in snail array
5. start the process again

*/
const linear = []
function snail(array) {
    if(array.length > 1){
    array[0].forEach(element => linear.push(element))
    array.shift()
    

        for(let i = 0; i < array.length-1; i++){
                linear.push(array[i][array[i].length-1])
                array[i].pop()
        }

        if(array.length > 1){
            array[array.length-1].reverse().forEach((element) => linear.push(element))
            array.pop()
        } 

        for(let i = array.length-1; i >= 0; i--){
            console.log(array[i][0])
        linear.push(array[i][0])
        array[i].shift()
        }

        if(array.length >= 1) return snail(array)
        
    } else {
        linear.push(array[0][0]) 
        array[0].shift()
        if(Math.sqrt(linear.length) % 2 == 0){
            const first = linear.pop()
            const second = linear.pop()
            linear.push(first)
            linear.push(second)
        }
        return linear
    } 
}

            
console.log(snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36])      
