$(document).ready(function() {
  // console.log("ready");
  //let x = new FCList([1,3,5])
  //let y = new FCList([1,2,3])
  //let z = new FCList([4,5,6])
  // let x = new FCList([
  //   3,
  //   16,
  //   17,
  //   30,
  //   35,
  //   37,
  //   53,
  //   60,
  //   61,
  //   81,
  //   96,
  //   161,
  //   172,
  //   199,
  //   214
  // ]);
  // let y = new FCList([
  //   1,
  //   2,
  //   6,
  //   10,
  //   12,
  //   13,
  //   14,
  //   26,
  //   33,
  //   90,
  //   99,
  //   102,
  //   140,
  //   150,
  //   160
  // ]);
  // let z = new FCList([
  //   5,
  //   7,
  //   11,
  //   15,
  //   23,
  //   24,
  //   25,
  //   77,
  //   88,
  //   100,
  //   121,
  //   157,
  //   180,
  //   213,
  //   216
  // ]);
  // let r = new FCList([
  //   4,
  //   8,
  //   16,
  //   32,
  //   64,
  //   76,
  //   83,
  //   89,
  //   95,
  //   101,
  //   112,
  //   113,
  //   156,
  //   200,
  //   201
  // ]);
  // r.cascadeUp(z);
  // z.cascadeUp(y);
  // y.cascadeUp(x);
  // console.log(x.values.length);
  // let idk = new Search();
  // let a = [x, y, z, r];
  // console.log(a);
  // idk.driver(a, 89);
  // console.log(idk.results);
  // console.log(idk.hits);
});

function FCNode(value, original = true, indexBelow = null) {
  (this.value = value),
    (this.original = original),
    (this.nextPromoted = null),
    (this.indexBelow = indexBelow);
}

function FCList(listOfValues) {
  this.generateList = function(vals) {
    values = [];
    vals
      .concat()
      .sort(function(a, b) {
        return a - b;
      })
      .forEach(element => {
        values.push(new FCNode(element));
      });
    return values;
  };
  this.values = this.generateList(listOfValues);
  this.cascadeUp = function(FCListAbove) {
    currentIndexOther = 0;
    var tempCopy = FCListAbove.values;
    for (i = 1; i < this.values.length; i += 2) {
      var val = this.values[i].value;
      var insertNode = new FCNode(val, false, i);
      while (
        currentIndexOther < FCListAbove.values.length &&
        FCListAbove.values[currentIndexOther].value <= val
      ) {
        currentIndexOther++;
      }
      tempCopy.splice(currentIndexOther, 0, insertNode);
    }
    FCListAbove.values = tempCopy;
    var lastpromoted = -1;
    for (i = 0; i < FCListAbove.values.length; i++) {
      if (!FCListAbove.values[i].original) {
        for (j = lastpromoted + 1; j < i; j++) {
          FCListAbove.values[j].nextPromoted = i;
        }
        lastpromoted = i;
      }
    }
    console.log(FCListAbove);
  };
}

function indexColorTuple(list, index, color) {
  (this.index = index), (this.color = color);
}

function Search() {
  this.colors = [
    "blue",
    "green",
    "pink",
    "red",
    "yellow",
    "purple",
    "grey",
    "orange",
    "brown"
  ];
  this.hits = [];
  this.results = [];
  this.driver = function(listOfFCLists, query) {
    var list = listOfFCLists;
    var x = query;
    var result = this.binarySearch(list[0].values, x);
    if (result) {
      this.results.push(true);
    } else {
      this.results.push(false);
    }
    var binSearchNode = this.hits[this.hits.length - 1].index;
    var cursor = binSearchNode;

    for (i = 1; i < list.length; i++) {
      if (list[i - 1].values[cursor].original) {
        cursor = list[i - 1].values[cursor].nextPromoted;
      }
      cursor = list[i - 1].values[cursor].indexBelow;

      if (
        list[i].values[cursor].value === x &&
        list[i].values[cursor].original
      ) {
        this.hits.push(new indexColorTuple(i, cursor, this.colors[i + 2]));
        this.results.push(true);
      } else if (cursor - 1 >= 0 && list[i].values[cursor - 1].value === x) {
        if (list[i].values[cursor - 1].original) {
          this.hits.push(
            new indexColorTuple(i, cursor - 1, this.colors[i + 2])
          );
          this.results.push(true);
        } else {
          cursor -= 1;
          this.results.push(false);
        }
      } else {
        this.results.push(false);
      }
    }
    return null;
  };
  this.binarySearch = function(arr, x) {
    let start = 0,
      end = arr.length - 1;
    // Iterate while start not meets end
    while (start <= end) {
      // Find the mid index
      let mid = Math.floor((start + end) / 2);
      console.log(mid, arr[mid].value);
      var hit = new indexColorTuple(0, mid, this.colors[0]);
      // If element is present at mid, return True
      if (arr[mid].value === x) {
        if (arr[mid].original) {
          hit.color = this.colors[1];
          this.hits.push(hit);
          return true;
        }
        for (i = 0; i < arr.length; i++) {
          if (arr[i].value === x) {
            if (!arr[i].original) {
              this.hits.push(new indexColorTuple(0, i, this.colors[0]));
            } else {
              this.hits.push(new indexColorTuple(0, i, this.colors[1]));
              return true;
            }
          }
        }
        return false;
      }
      // Else look in left or right half accordingly
      else if (arr[mid].value < x) start = mid + 1;
      else end = mid - 1;
      this.hits.push(hit);
    }
    return false;
  };
}
