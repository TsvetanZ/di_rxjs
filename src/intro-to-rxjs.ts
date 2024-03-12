import { Observable } from "rxjs";
// import { __values } from "tslib";

function getValue () {
    return new Promise ((res) => {
            setTimeout(()=> {
                res('Test');
            },1000 );
    });
}


function getValue1 (cb: (...arg: any[])=> void) { //cb= callback
    setTimeout (()=> {
        cb('Tets1')
    },2000)      

}
// cps
getValue1(function (value) {console.log(value);});

// sync
 [1]
 .map(function(x){return x+1})
 .map(function(x) {return x*2});

// promise chain      THIS async
//getValue() this change whith ..
Promise.resolve(1)
 .then(function(value) {console.log(value);})
 .then()
 .then()
 .then();



// sync
 [1,2, 3, 4]
 .map(function(x){return x+1})
 .map(function(x) {return x*2});


 // async
 const o = new Observable(observer => {
    observer.next(100);
    observer.next(200);
    observer.next(300);
    observer.complete();
 })

 .subscribe(console.log);