//synchronus programming


const taskOne=()=>{
    console.log("task 1");
};

const dataLoading=()=>{
    console.log("task 2.Data Loading");
}
const taskTwo=()=>{
   setTimeout(dataLoading,1000)
};
const taskThree=()=>{
    console.log("task 3");
};
const taskFour=()=>{
    console.log("task 4");
};
const taskFive=()=>{
    console.log("task 5");
};


taskOne();
taskTwo();
taskThree();
taskFour();
taskFive();

