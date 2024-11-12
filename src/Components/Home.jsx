const Home=()=>{
    return(
        <>
        {/* Home */}
            <main>
                <section class="hero">
                    <div class="hero-content">
                        <img src={`${process.env.PUBLIC_URL}/img/logo.png`} style={{ width: '15rem' }} alt="Logo" />
                        <h1>Welcome to Our Website</h1>
                        <p>Your trusted partner in delivering exceptional digital solutions. We help you grow your business online.</p>
                        <a href="Services.html" class="btn-primary">Explore Our Services</a>
                    </div>
                </section>

               
                <section class="features">
                    <h2>Our Features</h2>
                    <div class="feature-cards">
                        <div class="card">
                            <h3>Custom Web Design</h3>
                            <p>We create visually stunning websites tailored to your brand.</p>
                        </div>
                        <div class="card">
                            <h3>SEO & Marketing</h3>
                            <p>Increase your visibility with effective digital marketing strategies.</p>
                        </div>
                        <div class="card">
                            <h3>Responsive Development</h3>
                            <p>Our websites are mobile-friendly, ensuring great user experience on all devices.</p>
                        </div>
                    </div>
                </section>
            </main>


        </>
    )
}
export default Home;