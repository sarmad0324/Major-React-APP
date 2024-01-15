//use npm create vite@latest
// npm install
import { useState } from "react"
import Container from "./components/container";
import Button from "./components/Button"
import Todo from "./components/Todo";
import Input from "./components/Input";
import Form from "./components/Form";
import { SiInstatus } from "react-icons/si";


function App() {
  //map method
  let [text, setText]=useState([])
  const change=(event)=>{
    if(event.key==="Enter"){
      let newtodo=event.target.value 
      event.target.value=""
      let todo=[...text,newtodo]
      setText(todo)
    }
  }
  const del =(i)=>{
    const todo=text.filter(text => text!=i)
    setText(todo)
  }
  
  
  let message = text.length == 0 ? <h3>Todo is empty</h3> : null;

  return (
    <>
      <Container>
      
        <h1 className="p-2 text-center bg-secondary-subtle">This is a major react app <SiInstatus /></h1>
        <Input keypress={change}/>
        <Todo list={text} msg={message} click={del}/>
        <Button count={text.length} />
      </Container>
      <Container>
        <Form/>
      </Container>
      {/* <Container>
        <p>Todo App</p>
      </Container> */}
    </>
  )
}
export default App