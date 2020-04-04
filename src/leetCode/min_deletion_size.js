var minDeletionSize = function(A) {

    if (A.length === 1) return 0;

    const columns = new Array(A[0].length);

    for (let i = 0; i < columns.length; i += 1) {
        columns[i] = new Array();
    }


    for (let i = 0; i < A.length; i += 1) {

        const letter = A[i].split('');

        for (let j = 0; j < letter.length; j += 1) {
            columns[j].push(letter[j]);
        }

    }

    console.log(columns);

    return 0;

};

minDeletionSize(["ca","bb","ac"]);