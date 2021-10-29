function square(x){
    console.log(`square of ${x}: ${x*x}`);
}
square(5);

// const y= square;
// y(5);

function higherOrder(num,callback){
    callback(num);
}

 higherOrder(6,square);
 const taskOne = (callback) => {
    console.log(`Task 1`);
    callback();
  };
  
  const taskTwo = (callback) => {
    setTimeout(() => {
      console.log(`Task 2`);
      callback();
    }, 2000);
  };
  
  const taskThree = (callback) => {
    console.log(`Task 3`);
    callback();
  };
  const taskFour = () => {
    console.log(`Task 4`);
  };
  
  // taskOne(function t1() {
  //   taskTwo(function t2() {
  //     taskThree(function t3() {
  //       taskFour();
  //     });
  //   });
  // });
  taskOne(() => {
    taskTwo(() => {
      taskThree(() => {
        taskFour();
      });
    });
  });