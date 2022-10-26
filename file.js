function dot_product(v1,v2){
    let sum =0;
for (let i=0 ; i<v1.length ; i++){
        sum += v1[i]*v2[i]
    }
    if (sum===0) {
        return "orthogonal"
    }
    else {
        return "not orthogonal!"
    }
}
console.log(dot_product([-1,2,],[4,2]))
console.log(dot_product([-1,3],[4,2]))