// Import Assets
import uniswap from '../assets/uniswap.png';
import compound from '../assets/compound.png';
import aave from '../assets/aave.png';

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>Etherum coin</h3>
                    <img src={uniswap} alt="Uniswap Swap Page" />
                    <p>Creating your own cryptocurrency can be a challenging process, but with the right tools and knowledge, it can be a rewarding experience that allows you to bring your vision to life. It's important to remember, however, that creating a successful cryptocurrency requires more than just technical skills - it also requires a deep understanding of the market, user needs, and other factors that can impact the success of your cryptocurrency.
                    </p>

                    <a href="https://www.linkedin.com/in/sarthak-singh-481b76176/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/Sarthaksingh-7" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>CyberShop</h3>
                    <img src={compound} alt="Compound Landing Page" />
                    <p>A company that provides a range of cybersecurity services to help organizations protect their networks, systems, and data from cyber threats. These firms typically have a team of experienced cybersecurity professionals who use a variety of tools and techniques to identify and mitigate security risks, and to prevent unauthorized access or data breaches.
                    </p>

                    <a href="https://www.linkedin.com/in/sarthak-singh-481b76176/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/Sarthaksingh-7" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>PetaScale to Exascale</h3>
                    <img src={aave} alt="Aave Landing Page" />
                    <p>The move from petascale to exascale computing represents a significant leap in computing power and requires the development of new hardware and software technologies to achieve. Exascale computing has the potential to significantly advance a range of scientific and engineering applications, from climate modeling and drug discovery to national security and space exploration. However, it also poses significant challenges in terms of energy consumption, data storage and management, and software optimization.
                    </p>

                    <a href="https://www.linkedin.com/in/sarthak-singh-481b76176/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/Sarthaksingh-7" target="_blank" className="button">Code</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;