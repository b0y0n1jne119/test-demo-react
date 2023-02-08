import videoHomePage from '../../assets/video-homepage.mp4';

export default function HomePage(props) {
    return (
        <div className="homepage-container">
            <video autoPlay muted loop>
                <source
                    data-testid="currentDefaultVideo"
                    src={videoHomePage}
                    type="video/mp4" />
            </video>
        </div>
    )
}