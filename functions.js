export function resultsHandler(req, res) {
    const answers = req.body

    const ageFeature = answers.age === 'From 38' ? 'an experienced' : 'a young'
    const gendFeature = answers.gender.toLowerCase()

    const logicAnswers = [
        { answerKey: 'selectedExcess', rightAnswer: 'Bench' },
        { answerKey: 'numberLineExtention', rightAnswer: '48' },
        { answerKey: 'excessCity', rightAnswer: 'New-York' },
        { answerKey: 'dancingMan', rightAnswer: '1' },
        { answerKey: 'suitableNumber', rightAnswer: '44' }
    ]
    let logicCounter = 0

    logicAnswers.forEach(ans => {
        if (answers[ans.answerKey] === ans.rightAnswer) {
            logicCounter++
        }
    })

    const logicFeature = logicCounter < 3
        ? 'You should work on the development of logical thinking.'
        : 'Your logical thinking is well developed.'
    
    const colorFeature = answers.selectedColor1 === answers.selectedColor2
        ? 'You are consistent and purposeful.'
        : 'You tend to change your mind from time to time.'

    let lifestyleFeature = ''
    if (answers.lifestyle === 'To enjoy every minute of your time') {
        lifestyleFeature = 'You live for today.'
    } else if(answers.lifestyle === 'To be directed thoughts into the future') {
        lifestyleFeature = 'You tend to planning.'
    } else {
        lifestyleFeature = 'You tend to be analytical.'
    }

    const piramidFeature = answers.piramidFeature === 'It is pointed'
        ? 'You tend to be distrustful for other people.'
        : 'You are a calm and balanced person.'

    const result = `Processing of your answers showed the next. You are ${ageFeature} ${gendFeature}. ${logicFeature} ${colorFeature} ${lifestyleFeature} ${piramidFeature} And, as you may have guessed, this is not a real IQ-test.`
    
    res.status(200).send(result)
}