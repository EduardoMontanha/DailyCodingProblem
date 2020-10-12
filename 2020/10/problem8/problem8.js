const tree = {
    val: false,
    children: [
        {val: true, children: []},
        {val: false, children: [
            {val: true, children: [
                {val: true, children: []},
                {val: true, children: []}
            ]},
            {val: false, children: []}
        ]}
    ]
}

let univalTreeCount = 0;

function checkChildren(node) {
    const rootVal = node.val;
    const children = node.children;

    if (children.length) {
        let isUnival = true;

        for (let i = 0; i < children.length; i++) {
            const child = children[i];

            if (rootVal !== child.val) {
                isUnival = false;
            }

            if (child.children.length) {
                checkChildren(child);
            } else {
                univalTreeCount++;
            }
        }

        if (isUnival) {
            univalTreeCount++;
        }
    }

    console.log(univalTreeCount);
}

checkChildren(tree);