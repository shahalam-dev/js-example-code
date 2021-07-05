let votes = ['yes' , 'no' , 'yes' , 'yes' , 'no' , 'yes' , 'yes' , 'no' , 'yes' , 'yes' , 'no' , 'yes' , 'yes' , 'no' , 'yes'];

const result = votes.reduce((total , count) => {
    console.log(total);
    if(total[count]){
        total[count]++;
    }else {
        total[count] = 1;
    }

    return total;
}, {})

console.log(result);
