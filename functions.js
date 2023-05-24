export function resultsHandler(answers) {
    let ageFeature, gendFeature, logicFeature, colorFeature, lifestyleFeature, piramidFeature

    if(answers[1].age === 'From 38') {
        ageFeature = 'an experienced'
    } else {
        ageFeature = 'a young'
    }

    gendFeature = answers[0].gender.toLowerCase()

    let logicCounter = 0
    if(answers[2].selectedExcess === 'Bench') {logicCounter++}
    if(answers[3].numberLineExtention === '48') {logicCounter++}
    if(answers[6].excessCity === 'New-York') {logicCounter++}
    if(answers[7].dancingMan === '1') {logicCounter++}
    if(answers[10].suitableNumber === '44') {logicCounter++}
    if(logicCounter < 3) {
        logicFeature = 'You should work on the development of logical thinking.'
    } else {
        logicFeature = 'Your logical thinking is well developed.'
    }

    if(answers[4].selectedColor1 === answers[5].selectedColor2) {
        colorFeature = 'You are consistent and purposeful.'
    } else {
        colorFeature = 'You tend to change your mind from time to time.'
    }

    if(answers[8].lifestyle === 'To enjoy every minute of your time') {
        lifestyleFeature = 'You live for today.'
    } else if(answers[8].lifestyle === 'To be directed thoughts into the future') {
        lifestyleFeature = 'You tend to planning.'
    } else {
        lifestyleFeature = 'You tend to be analytical.'
    }

    if(answers[9].piramidFeature === 'It is pointed') {
        piramidFeature = 'You tend to be distrustful for other people.'
    } else {
        piramidFeature = 'You are a calm and balanced person.'
    }

    let result = `Processing of your answers showed the next. You are ${ageFeature} ${gendFeature}. ${logicFeature} ${colorFeature} ${lifestyleFeature} ${piramidFeature} And, as you may have guessed, this is not a real IQ-test.`
    return result
}