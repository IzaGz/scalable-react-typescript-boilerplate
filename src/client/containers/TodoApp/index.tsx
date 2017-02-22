import * as React from 'react';
const {
  Container,
  DeleteButton,
  Section,
  Input,
  Header,
  InnerContainer,
  Ul,
  Li,
  Todos,
  Todo,
  H1,
} = require('./styles');

interface TodoAppState {
  todos?: Array<{ text: string }>;
  input?: string;
}

class TodoApp extends React.Component<any, TodoAppState> {
  constructor() {
    super();
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      todos: [],
      input: '',
    };
  }
  private handleAddTodo(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      const { input } = this.state;
      if (!input) {
        return;
      }
      const newTodos = [
        ...this.state.todos,
        {
          text: this.state.input,
        },
      ];
      this.setState({
        todos: newTodos,
        input: '',
      });
    }
  }
  private handleChange(e) {
    e.preventDefault();
    const input = e.target.value;
    this.setState({
      input,
    });
  }
  private handleDeletion(i) {
    const todos = [
      ...this.state.todos.slice(0, i),
      ...this.state.todos.slice(i + 1),
    ];
    this.setState({
      todos,
    });
  }
  public render() {
    const {
      todos,
      input,
    } = this.state;
    return (
      <Container>
        <H1>
          Example Todo App
        </H1>
        <InnerContainer>
          <Section>
            <Header>
              <Input
                value={input}
                onChange={this.handleChange}
                onKeyPress={this.handleAddTodo}
                autoFocus
                placeholder="Start typing to add a Todo..."
              />
            </Header>
            <Todos>
              <Ul>
                {todos.map((item, i) =>
                  <Li key={i}>
                    <Todo>
                      {item.text}
                    </Todo>
                    <DeleteButton
                      onClick={this.handleDeletion.bind(this, i)}
                    />
                  </Li>,
                )}
              </Ul>
            </Todos>
          </Section>
        </InnerContainer>
      </Container>
    );
  }
}

export default TodoApp;
