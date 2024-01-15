import styles from './C.module.css'

const Button = (props) => {
  return (
    <button className="btn btn-dark position-relative m-1">
      Let's Go
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger ">
        {props.count}
        <span className="visually-hidden">unread messages</span>
      </span>

    </button>
  )
}

export default Button
