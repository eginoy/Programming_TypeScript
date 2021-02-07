type Matrix = number[][]

type MatrixProtocol = {
    daterminant: {
        in: [Matrix],
        out: number
    }
    'dot-product': {
        in: [Matrix,Matrix]
        out: Matrix
    }
    invert: {
        in:[Matrix]
        out: Matrix
    }
}

type Protocol = {
    [command: string]: {
        in: unknown[]
        out: unknown
    }
}

function createProtocol<P extends Protocol>(script: string){
    return <K extends keyof P>(command: K) => 
    (...args: P[K]['in']) =>
    new Promise<P[K]['out']>((resolve,reject) => {
        let worker = new Worker(script)
        worker.onerror = reject
        worker.onmessage = event => resolve(event.data)
        worker.postMessage({command,args})
    })
}

//MatrixWorkerの実装は省略
let runWithMatrixProtocol = createProtocol<MatrixProtocol>(
    'MatrixWorker.js'
)
let paralleDeterminant = runWithMatrixProtocol('daterminant')

paralleDeterminant([[1, 2], [3, 4]])
    .then(determinant =>
        console.log(determinant) //-2
    )