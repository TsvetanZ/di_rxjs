import { Observable, map } from "rxjs";
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


 
// function interval (intervalValue: number = 0) {
//   return new Observable<number>((observer) => {
//     let counter = 0
//     setInterval(() => {
//       observer.next(counter++);
//     },intervalValue);
//   });
// } 
// това си го има в библиотеката 'rxjs' и само добавяме или взимаме интержал от тази библиотека

interval(1000)
.pipe(
  map(x=> x+1),
  map(x=> x+2)

).subscribe(console.log)



// // dolnoto go zamestwane s gornoto ot 17red
// const o = new Observable<number>((observer) => {
//   let counter = 0;
//   setInterval(() => {
//     observer.next(counter++);
//   }, 1000);
//   // observer.next(100);
//   // observer.next(200);
//   // observer.next(300);
//   // observer.complete();
// });

// o
// .pipe(map((x) => x + 1),
// map(x=> x+1),
// map(x=> 2*x)
// ).subscribe(console.log);



// other case when make treesheking t.e delete Observeble

function interval1 (intervalValue: number = 0) {
    return new Observable<number>((observer) => {
      let counter = 0
      const timerId = setInterval(() => {
        observer.next(counter++)
       // observer.error(new Error('fwetfrtywef'))
      },intervalValue);
      return ()=> {
        clearInterval(timerId)
      }
    });
   
  } ;

  const $stream = interval1(1000).pipe(
    map(x=> x+1),
    map(x=> x*3)
  );


  setTimeout (() => {
   const sub = $stream.subscribe({
    next:(x)=> console.log(x),
    error: (err) => console.error(err),
    complete: () => console.log('Observeble comleted')

   });
   setTimeout(()=> {
    sub.unsubscribe();
   }, 1000)
  },2000)