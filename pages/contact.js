import styles from '../styles/Home.module.css'

export default function Contact() {
    return (
        <div>
            <h2 className={styles.container}>Contact Us</h2>
            <div className="contact">
                <h3> Comments and compliments — we want to hear them all. Let us know how we're doing so we can serve you better. </h3>
                <br/>
                <h3> Contact us at  <a href="mailto: abc@example.com"> email@heb.com </a></h3>
                <h3> For more resources regarding HEB, head to the <a href="https://www.heb.com/static-pages/faq?page=Help-FAQ" target="_blank">Help Center.</a></h3>
            </div>
        </div>
    )
}