var maxScore = function(s) {
    let totalOnes = 0;
    for (let char of s) {
        if (char === '1') totalOnes++;
    }

    let leftZeros = 0;  
    let rightOnes = totalOnes;  
    let maxScore = 0;

  
    for (let i = 1; i < s.length; i++) {
        if (s[i - 1] === '0') {
            leftZeros++;
        } else {
            rightOnes--;
        }

        // Calculate the score for this split
        let score = leftZeros + rightOnes;
        maxScore = Math.max(maxScore, score);
    }

    return maxScore;
}
