const calculateBmi = (height:number, weight: number): string => {
    if(isNaN(height) || isNaN(weight)){
        throw new Error('malformatted parameters')
    }
    const bmis = [
        [18.5, 'Underweight (Unhealthy)'],
        [23, 'Normal range (Healthy'],
        [25, 'Overweight I (At risk)'],
        [30, 'Overweight II (Moderately obese)'],
    ]
    const bmi: number = weight / (height/100*height/100)
    for (const i in bmis) {
        if(bmi < bmis[i][0])  
            return String(bmis[i][1])

    }
    return 'Overweight III (Severely obese)'
}

export default calculateBmi