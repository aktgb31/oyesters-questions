function maximum_minimum_bird_frequencies(birds) {
    const frequency = {};
    for (let i = 0; i < birds.length; i++) {
        if (frequency[birds[i]]) {
            frequency[birds[i]]++;
        } else {
            frequency[birds[i]] = 1;
        }
    }
    let max = birds[0];
    let min = birds[0];
    for (let key in frequency) {
        if (frequency[key] > frequency[max] || (frequency[key] == frequency[max] && key < max)) {
            max = key;
        }
        if (frequency[key] < frequency[min] || (frequency[key] == frequency[min] && key < min)) {
            min = key;
        }
    }
    return [max, min];
}