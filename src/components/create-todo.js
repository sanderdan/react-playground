import React from 'react';

export default class CreateTodo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null
    };
  }


  handleCreate(event) {
    event.preventDefault();

    const createInput = this.refs.createInput;
    const task = createInput.value;
    const validateInput = this.validateInput(task);

    if(validateInput) {
      this.setState({ error: validateInput});
      return;
    }

    this.setState({ error: null });
    this.props.createTask(task);
    this.refs.createInput.value = '';
  }

  handleChange() {
    const inputStyle = {
      border: this.refs.createInput.value ? '3px solid #D0E3C4' : '3px solid #C05746',
    };

    console.log(inputStyle);
    return inputStyle;
  }

  validateInput(task){
    console.log(task);
    if(!task){
      return "please enter a task";
    } else if(_.find(this.props.todos, todo => todo.task === task)) {
      return "task already exists.";
    } else {
      return null;
    }
  }

  renderError(){
    if(!this.state.error){ return null; }

    return <div className="error-message"> {this.state.error}</div>
  }

  render() {
    return (
      <form onSubmit={this.handleCreate.bind(this)} >
        <input type="text" placeholder="Ex. Go fishing"
        onChange={this.handleChange.bind(this)} ref="createInput"
        style={this.inputStyle}

        />
        <button>Create</button>
        {this.renderError()}
      </form>
    );
  }
}
