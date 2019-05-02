$(document).ready(function(){
    console.log('ready');
    let x = new FCList([1,3,5])
    let y = new FCList([0,2,4,6,8,10,12,14,16,18])
    y.cascadeUp(x)
});

function FCNode(value, original=true, indexBelow=null) {
    this.value=value,
    this.original=original,
    this.indexBelow=indexBelow
}

function FCList(listOfValues) {
    this.generateList = function(vals){
        values = []
        vals.concat().sort(function(a,b){return a-b}).forEach(element => {
            values.push(new FCNode(element))
        })
        return values
    }
    this.values= this.generateList(listOfValues)
    this.cascadeUp = function(FCListAbove) {
        currentIndexOther = 0
        var tempCopy = FCListAbove.values
        for (i = 1; i < this.values.length; i+=2) {
            var val = this.values[i].value
            var insertNode = new FCNode(val, false, i)
            while (currentIndexOther < FCListAbove.values.length && FCListAbove.values[currentIndexOther].value < val) {
                currentIndexOther++
            }
            tempCopy.splice(currentIndexOther,0, insertNode)
        }
        FCListAbove.values = tempCopy
        // for (i = 0; i < FCListAbove.values.length; i++){
        //     console.log(FCListAbove.values[i].value, FCListAbove.values[i].original, FCListAbove.values[i].indexBelow)
        // }
    }
}