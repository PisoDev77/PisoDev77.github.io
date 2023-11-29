import Page from './Page';
import { PageTitle } from '../Title';
import { scrollToPage } from '../../lib/scroll';

export default function HomePage() {
    const handleViewBtn = () => {
        scrollToPage('about');
    };

    return (
        <Page
            id="home"
            title={<PageTitle>Home</PageTitle>}
            content={
                <div>
                    <p>
                        안녕하세요, 프론트엔드 개발을 하는 Piso입니다. 같이 일하기 좋고, 작업들이 보기 좋아야 한다고
                        생각하고 있습니다.
                    </p>
                    <button onClick={handleViewBtn}>viw page</button>
                </div>
            }
        />
    );
}
