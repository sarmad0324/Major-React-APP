


const Input = (props) => {
    return (
    <div>
      <input type="text" onKeyDown={props.keypress} className="border border-secondary p-2 col-12 item-center" />
    </div>
  )
}

export default Input
