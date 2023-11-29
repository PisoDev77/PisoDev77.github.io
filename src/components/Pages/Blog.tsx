import Page from './Page';
import { PageTitle } from '../Title';

export default function BlogPage() {
    return (
        <Page
            id="blog"
            title={<PageTitle>Blog</PageTitle>}
            content={
                <div>
                    <p>Blog</p>
                </div>
            }
        />
    );
}
