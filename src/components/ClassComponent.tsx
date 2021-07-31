import React from "react";

class ClassComponent extends React.Component<{}, { count:number }> {
    constructor(props:any) {
        super(props);
        this.state = { count: 0 };
        this.increase = this.increase.bind(this);
    }

    increase() {
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.increase}>+</button>
            </div>
        );
    }
}

export default ClassComponent;