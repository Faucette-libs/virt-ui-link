var virt = require("virt"),
    virtDOM = require("virt-dom"),
    Link = require("../..");


var AppPrototype;


function App(props, children, context) {
    virt.Component.call(this, props, children, context);
}
virt.Component.extend(App, "App");
AppPrototype = App.prototype;

AppPrototype.getChildContext = function() {
    return {
        muiTheme: {
            styles: {
                link: {
                    color: "#000000",
                    hoverColor: "#ff0000",
                    downColor: "#0000ff"
                }
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
            }, "This is a Link")
        )
    );
};

virtDOM.render(virt.createView(App), document.getElementById("app"));
