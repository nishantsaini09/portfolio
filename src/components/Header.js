// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Nishant Saini" />

            <div className='header__content'>
                <h1>Hi, I'm Nishant Saini</h1>
                <p>Full Stack Web Developer</p>
                <button   className='button'><a href="mailto:nishantsaini009@gmail.com" style={{textDecoration: 'none'}}>
                    Get In Touch</a></button>
            </div>
        </section>
    );
}

export default Header;