const getPosition = (direction, DOMNode, className) => {
    switch(document.getElementsByClassName(className).length){
        case 0:
        alert('注意：传入的className对应的元素不存在！')
        break
        case 1:
        break
        default:
        alert('注意：传入的className对应多个元素！请给该元素唯一className')

    }
    let offset = DOMNode[`offset${direction}`]
    let parent = DOMNode.offsetParent
    if (parent) {
        if (className) {
            if (parent.className != className) {
                offset += getPosition(direction, parent, className);
            }
        } else {
            if (parent.nodeName != 'BODY') {
                offset += getPosition(direction, parent);
            }
        }
    }

    return offset
}

export const getTop = (DOMNode, className) => {
    return getPosition('Top', DOMNode, className)
}

export const getLeft = (DOMNode, className) => {
    return getPosition('Left', DOMNode, className)
}

export const getBottom = (DOMNode, className) => {
    let containerHeight = 0;
    let selfHeight = DOMNode.offsetHeight
    if (className) {
        containerHeight = document.getElementsByClassName(className)[0].offsetHeight
    } else {
        containerHeight = document.getElementsByTagName('body')[0].offsetHeight
    }
    return containerHeight - selfHeight - getTop(DOMNode, className)
}

export const getRight = (DOMNode, className) => {
    let containerWidth = 0;
    let selfWidth = DOMNode.offsetWidth
    if (className) {
        containerWidth = document.getElementsByClassName(className)[0].offsetWidth
    } else {
        containerWidth = document.getElementsByTagName('body')[0].offsetWidth
    }
    return containerWidth - selfWidth - getLeft(DOMNode, className)
}