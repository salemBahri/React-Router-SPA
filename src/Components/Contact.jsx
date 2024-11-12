const Contact = () => {
    return (
        <>
            <main>
                <section className="contact">
                    <h1>Contact Us</h1>
                    <p>If you have any questions or would like to get in touch, please fill out the form below. We look forward to hearing from you!</p>

                    <form action="#" method="POST">
                        <label htmlFor="name">Your Name</label>
                        <input type="text" id="name" name="name" required />

                        <label htmlFor="email">Your Email</label>
                        <input type="email" id="email" name="email" required />

                        <label htmlFor="message">Your Message</label>
                        <textarea id="message" name="message" rows="4" required></textarea>

                        <button type="submit" className="btn-primary">Send Message</button>
                    </form>
                </section>
            </main>
        </>
    );
}

export default Contact;
