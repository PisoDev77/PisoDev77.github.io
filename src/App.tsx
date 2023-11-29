import Footer from './components/Footer';
import Header from './components/Header';
import { HomePage, AboutPage, ProjectsPage, BlogPage } from './components/Pages';

function App() {
    return (
        <main className="bg-primary text-secondary dark:bg-secondary dark:text-primary">
            <HomePage />
            <Header />
            <AboutPage />
            <ProjectsPage />
            <BlogPage />
            <Footer />
        </main>
    );
}

export default App;
