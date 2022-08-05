// Styles
import './Form.css'

export default function Form({ children, handleSubmit }) {
  return (
    <form className="authorization--form" onSubmit={handleSubmit}>
      {children}
    </form>
  )
}
