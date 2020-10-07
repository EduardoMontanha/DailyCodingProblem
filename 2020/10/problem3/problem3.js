class Node {
    constructor (val, left = undefined, right = undefined) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function serialize (node) {
    return JSON.stringify(node);
}

function deserialize (string) {
    return JSON.parse(string);
}

const node = new Node("root", new Node("left", new Node("left.left")), new Node("right"));

console.log(deserialize(serialize(node)).left.left.val);