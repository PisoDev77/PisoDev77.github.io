import { scrollToPage } from '../lib/scroll';

export default function Footer() {
    return (
        <footer>
            <button onClick={() => scrollToPage('home')}>맨 위로 버튼</button>
            <ul>
                <li>SNS</li>
                <li>Mail</li>
                <li>Github</li>
                <li>Blog</li>
            </ul>
        </footer>
    );
}
