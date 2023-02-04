import {Card} from '../UI/Card'
import {Button} from '../UI/Button'
import styles from './errorModal.module.css'

export const ErrorModal = props => {
  const onClickHandler = () => {
    props.setOk(true)
  }
  return (
    <div>
        <div className={styles.backdrop} />
        <Card className={styles.modal}>
            <header className={styles.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={styles.content}>
                {props.message}
            </div>
            <footer className={styles.actions}>
                <Button onClick={onClickHandler}>Ok</Button>
            </footer>
        </Card>
    </div>
  )
}
