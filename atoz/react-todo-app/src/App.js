/* import React, { Component } from "react"; //class components

export default class App extends Component {
  render() {
    return (
      <div>
        안녕하세요.
      </div>
    )
  }
} */
import React, { Component } from "react"; //class component
import './App.css';
export default class App extends Component {
  btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right"
  }
  listStyle = () => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: "none",
    }
  }
  todoData = [
    {
      id: "1",
      title: "공부하기",
      completed: true,
    },
    {
      id: "2",
      title: "청소하기",
      completed: false,
    }
  ]
  handleClick = (id) => {
    
  }
  render() {
    return (
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할 일 목록</h1>
          </div>
          {
            this.todoData.map((data) => {
              return (
                <div style={this.listStyle()} key={data.id}>
                  <p>
                    <input type="checkbox" defaultChecked={false} />
                    {" "}{data.title}
                    <button style={this.btnStyle} onClick={() => this.handleClick(data.id)}>X</button>
                  </p>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

