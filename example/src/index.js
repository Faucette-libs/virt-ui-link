var virt = require("@nathanfaucett/virt"),
    virtDOM = require("@nathanfaucett/virt-dom"),
    Link = require("../..");


var AppPrototype;


function App(props, children, context) {
    virt.Component.call(this, props, children, context);
}
virt.Component.extend(App, "App");
AppPrototype = App.prototype;

AppPrototype.getChildContext = function() {
    return {
        theme: {
            palette: {
                accentColor: "#ff4081"
            }
        }
    };
};

AppPrototype.render = function() {
    return (
        virt.createView("div", {
                className: "App"
            },
            virt.createView(Link, {
                href: "#link"
            }, "Link 1"),
            virt.createView("br"),
            virt.createView(Link, {
                href: "#link"
            }, "Link 2"),
            virt.createView("br"),
            virt.createView(Link, {
                href: "#link"
            }, "Link 3")
        )       
    );
};

virtDOM.render(virt.createView(App), document.getElementById("app"));
