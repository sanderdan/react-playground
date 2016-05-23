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
    // ToDo: make the input border red if the value is ''
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
    if(!this.state.error){ null }

    return <div className="error-message"> {this.state.error}</div>
  }

  render() {
    return (
      <form onSubmit={this.handleCreate.bind(this)} >
        <input type="text" placeholder="Ex. Go fishing"
        ref="createInput"
        style={this.inputStyle}
        />
        <button>Create</button>
        {this.renderError()}
      </form>
    );
  }
}
