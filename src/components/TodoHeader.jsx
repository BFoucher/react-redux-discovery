import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
    mixins: [PureRenderMixin],

    _handleKeyPress(e) {
        if (e.key === 'Enter' && this.refs.addTodoInput.value !== '') {
            return this.props.addItem(
                this.refs.addTodoInput.value
            );
        }
    },

    render() {
        return <header className="header">
            <h1>todos</h1>
            <input className="new-todo"
                   ref="addTodoInput"
                   autoFocus
                   autoComplete="off"
                   placeholder="What needs to be done?"
                   onKeyPress = {this._handleKeyPress} />
        </header>
    }
});