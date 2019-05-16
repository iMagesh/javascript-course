// lets create an add function first
const add = (a, b) => a + b;

//Now below is what we call as the higher order function
//This function is used to create the add function

const createAdder = a => b => add(a, b); // Higher Order Function

// lets try to use it
const eg1 = createAdder(2);
eg1(8); // 10
