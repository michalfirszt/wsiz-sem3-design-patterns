let fibonacciSequenceCache = {};

const dificultCalculation = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const fibonacciSequence = async (index: number) => {
    if (Object.keys(fibonacciSequenceCache).includes(String(index))) {
        return fibonacciSequenceCache[String(index)];
    }

    await dificultCalculation(400)

    if (index === 0) {
        return 0;
    }

    if (index === 1) {
        return 1;
    }

    const result = await fibonacciSequence(index - 1) + await fibonacciSequence(index - 2);

    fibonacciSequenceCache = {
        ...fibonacciSequenceCache,
        [String(index)]: result
    }

    return  result;
}

const showResult = async () => {
    const resul4Index = await fibonacciSequence(4);
    console.log({ resul4Index, fibonacciSequenceCache })

    const resul6Index = await fibonacciSequence(6);
    console.log({ resul6Index, fibonacciSequenceCache})

    const resul8Index = await fibonacciSequence(8);
    console.log({ resul8Index, fibonacciSequenceCache})
}

showResult();
