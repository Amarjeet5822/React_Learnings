function renderElement(reactElement, container) {
    // //  done with repeated code// //
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children;
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)
    // container.appendChild(domElement);
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children;
    for (let prop in reactElement.props) {
        domElement.setAttribute(prop,reactElement.props[prop] )
    };
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href : "http://google.com",
        target: '_blank'
    },
    children : 'Click to visit Google'
}
const mainContainer = document.querySelector("#root")

renderElement( reactElement, mainContainer)
