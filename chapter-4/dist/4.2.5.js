"use strict";
const chapter4_2_5 = () => {
    let a = { value: 'a' };
    let b = { value: 'b', isLeaf: true };
    let c = { value: 'c', children: [b] };
    let a1 = mapNode(a, _ => _.toUpperCase());
    let b1 = mapNode(b, _ => _.toUpperCase());
    let c1 = mapNode(c, _ => _.toUpperCase());
    function mapNode(node, f) {
        return {
            ...node,
            value: f(node.value)
        };
    }
};
//# sourceMappingURL=4.2.5.js.map