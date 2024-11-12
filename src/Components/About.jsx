const About=()=>{
    return(
        <>
                {/* About */}
            <main>
                <section class="about">
                    <section class="hero-team">
                        <div class="hero-content">
                            <h1>Meet the Team</h1>
                        </div>
                    </section>
                    <div class="about-team">
                        
                        <div class="team-cards">
                            <div class="card">
                                <img src={`${process.env.PUBLIC_URL}/img/team-member1.webp`} style={{ width: '15rem' }} alt="Team Member 1" />
                                <h3>John Doe</h3>
                                <p>Founder & CEO</p>
                                <p>John leads the company with a vision of excellence and innovation, always striving to push the boundaries of technology.</p>
                            </div>
                            <div class="card">
                                <img src={`${process.env.PUBLIC_URL}/img/team-member2.webp`} style={{ width: '15rem' }} alt="Team Member 2" />
                                <h3>Jane Smith</h3>
                                <p>Creative Director</p>
                                <p>Jane is responsible for our creative vision and ensures that our projects maintain a unique and innovative touch.</p>
                            </div>
                            <div class="card">
                                <img src={`${process.env.PUBLIC_URL}/img/team-member3.webp`} style={{ width: '15rem' }} alt="Team Member 3" />
                                <h3>Mike Johnson</h3>
                                <p>Chief Technology Officer</p>
                                <p>Mike oversees the technical aspects of our projects, ensuring everything is executed flawlessly from start to finish.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
export default About;