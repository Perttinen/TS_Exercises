interface Result {
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: string,
    target: number,
    average: number
}
export const calculateExercises = (target:number, exercises:number[]): Result => {
    if(isNaN(target) || exercises.includes(NaN)){
        throw new Error('Provided values were not numbers!');
    }
    const ave:number = exercises.reduce( ( a, b ) => a + b, 0 ) / exercises.length;
    const rate:number = ave/target;
    const rating:[number,string]
        = rate < 0.7 ? [1,'you should work harder']
        : rate < 1 ? [2,'not too bad but could be better'] 
        : [3, 'great job!'];
    const results: Result = {
        periodLength: exercises.length,
        trainingDays: exercises.filter(e => e != 0).length,
        success: ave >= target ? true : false,
        rating: rating[0],
        ratingDescription: rating[1],
        target: target,
        average: ave
    };
    return results;
};

// try{
//     console.log(calculateExercises(2.5,[1, 0, 2, 0, 3, 0, 2.5]))
// }catch(error){
//     let errorMessage = 'Something bad happened.'
//     if (error instanceof Error) {
//         errorMessage += ' Error: ' + error.message;
//       }
//       console.log(errorMessage);
// }

