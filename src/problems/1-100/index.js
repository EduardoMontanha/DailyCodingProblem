let Problems100 = {};

const problemsComponents = [
    require('./problem1').default,
    require('./problem2').default
];

for (let i = 0; i <= problemsComponents.length; i++) {
    Problems100[i+1] = problemsComponents[i];
}

export default Problems100;